import { useEffect, useState } from 'react';
import { api } from '../../api';
import { UNITS } from '../../data/units';

const STATUS_BADGE = {
  pending: { label: '🟡 Pendiente', cls: 'bg-yellow-50 text-yellow-700' },
  reviewed: { label: '✅ Revisado', cls: 'bg-green-50 text-green-700' },
};

export default function HomeworkInbox() {
  const [submissions, setSubmissions] = useState([]);
  const [students, setStudents] = useState([]);
  const [filters, setFilters] = useState({ studentId: '', unitIndex: '', status: '' });
  const [active, setActive] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [saving, setSaving] = useState(false);

  function load() {
    const query = {};
    if (filters.studentId) query.studentId = filters.studentId;
    if (filters.unitIndex !== '') query.unitIndex = filters.unitIndex;
    if (filters.status) query.status = filters.status;
    api.teacherHomework(query).then(({ submissions }) => setSubmissions(submissions));
  }

  useEffect(() => { api.teacherStudents().then(({ students }) => setStudents(students)); }, []);
  useEffect(load, [filters]);

  function openSubmission(s) {
    setActive(s);
    setFeedbackText(s.feedback_text || '');
  }

  async function sendFeedback() {
    if (!feedbackText.trim()) return;
    setSaving(true);
    try {
      if (active.feedback_text) await api.teacherEditFeedback(active.id, feedbackText);
      else await api.teacherSendFeedback(active.id, feedbackText);
      setActive(null);
      load();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Homework</h1>

      <div className="flex gap-3 mb-5 flex-wrap">
        <select value={filters.studentId} onChange={(e) => setFilters({ ...filters, studentId: e.target.value })}
          className="px-3.5 py-2 border border-gray-200 rounded-xl text-sm">
          <option value="">Todos los alumnos</option>
          {students.map((s) => <option key={s.id} value={s.id}>{s.name} {s.last_name}</option>)}
        </select>
        <select value={filters.unitIndex} onChange={(e) => setFilters({ ...filters, unitIndex: e.target.value })}
          className="px-3.5 py-2 border border-gray-200 rounded-xl text-sm">
          <option value="">Todas las unidades</option>
          {UNITS.map((u, i) => <option key={u.num} value={i}>Unit {u.num}</option>)}
        </select>
        <select value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="px-3.5 py-2 border border-gray-200 rounded-xl text-sm">
          <option value="">Todos los estados</option>
          <option value="pending">Pendiente</option>
          <option value="reviewed">Revisado</option>
        </select>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-200">
              <th className="py-3 px-4">Alumno</th>
              <th className="py-3 px-4">Unidad</th>
              <th className="py-3 px-4">Archivos</th>
              <th className="py-3 px-4">Fecha</th>
              <th className="py-3 px-4">Estado</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => {
              const badge = STATUS_BADGE[s.feedback_text ? 'reviewed' : s.status] || STATUS_BADGE.pending;
              const unit = UNITS[s.unit_index];
              return (
                <tr key={s.id} className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <div className="font-medium">{s.name} {s.last_name}</div>
                    <div className="text-xs text-gray-500">{s.email}</div>
                  </td>
                  <td className="py-3 px-4">Unit {unit?.num}</td>
                  <td className="py-3 px-4 text-gray-500">{s.files.length} archivo(s)</td>
                  <td className="py-3 px-4 text-gray-500">{new Date(s.submitted_at).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badge.cls}`}>{badge.label}</span>
                  </td>
                  <td className="py-3 px-4">
                    <button onClick={() => openSubmission(s)} className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg hover:border-sky">
                      Revisar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-end z-50" onClick={(e) => e.target === e.currentTarget && setActive(null)}>
          <div className="bg-white h-full w-full max-w-md p-7 overflow-y-auto">
            <button onClick={() => setActive(null)} className="text-gray-400 text-xl mb-4">✕</button>
            <h2 className="text-lg font-bold mb-1">{active.name} {active.last_name}</h2>
            <p className="text-sm text-gray-500 mb-1">Unit {UNITS[active.unit_index]?.num} — {UNITS[active.unit_index]?.title}</p>
            <p className="text-xs text-gray-400 mb-5">{new Date(active.submitted_at).toLocaleString()}</p>

            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">Archivos</h3>
            <div className="flex flex-col gap-2 mb-5">
              {active.files.map((f) => (
                <div key={f.id} className="flex flex-col gap-1.5 border border-gray-100 rounded-xl p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm truncate">{f.original_name}</span>
                    <button
                      onClick={() => api.downloadTeacherFile(active.id, f.filename, f.original_name)}
                      className="text-xs px-2.5 py-1 bg-grad text-white rounded-lg flex-shrink-0 ml-2"
                    >
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">Feedback</h3>
            <textarea
              rows={4}
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Escribí tu feedback para el alumno…"
              className="w-full border border-gray-200 rounded-xl p-3 text-sm mb-3"
            />
            <button
              onClick={sendFeedback}
              disabled={saving}
              className="w-full py-3 bg-grad rounded-xl text-white font-semibold text-sm disabled:opacity-60"
            >
              {saving ? 'Enviando…' : 'Enviar feedback'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
