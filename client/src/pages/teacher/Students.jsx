import { useEffect, useState } from 'react';
import { api } from '../../api';
import { UNITS } from '../../data/units';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', last_name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [progressByUser, setProgressByUser] = useState({});

  function load() {
    api.teacherStudents().then(({ students }) => setStudents(students));
  }
  useEffect(load, []);

  async function handleCreate(e) {
    e.preventDefault();
    setError('');
    try {
      await api.teacherCreateStudent(form);
      setModalOpen(false);
      setForm({ name: '', last_name: '', email: '', password: '' });
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function toggleActive(s) {
    await api.teacherUpdateStudent(s.id, { active: s.active ? 0 : 1 });
    load();
  }

  async function toggleExpand(s) {
    if (expandedId === s.id) { setExpandedId(null); return; }
    setExpandedId(s.id);
    if (!progressByUser[s.id]) {
      const { progress } = await api.teacherStudentProgress(s.id);
      setProgressByUser((prev) => ({ ...prev, [s.id]: progress }));
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Students</h1>
        <button onClick={() => setModalOpen(true)} className="px-5 py-2.5 bg-grad rounded-xl text-white text-sm font-semibold hover:opacity-90">
          + New student
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {students.map((s) => {
          const progress = progressByUser[s.id] || [];
          return (
            <div key={s.id} className="card border border-gray-100">
              <div className="flex items-center gap-4 p-4 cursor-pointer" onClick={() => toggleExpand(s)}>
                <div className="w-10 h-10 rounded-full bg-grad flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {(s.name[0] + (s.last_name?.[0] || '')).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{s.name} {s.last_name}</div>
                  <div className="text-xs text-gray-500">{s.email}</div>
                </div>
                <div className="text-xs text-gray-500">Submissions: {s.total_submissions}</div>
                <div className="text-xs">
                  {s.pending_submissions > 0 && <span className="text-yellow-600 font-semibold">{s.pending_submissions} pending</span>}
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${s.active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {s.active ? 'Active' : 'Inactive'}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleActive(s); }}
                  className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg hover:border-mag"
                >
                  {s.active ? 'Deactivate' : 'Activate'}
                </button>
              </div>

              {expandedId === s.id && (
                <div className="border-t border-gray-100 p-4">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3">Progress per unit</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {UNITS.map((u, i) => {
                      const row = progress.find((p) => p.unit_index === i);
                      const done = row && row.reading_done && row.grammar_done && row.listening_done && row.letstalk_done;
                      return (
                        <div key={u.num} className={`rounded-lg p-2.5 text-center text-xs ${done ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-400'}`}>
                          <div className="font-semibold">Unit {u.num}</div>
                          <div>{done ? '✅' : row ? '🟡' : '—'}</div>
                          {row?.listening_score != null && <div className="mt-1 text-[10px]">Listening: {row.listening_score}/4</div>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="bg-white rounded-2xl p-7 w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">New student</h2>
            <form onSubmit={handleCreate} className="space-y-3">
              <input required placeholder="First name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
              <input placeholder="Last name" value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
              <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
              <input required type="text" placeholder="Temporary password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
              {error && <div className="text-sm text-red-600">{error}</div>}
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => setModalOpen(false)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm">Cancel</button>
                <button type="submit" className="flex-1 py-2.5 bg-grad rounded-xl text-white text-sm font-semibold">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
