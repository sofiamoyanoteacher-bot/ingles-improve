import { useEffect, useRef, useState } from 'react';
import { api } from '../../api';

const HOUR_H = 64;      // px per hour in the grid
const START_H = 7;      // grid starts at 7 am
const END_H = 22;       // grid ends at 10 pm
const HOURS = Array.from({ length: END_H - START_H }, (_, i) => i + START_H);
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_FULL  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Distinct colours for different students (cycles)
const COLORS = [
  'bg-blue-500', 'bg-violet-500', 'bg-green-500', 'bg-orange-400',
  'bg-pink-500', 'bg-teal-500', 'bg-red-400', 'bg-indigo-500',
];

function weekStart(d) {
  const s = new Date(d);
  s.setDate(s.getDate() - s.getDay()); // Sunday
  s.setHours(0, 0, 0, 0);
  return s;
}

function addDays(d, n) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

function fmtHour(h) {
  return h === 12 ? '12 PM' : h < 12 ? `${h} AM` : `${h - 12} PM`;
}

function fmtTime(iso) {
  const d = new Date(iso.replace(' ', 'T'));
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function fmtDate(d) {
  return d.toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric', month: 'short' });
}

function classTop(iso) {
  const d = new Date(iso.replace(' ', 'T'));
  return ((d.getHours() - START_H) + d.getMinutes() / 60) * HOUR_H;
}

function classHeight(dur) {
  return (dur / 60) * HOUR_H;
}

const BLANK_FORM = {
  student_id: '', scheduled_at: '', duration_min: 60,
  meet_link: '', notes: '',
  repeat: false, recur_days: [], recur_until: '',
};

export default function Calendar() {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [week, setWeek] = useState(() => weekStart(new Date()));
  const [form, setForm] = useState(BLANK_FORM);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleteMenu, setDeleteMenu] = useState(null); // { id, groupId, x, y }
  const gridRef = useRef(null);

  // assign a stable colour per student id
  const colorFor = (sid) => COLORS[sid % COLORS.length];

  useEffect(() => {
    api.teacherStudents().then(({ students }) => setStudents(students));
    loadClasses();
  }, []);

  function loadClasses() {
    api.calendarGetClasses().then(({ classes }) => setClasses(classes));
  }

  // days of the current week
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(week, i));

  // classes visible in this week
  const weekClasses = classes.filter((c) => {
    const d = new Date(c.scheduled_at.replace(' ', 'T'));
    const ds = isoDate(d);
    return ds >= isoDate(week) && ds <= isoDate(addDays(week, 6));
  });

  // group overlapping classes in the same day column
  function classesForDay(dayDate) {
    const ds = isoDate(dayDate);
    return weekClasses.filter((c) => isoDate(new Date(c.scheduled_at.replace(' ', 'T'))) === ds);
  }

  function openNew(dayDate, hour) {
    const dt = new Date(dayDate);
    dt.setHours(hour, 0, 0, 0);
    const local = `${isoDate(dt)}T${String(hour).padStart(2,'0')}:00`;
    // default recur_until = end of that month
    const endOfMonth = new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
    setEditId(null);
    setForm({
      ...BLANK_FORM,
      scheduled_at: local,
      recur_until: isoDate(endOfMonth),
    });
    setShowForm(true);
  }

  function openEdit(cls) {
    const dt = cls.scheduled_at.replace(' ', 'T').slice(0, 16);
    setEditId(cls.id);
    setForm({
      student_id: String(cls.student_id),
      scheduled_at: dt,
      duration_min: cls.duration_min,
      meet_link: cls.meet_link || '',
      notes: cls.notes || '',
      repeat: false, recur_days: [], recur_until: '',
    });
    setShowForm(true);
  }

  async function save() {
    if (!form.student_id || !form.scheduled_at) return;
    setSaving(true);
    try {
      const payload = {
        student_id: Number(form.student_id),
        scheduled_at: form.scheduled_at.replace('T', ' '),
        duration_min: Number(form.duration_min),
        meet_link: form.meet_link,
        notes: form.notes,
      };
      if (!editId && form.repeat && form.recur_days.length > 0 && form.recur_until) {
        payload.recur_days = form.recur_days.map(Number);
        payload.recur_until = form.recur_until;
      }
      if (editId) {
        await api.calendarUpdateClass(editId, payload);
      } else {
        await api.calendarCreateClass(payload);
      }
      setShowForm(false);
      loadClasses();
    } finally {
      setSaving(false);
    }
  }

  async function markDone(cls, e) {
    e.stopPropagation();
    await api.calendarSetAttendance(cls.id, { attended: true, material_covered: '' });
    loadClasses();
  }

  function onClassClick(cls, e) {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setDeleteMenu({ id: cls.id, groupId: cls.recurrence_group_id, cls, x: rect.left, y: rect.bottom });
  }

  async function deleteOne() {
    await api.calendarDeleteClass(deleteMenu.id, false);
    setDeleteMenu(null);
    loadClasses();
  }

  async function deleteGroup() {
    await api.calendarDeleteClass(deleteMenu.id, true);
    setDeleteMenu(null);
    loadClasses();
  }

  function toggleRecurDay(d) {
    setForm((f) => ({
      ...f,
      recur_days: f.recur_days.includes(d) ? f.recur_days.filter((x) => x !== d) : [...f.recur_days, d],
    }));
  }

  const today = isoDate(new Date());

  return (
    <div className="relative" onClick={() => setDeleteMenu(null)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => setWeek(w => addDays(w, -7))} className="p-1.5 rounded-lg hover:bg-gray-100">‹</button>
          <h2 className="text-lg font-semibold">
            {week.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}
          </h2>
          <button onClick={() => setWeek(w => addDays(w, 7))} className="p-1.5 rounded-lg hover:bg-gray-100">›</button>
          <button onClick={() => setWeek(weekStart(new Date()))} className="px-3 py-1 text-xs bg-gray-100 rounded-lg hover:bg-gray-200">Today</button>
        </div>
        <button onClick={() => openNew(new Date(), 9)} className="px-4 py-2 bg-grad text-white rounded-xl text-sm font-medium">
          + New class
        </button>
      </div>

      {/* Grid */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {/* Day headers */}
        <div className="grid grid-cols-[52px_repeat(7,1fr)] border-b border-gray-100">
          <div className="py-2" />
          {weekDays.map((d, i) => {
            const ds = isoDate(d);
            const isToday = ds === today;
            return (
              <div key={i} className="py-2 text-center border-l border-gray-100 first:border-l-0">
                <div className="text-xs text-gray-400 uppercase">{DAY_NAMES[d.getDay()]}</div>
                <div className={`text-lg font-semibold mx-auto w-9 h-9 flex items-center justify-center rounded-full
                  ${isToday ? 'bg-blue-600 text-white' : 'text-gray-700'}`}>
                  {d.getDate()}
                </div>
              </div>
            );
          })}
        </div>

        {/* Time grid */}
        <div className="overflow-y-auto max-h-[calc(100vh-260px)]" ref={gridRef}>
          <div className="grid grid-cols-[52px_repeat(7,1fr)] relative">
            {/* Hour labels + horizontal lines */}
            <div className="col-span-8">
              {HOURS.map((h) => (
                <div key={h} className="grid grid-cols-[52px_repeat(7,1fr)]" style={{ height: HOUR_H }}>
                  <div className="flex items-start justify-end pr-2 pt-0.5">
                    <span className="text-[10px] text-gray-400">{fmtHour(h)}</span>
                  </div>
                  {weekDays.map((_, di) => (
                    <div key={di} className="border-l border-t border-gray-100 cursor-pointer hover:bg-blue-50/30 transition-colors"
                      onClick={() => openNew(weekDays[di], h)} />
                  ))}
                </div>
              ))}
            </div>

            {/* Class blocks — absolutely positioned over the grid */}
            {weekDays.map((d, di) => {
              const dayCls = classesForDay(d);
              return (
                <div key={di} className="absolute" style={{
                  left: `calc(52px + ${di} * ((100% - 52px) / 7))`,
                  width: `calc((100% - 52px) / 7)`,
                  top: 0,
                  height: HOURS.length * HOUR_H,
                  pointerEvents: 'none',
                }}>
                  {dayCls.map((cls) => {
                    const top = classTop(cls.scheduled_at);
                    const height = Math.max(classHeight(cls.duration_min), 22);
                    const color = colorFor(cls.student_id);
                    const isDone = cls.status === 'done';
                    return (
                      <div key={cls.id}
                        onClick={(e) => onClassClick(cls, e)}
                        style={{ position: 'absolute', top, left: 3, right: 3, height, pointerEvents: 'all', zIndex: 10 }}
                        className={`${color} ${isDone ? 'opacity-50' : ''} text-white rounded-lg px-1.5 py-0.5 cursor-pointer overflow-hidden shadow-sm hover:brightness-90 transition-all`}>
                        <div className="text-[11px] font-semibold leading-tight truncate">
                          {cls.student_name} {cls.student_last_name}
                        </div>
                        {height > 30 && (
                          <div className="text-[10px] opacity-80 truncate">
                            {fmtTime(cls.scheduled_at)} · {cls.duration_min}m
                          </div>
                        )}
                        {height > 44 && cls.meet_link && (
                          <div className="text-[10px] opacity-70 truncate">🎥 Meet</div>
                        )}
                        {isDone && <div className="text-[9px] opacity-70">✓ done</div>}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Context menu when clicking a class */}
      {deleteMenu && (
        <div className="fixed z-50 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[200px]"
          style={{ left: Math.min(deleteMenu.x, window.innerWidth - 220), top: deleteMenu.y + 4 }}
          onClick={(e) => e.stopPropagation()}>
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 border-b border-gray-100">
            {deleteMenu.cls.student_name} {deleteMenu.cls.student_last_name}
          </div>
          <button onClick={() => { openEdit(deleteMenu.cls); setDeleteMenu(null); }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">✏️ Edit</button>
          {deleteMenu.cls.status !== 'done' && (
            <button onClick={(e) => { e.stopPropagation(); markDone(deleteMenu.cls, e).then(() => setDeleteMenu(null)); }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">✅ Mark as done</button>
          )}
          {deleteMenu.cls.meet_link && (
            <a href={deleteMenu.cls.meet_link} target="_blank" rel="noopener noreferrer"
              className="block px-4 py-2 text-sm hover:bg-gray-50">🎥 Open Meet link</a>
          )}
          <div className="border-t border-gray-100 mt-1" />
          <button onClick={deleteOne} className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">
            🗑 Delete this class
          </button>
          {deleteMenu.groupId && (
            <button onClick={deleteGroup} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium">
              🗑 Delete all recurring classes
            </button>
          )}
        </div>
      )}

      {/* New / Edit form modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="font-bold text-lg mb-4">{editId ? 'Edit class' : 'Schedule class'}</h2>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Student</label>
                <select value={form.student_id} onChange={(e) => setForm((f) => ({ ...f, student_id: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm">
                  <option value="">Select student…</option>
                  {students.map((s) => (
                    <option key={s.id} value={s.id}>{s.name} {s.last_name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Date & time</label>
                  <input type="datetime-local" value={form.scheduled_at}
                    onChange={(e) => setForm((f) => ({ ...f, scheduled_at: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Duration (min)</label>
                  <input type="number" value={form.duration_min} min={15} step={15}
                    onChange={(e) => setForm((f) => ({ ...f, duration_min: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm" />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1 block">Google Meet link</label>
                <input type="url" value={form.meet_link} placeholder="https://meet.google.com/..."
                  onChange={(e) => setForm((f) => ({ ...f, meet_link: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm" />
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1 block">Notes</label>
                <input value={form.notes} placeholder="Optional"
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm" />
              </div>

              {!editId && (
                <div className="border border-gray-200 rounded-xl p-3 space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium cursor-pointer select-none">
                    <input type="checkbox" checked={form.repeat}
                      onChange={(e) => setForm((f) => ({ ...f, repeat: e.target.checked }))} />
                    Repeat weekly
                  </label>
                  {form.repeat && (
                    <>
                      <div>
                        <div className="text-xs font-medium text-gray-600 mb-2">
                          Days — tap to select, tap again to deselect (pick as many as you need)
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {DAY_FULL.map((name, di) => {
                            const selected = form.recur_days.includes(di);
                            return (
                              <button key={di} type="button"
                                onClick={(e) => { e.stopPropagation(); toggleRecurDay(di); }}
                                className={`w-12 h-10 rounded-xl text-xs font-semibold border-2 transition-all
                                  ${selected
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105'
                                    : 'bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-600'}`}>
                                {name.slice(0, 3)}
                              </button>
                            );
                          })}
                        </div>
                        {form.recur_days.length > 0 && (
                          <div className="mt-2 text-xs text-blue-700 font-medium">
                            ✓ {form.recur_days.length} day{form.recur_days.length > 1 ? 's' : ''} selected: {form.recur_days.map(d => DAY_FULL[d]).join(', ')}
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Repeat until</label>
                        <input type="date" value={form.recur_until}
                          onChange={(e) => setForm((f) => ({ ...f, recur_until: e.target.value }))}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm" />
                      </div>
                      {form.recur_days.length > 0 && form.recur_until && (
                        <div className="text-xs text-blue-700 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2 font-medium">
                          📅 Every {form.recur_days.map(d => DAY_FULL[d]).join(' & ')} until {form.recur_until}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-5">
              <button onClick={save} disabled={saving || !form.student_id || !form.scheduled_at}
                className="flex-1 py-2.5 bg-grad text-white rounded-xl text-sm font-semibold disabled:opacity-50">
                {saving ? 'Saving…' : editId ? 'Save changes' : form.repeat && form.recur_days.length > 0 ? 'Create recurring classes' : 'Create class'}
              </button>
              <button onClick={() => setShowForm(false)} className="px-4 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
