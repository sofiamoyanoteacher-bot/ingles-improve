import { useEffect, useState } from 'react';
import { api } from '../../api';
import { useAuth } from '../../context/AuthContext.jsx';

function pct(done, total) {
  return total ? Math.round((done / total) * 100) : 0;
}

export default function Reports() {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [progress, setProgress] = useState([]);
  const [classes, setClasses] = useState([]);
  const [attendance, setAttendance] = useState({ done: 0, total: 0 });
  const [attForm, setAttForm] = useState({ classId: '', attended: true, material_covered: '' });
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    const fetch = user?.teacher_type === 'admin'
      ? api.teacherStudents()
      : api.calendarMyStudents();
    fetch.then(({ students }) => setStudents(students));
  }, [user]);

  async function selectStudent(s) {
    setSelected(s);
    setLoading(true);
    const [prog, cls] = await Promise.all([
      api.teacherStudentProgress(s.id),
      api.calendarGetClasses({ studentId: s.id }),  // filter not in API yet — filtered client side
    ]);
    setProgress(prog.progress || []);
    // calendarGetClasses returns all classes; filter by student
    const all = cls.classes || [];
    const studentCls = all.filter((c) => c.student_id === s.id);
    setClasses(studentCls);
    const done = studentCls.filter((c) => c.status === 'done').length;
    setAttendance({ done, total: studentCls.length });
    setAttForm({ classId: '', attended: true, material_covered: '' });
    setLoading(false);
  }

  async function saveAttendance() {
    if (!attForm.classId) return;
    await api.calendarSetAttendance(attForm.classId, { attended: attForm.attended, material_covered: attForm.material_covered });
    await selectStudent(selected);
  }

  const unitsDone = progress.filter((p) => {
    const cp = typeof p.class_progress === 'object' ? p.class_progress : {};
    return Object.values(cp).every(Boolean);
  }).length;

  const classesDone = progress.reduce((sum, p) => {
    const cp = typeof p.class_progress === 'object' ? p.class_progress : {};
    return sum + Object.values(cp).filter(Boolean).length;
  }, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">📋 Student Reports</h1>
      <div className="flex gap-6">
        {/* student list */}
        <div className="w-56 flex-shrink-0 space-y-1">
          {students.map((s) => (
            <button key={s.id} onClick={() => selectStudent(s)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors ${selected?.id === s.id ? 'bg-grad text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
              {s.name} {s.last_name}
              <div className={`text-xs ${selected?.id === s.id ? 'text-white/70' : 'text-gray-400'}`}>{s.program}</div>
            </button>
          ))}
        </div>

        {/* report panel */}
        <div className="flex-1 space-y-5">
          {!selected && <p className="text-sm text-gray-400 mt-10 text-center">Select a student to view their report.</p>}

          {selected && loading && <p className="text-sm text-gray-400">Loading…</p>}

          {selected && !loading && (
            <>
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <h2 className="font-semibold text-lg mb-1">{selected.name} {selected.last_name}</h2>
                <div className="text-xs text-gray-400 mb-4">{selected.email} · {selected.program}</div>
                <div className="grid grid-cols-3 gap-4">
                  <Stat label="Units completed" value={unitsDone} />
                  <Stat label="Classes done" value={classesDone} />
                  <Stat label="Attendance" value={`${attendance.done}/${attendance.total}`} sub={`${pct(attendance.done, attendance.total)}%`} />
                </div>
              </div>

              {/* material covered per class */}
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold mb-3">Class history</h3>
                {classes.length === 0
                  ? <p className="text-sm text-gray-400">No classes scheduled yet.</p>
                  : (
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-xs text-gray-400 border-b border-gray-100">
                          <th className="text-left pb-2">Date</th>
                          <th className="text-left pb-2">Status</th>
                          <th className="text-left pb-2">Material covered</th>
                          <th className="text-left pb-2">Meet</th>
                        </tr>
                      </thead>
                      <tbody>
                        {classes.sort((a,b) => b.scheduled_at.localeCompare(a.scheduled_at)).map((c) => {
                          const att = c.attendance?.[0];
                          return (
                            <tr key={c.id} className="border-b border-gray-50">
                              <td className="py-2 text-gray-600">{new Date(c.scheduled_at).toLocaleDateString('es-AR')}</td>
                              <td className="py-2">
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${c.status === 'done' ? 'bg-green-100 text-green-700' : c.status === 'cancelled' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-700'}`}>{c.status}</span>
                              </td>
                              <td className="py-2 text-gray-500">{att?.material_covered || '—'}</td>
                              <td className="py-2">
                                {c.meet_link ? <a href={c.meet_link} target="_blank" rel="noopener noreferrer" className="text-xs text-violet-600 hover:underline">Link</a> : '—'}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
              </div>

              {/* mark attendance */}
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold mb-3">Update attendance / material</h3>
                <div className="flex flex-wrap gap-3 items-end">
                  <select value={attForm.classId} onChange={(e) => setAttForm({ ...attForm, classId: e.target.value })}
                    className="border border-gray-200 rounded-xl px-3 py-2 text-sm">
                    <option value="">Select class…</option>
                    {classes.map((c) => <option key={c.id} value={c.id}>{new Date(c.scheduled_at).toLocaleDateString('es-AR')} ({c.status})</option>)}
                  </select>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={attForm.attended} onChange={(e) => setAttForm({ ...attForm, attended: e.target.checked })} />
                    Attended
                  </label>
                  <input value={attForm.material_covered} onChange={(e) => setAttForm({ ...attForm, material_covered: e.target.value })}
                    placeholder="Material covered" className="border border-gray-200 rounded-xl px-3 py-2 text-sm flex-1 min-w-48" />
                  <button onClick={saveAttendance} className="px-4 py-2 bg-grad text-white rounded-xl text-sm font-medium">Save</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, sub }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 text-center">
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      {sub && <div className="text-xs text-gray-400">{sub}</div>}
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}
