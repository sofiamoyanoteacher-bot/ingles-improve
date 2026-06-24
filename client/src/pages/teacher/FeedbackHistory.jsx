import { useEffect, useState } from 'react';
import { api } from '../../api';
import { UNITS } from '../../data/units';

export default function FeedbackHistory() {
  const [submissions, setSubmissions] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  function load() {
    api.teacherHomework({ status: 'reviewed' }).then(({ submissions }) => setSubmissions(submissions));
  }
  useEffect(load, []);

  function startEdit(s) {
    setEditingId(s.id);
    setEditText(s.feedback_text || '');
  }

  async function saveEdit() {
    await api.teacherEditFeedback(editingId, editText);
    setEditingId(null);
    load();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Historial de Feedback</h1>

      <div className="flex flex-col gap-3">
        {submissions.map((s) => (
          <div key={s.id} className="card p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-semibold text-sm">{s.name} {s.last_name}</span>
                <span className="text-xs text-gray-400 ml-2">Unit {UNITS[s.unit_index]?.num}</span>
              </div>
              <span className="text-xs text-gray-400">{s.feedback_at ? new Date(s.feedback_at).toLocaleDateString() : ''}</span>
            </div>

            {editingId === s.id ? (
              <div>
                <textarea rows={3} value={editText} onChange={(e) => setEditText(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm mb-2" />
                <div className="flex gap-2">
                  <button onClick={() => setEditingId(null)} className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg">Cancelar</button>
                  <button onClick={saveEdit} className="text-xs px-3 py-1.5 bg-grad text-white rounded-lg">Guardar</button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-600 line-clamp-2">{s.feedback_text}</p>
                <button onClick={() => startEdit(s)} className="text-xs text-sky mt-2 hover:underline">Editar</button>
              </>
            )}
          </div>
        ))}
        {submissions.length === 0 && <p className="text-sm text-gray-400">Todavía no enviaste ningún feedback.</p>}
      </div>
    </div>
  );
}
