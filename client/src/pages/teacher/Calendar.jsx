import { useEffect, useState } from 'react';
import { api } from '../../api';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const HOURS = Array.from({ length: 14 }, (_, i) => i + 7); // 7:00 – 20:00

function fmt(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleString('es-AR', { dateStyle: 'short', timeStyle: 'short' });
}

export default function Calendar() {
  const [students, setStudents] = useState([]);
  const [slots, setSlots] = useState([]); // { day_of_week, hour }
  const [classes, setClasses] = useState([]);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ student_id: '', scheduled_at: '', meet_link: '', notes: '', duration_min: 60 });
  const [editId, setEditId] = useState(null);
  const [tab, setTab] = useState('schedule'); // 'schedule' | 'availability'

  useEffect(() => {
    api.teacherStudents().then(({ students }) => setStudents(students));
    api.calendarGetAvailability().then(({ slots }) => setSlots(slots));
    reload();
  }, []);

  function reload() {
    api.calendarGetClasses().then(({ classes }) => setClasses(classes));
  }

  function toggleSlot(day, hour) {
    const exists = slots.some((s) => s.day_of_week === day && s.hour === hour);
    const next = exists
      ? slots.filter((s) => !(s.day_of_week === day && s.hour === hour))
      : [...slots, { day_of_week: day, hour, minute: 0 }];
    setSlots(next);
  }

  async function saveAvailability() {
    setSaving(true);
    await api.calendarSetAvailability(slots);
    setSaving(false);
  }

  function openNew() {
    setEditId(null);
    setForm({ student_id: '', scheduled_at: '', meet_link: '', notes: '', duration_min: 60 });
    setShowForm(true);
  }

  function openEdit(cls) {
    setEditId(cls.id);
    const dt = cls.scheduled_at.replace(' ', 'T').slice(0, 16);
    setForm({ student_id: cls.student_id, scheduled_at: dt, meet_link: cls.meet_link || '', notes: cls.notes || '', duration_min: cls.duration_min || 60 });
    setShowForm(true);
  }

  async function saveClass() {
    if (!form.student_id || !form.scheduled_at) return;
    const payload = { ...form, student_id: Number(form.student_id), duration_min: Number(form.duration_min) };
    if (editId) {
      await api.calendarUpdateClass(editId, payload);
    } else {
      await api.calendarCreateClass(payload);
    }
    setShowForm(false);
    reload();
  }

  async function markDone(cls) {
    await api.calendarSetAttendance(cls.id, { attended: true, material_covered: '' });
    reload();
  }

  async function cancel(cls) {
    await api.calendarUpdateClass(cls.id, { status: 'cancelled' });
    reload();
  }

  async function del(cls) {
    if (!confirm('¿Eliminar clase?')) return;
    await api.calendarDeleteClass(cls.id);
    reload();
  }

  const upcoming = classes.filter((c) => c.status === 'scheduled').sort((a, b) => a.scheduled_at.localeCompare(b.scheduled_at));
  const past = classes.filter((c) => c.status !== 'scheduled').sort((a, b) => b.scheduled_at.localeCompare(a.scheduled_at));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">📅 Calendar</h1>
        <div className="flex gap-2">
          <button onClick={() => setTab('schedule')} className={`px-4 py-2 rounded-xl text-sm font-medium ${tab === 'schedule' ? 'bg-grad text-white' : 'bg-gray-100 text-gray-600'}`}>Schedule</button>
          <button onClick={() => setTab('availability')} className={`px-4 py-2 rounded-xl text-sm font-medium ${tab === 'availability' ? 'bg-grad text-white' : 'bg-gray-100 text-gray-600'}`}>My availability</button>
        </div>
      </div>

      {tab === 'availability' && (
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500 mb-4">Click a cell to mark it as available. Students will see when you're free.</p>
          <div className="overflow-x-auto">
            <table className="text-xs border-collapse">
              <thead>
                <tr>
                  <th className="w-10" />
                  {DAYS.map((d) => <th key={d} className="px-3 py-1 font-medium text-gray-500">{d}</th>)}
                </tr>
              </thead>
              <tbody>
                {HOURS.map((h) => (
                  <tr key={h}>
                    <td className="pr-2 text-right text-gray-400">{h}:00</td>
                    {DAYS.map((_, di) => {
                      const on = slots.some((s) => s.day_of_week === di && s.hour === h);
                      return (
                        <td key={di} onClick={() => toggleSlot(di, h)}
                          className={`w-14 h-8 border border-gray-100 cursor-pointer rounded transition-colors ${on ? 'bg-violet-500' : 'hover:bg-gray-50'}`} />
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={saveAvailability} disabled={saving} className="mt-4 px-5 py-2 bg-grad text-white rounded-xl text-sm font-medium">
            {saving ? 'Saving…' : 'Save availability'}
          </button>
        </div>
      )}

      {tab === 'schedule' && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <button onClick={openNew} className="px-4 py-2 bg-grad text-white rounded-xl text-sm font-medium">+ New class</button>
          </div>

          {showForm && (
            <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3">
              <h2 className="font-semibold">{editId ? 'Edit class' : 'Schedule new class'}</h2>
              <select value={form.student_id} onChange={(e) => setForm({ ...form, student_id: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm">
                <option value="">Select student…</option>
                {students.map((s) => <option key={s.id} value={s.id}>{s.name} {s.last_name} ({s.email})</option>)}
              </select>
              <input type="datetime-local" value={form.scheduled_at} onChange={(e) => setForm({ ...form, scheduled_at: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm" />
              <input type="number" value={form.duration_min} onChange={(e) => setForm({ ...form, duration_min: e.target.value })}
                placeholder="Duration (min)" className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm" />
              <input type="url" value={form.meet_link} onChange={(e) => setForm({ ...form, meet_link: e.target.value })}
                placeholder="Google Meet link" className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm" />
              <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Notes (optional)" rows={2} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none" />
              <div className="flex gap-2">
                <button onClick={saveClass} className="px-4 py-2 bg-grad text-white rounded-xl text-sm font-medium">Save</button>
                <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium">Cancel</button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <h2 className="font-semibold mb-3">Upcoming classes</h2>
            {upcoming.length === 0 ? <p className="text-sm text-gray-400">No upcoming classes.</p> : (
              <div className="space-y-3">
                {upcoming.map((cls) => (
                  <div key={cls.id} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{cls.student_name} {cls.student_last_name}</div>
                      <div className="text-xs text-gray-500">{fmt(cls.scheduled_at)} · {cls.duration_min} min</div>
                      {cls.meet_link && (
                        <a href={cls.meet_link} target="_blank" rel="noopener noreferrer"
                          className="text-xs text-violet-600 hover:underline break-all">🎥 {cls.meet_link}</a>
                      )}
                      {cls.notes && <div className="text-xs text-gray-400 mt-0.5">{cls.notes}</div>}
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <button onClick={() => openEdit(cls)} className="px-2 py-1 text-xs bg-gray-100 rounded-lg">Edit</button>
                      <button onClick={() => markDone(cls)} className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-lg">✓ Done</button>
                      <button onClick={() => cancel(cls)} className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-lg">Cancel</button>
                      <button onClick={() => del(cls)} className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-lg">Del</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {past.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <h2 className="font-semibold mb-3 text-gray-500">Past classes</h2>
              <div className="space-y-2">
                {past.slice(0, 20).map((cls) => (
                  <div key={cls.id} className="flex items-center gap-3 p-2 rounded-xl text-sm text-gray-500">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${cls.status === 'done' ? 'bg-green-100 text-green-700' : 'bg-gray-100'}`}>{cls.status}</span>
                    <span>{cls.student_name} {cls.student_last_name}</span>
                    <span className="text-xs">{fmt(cls.scheduled_at)}</span>
                    {cls.meet_link && <a href={cls.meet_link} target="_blank" rel="noopener noreferrer" className="text-xs text-violet-600 hover:underline">🎥 Meet</a>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
