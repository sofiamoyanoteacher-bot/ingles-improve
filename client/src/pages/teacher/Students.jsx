import { useEffect, useState } from 'react';
import { api } from '../../api';
import { UNITS as UNITS_BASIC } from '../../data/units';
import { UNITS as UNITS_STARTER } from '../../data/units_starter';
import { UNITS as UNITS_NATIVE } from '../../data/units_native';

const PROGRAM_LABEL = {
  basic:        'Improve Basic (B1–B2)',
  starter:      'Improve Starter (A1–A2)',
  native:       'Improve Native (C1–C2)',
  conversation: 'Conversation',
  highpro:      'High Professional Value',
};

const EMPTY_FORM = { name: '', last_name: '', email: '', password: '', program: 'basic' };

export default function Students() {
  const [students, setStudents]       = useState([]);
  const [createOpen, setCreateOpen]   = useState(false);
  const [editStudent, setEditStudent] = useState(null);   // student obj being edited
  const [form, setForm]               = useState(EMPTY_FORM);
  const [editForm, setEditForm]       = useState({});
  const [error, setError]             = useState('');
  const [editError, setEditError]     = useState('');
  const [saving, setSaving]           = useState(false);
  const [expandedId, setExpandedId]   = useState(null);
  const [progressByUser, setProgressByUser] = useState({});
  const [confirmDelete, setConfirmDelete]   = useState(null); // student id

  function load() {
    api.teacherStudents().then(({ students }) => setStudents(students));
  }
  useEffect(load, []);

  async function handleCreate(e) {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      await api.teacherCreateStudent(form);
      setCreateOpen(false);
      setForm(EMPTY_FORM);
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  function openEdit(s) {
    setEditStudent(s);
    setEditForm({
      name:      s.name        || '',
      last_name: s.last_name   || '',
      email:     s.email       || '',
      program:   s.program     || 'basic',
      password:  '',
    });
    setEditError('');
  }

  async function handleEdit(e) {
    e.preventDefault();
    setEditError('');
    setSaving(true);
    try {
      const payload = {
        name:      editForm.name,
        last_name: editForm.last_name,
        email:     editForm.email,
        program:   editForm.program,
      };
      if (editForm.password) payload.password = editForm.password;
      await api.teacherUpdateStudent(editStudent.id, payload);
      setStudents((prev) =>
        prev.map((s) => s.id === editStudent.id ? { ...s, ...payload } : s)
      );
      setEditStudent(null);
    } catch (err) {
      setEditError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!confirmDelete) return;
    await api.teacherDeleteStudent(confirmDelete);
    setStudents((prev) => prev.filter((s) => s.id !== confirmDelete));
    setConfirmDelete(null);
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

  const studentBeingDeleted = students.find((s) => s.id === confirmDelete);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Students</h1>
        <button onClick={() => setCreateOpen(true)} className="px-5 py-2.5 bg-grad rounded-xl text-white text-sm font-semibold hover:opacity-90">
          + New student
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {students.map((s) => {
          const progress = progressByUser[s.id] || [];
          return (
            <div key={s.id} className="card border border-gray-100">
              <div className="flex items-center gap-4 p-4">
                {/* avatar — clickable for progress */}
                <div
                  className="w-10 h-10 rounded-full bg-grad flex items-center justify-center text-white font-bold text-sm flex-shrink-0 cursor-pointer"
                  onClick={() => toggleExpand(s)}
                >
                  {(s.name[0] + (s.last_name?.[0] || '')).toUpperCase()}
                </div>

                {/* info — clickable for progress */}
                <div className="flex-1 cursor-pointer" onClick={() => toggleExpand(s)}>
                  <div className="font-semibold text-sm">{s.name} {s.last_name}</div>
                  <div className="text-xs text-gray-500">{s.email}</div>
                  <div className="text-[10px] text-sky font-semibold mt-0.5">{PROGRAM_LABEL[s.program] || 'Improve Basic (B1–B2)'}</div>
                </div>

                <div className="text-xs text-gray-500">Subs: {s.total_submissions}</div>
                <div className="text-xs">
                  {s.pending_submissions > 0 && <span className="text-yellow-600 font-semibold">{s.pending_submissions} pending</span>}
                </div>

                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${s.active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {s.active ? 'Active' : 'Inactive'}
                </span>

                <button
                  onClick={() => toggleActive(s)}
                  className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg hover:border-mag text-gray-500 hover:text-mag"
                >
                  {s.active ? 'Deactivate' : 'Activate'}
                </button>

                <button
                  onClick={() => openEdit(s)}
                  className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg hover:border-sky text-gray-500 hover:text-sky"
                >
                  Edit
                </button>

                <button
                  onClick={() => setConfirmDelete(s.id)}
                  className="text-xs px-3 py-1.5 border border-red-200 rounded-lg hover:bg-red-50 text-red-400 hover:text-red-600"
                >
                  Delete
                </button>
              </div>

              {expandedId === s.id && (
                <div className="border-t border-gray-100 p-4">
                  {['conversation', 'highpro'].includes(s.program) ? (
                    <p className="text-xs text-gray-400 italic">Este programa no utiliza la plataforma — sin seguimiento de unidades.</p>
                  ) : (
                    <>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3">Progress per unit</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {(s.program === 'native' ? UNITS_NATIVE : s.program === 'starter' ? UNITS_STARTER : UNITS_BASIC).map((u, i) => {
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
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Create modal */}
      {createOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={(e) => e.target === e.currentTarget && setCreateOpen(false)}>
          <div className="bg-white rounded-2xl p-7 w-full max-w-sm shadow-xl">
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
              <select value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm">
                <option value="basic">Improve Basic (B1–B2)</option>
                <option value="starter">Improve Starter (A1–A2)</option>
                <option value="native">Improve Native (C1–C2)</option>
                <option value="conversation">Conversation</option>
                <option value="highpro">High Professional Value</option>
              </select>
              {error && <div className="text-sm text-red-600">{error}</div>}
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => setCreateOpen(false)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm">Cancel</button>
                <button type="submit" disabled={saving} className="flex-1 py-2.5 bg-grad rounded-xl text-white text-sm font-semibold disabled:opacity-60">
                  {saving ? 'Creating…' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit modal */}
      {editStudent && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={(e) => e.target === e.currentTarget && setEditStudent(null)}>
          <div className="bg-white rounded-2xl p-7 w-full max-w-sm shadow-xl">
            <h2 className="text-lg font-bold mb-1">Edit student</h2>
            <p className="text-xs text-gray-400 mb-5">Dejá vacío el campo de contraseña para no cambiarla.</p>
            <form onSubmit={handleEdit} className="space-y-3">
              <input required placeholder="First name" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
              <input placeholder="Last name" value={editForm.last_name} onChange={(e) => setEditForm({ ...editForm, last_name: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
              <input required type="email" placeholder="Email" value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
              <select value={editForm.program} onChange={(e) => setEditForm({ ...editForm, program: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm">
                <option value="basic">Improve Basic (B1–B2)</option>
                <option value="starter">Improve Starter (A1–A2)</option>
                <option value="native">Improve Native (C1–C2)</option>
                <option value="conversation">Conversation</option>
                <option value="highpro">High Professional Value</option>
              </select>
              <input type="text" placeholder="Nueva contraseña (opcional)" value={editForm.password} onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
              {editError && <div className="text-sm text-red-600">{editError}</div>}
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => setEditStudent(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm">Cancel</button>
                <button type="submit" disabled={saving} className="flex-1 py-2.5 bg-grad rounded-xl text-white text-sm font-semibold disabled:opacity-60">
                  {saving ? 'Saving…' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirmation */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={(e) => e.target === e.currentTarget && setConfirmDelete(null)}>
          <div className="bg-white rounded-2xl p-7 w-full max-w-xs shadow-xl text-center">
            <div className="text-3xl mb-3">⚠️</div>
            <h2 className="text-lg font-bold mb-2">Eliminar alumno</h2>
            <p className="text-sm text-gray-500 mb-6">
              ¿Seguro que querés eliminar a <strong>{studentBeingDeleted?.name} {studentBeingDeleted?.last_name}</strong>? Se borrará su progreso, tareas y pagos. Esta acción no se puede deshacer.
            </p>
            <div className="flex gap-2">
              <button onClick={() => setConfirmDelete(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm">Cancelar</button>
              <button onClick={handleDelete} className="flex-1 py-2.5 bg-red-500 rounded-xl text-white text-sm font-semibold hover:bg-red-600">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
