import { useEffect, useState } from 'react';
import { api } from '../../api';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Settings() {
  const { user, setUser } = useAuth();
  const [form, setForm] = useState({ name: '', last_name: '', email: '' });
  const [pwd, setPwd] = useState({ current: '', next: '', confirm: '' });
  const [error, setError] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [pwdOk, setPwdOk] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (user) setForm({ name: user.name || '', last_name: user.last_name || '', email: user.email || '' });
    api.teacherStudents().then(({ students }) => setStudents(students));
  }, [user]);

  async function saveProfile(e) {
    e.preventDefault();
    setError('');
    try {
      const { user: updated } = await api.updateProfile(form);
      setUser(updated);
    } catch (err) {
      setError(err.message);
    }
  }

  async function changePassword(e) {
    e.preventDefault();
    setPwdError('');
    setPwdOk(false);
    if (pwd.next !== pwd.confirm) { setPwdError('Passwords do not match'); return; }
    try {
      await api.changePassword(pwd.current, pwd.next);
      setPwdOk(true);
      setPwd({ current: '', next: '', confirm: '' });
    } catch (err) {
      setPwdError(err.message);
    }
  }

  async function toggleActive(s) {
    await api.teacherUpdateStudent(s.id, { active: s.active ? 0 : 1 });
    api.teacherStudents().then(({ students }) => setStudents(students));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="card p-6 mb-5 max-w-md">
        <h3 className="text-sm font-semibold mb-4">My Profile</h3>
        <form onSubmit={saveProfile} className="space-y-3">
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="First name"
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
          <input value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} placeholder="Last name"
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
          <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" type="email"
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button type="submit" className="w-full py-2.5 bg-grad rounded-xl text-white text-sm font-semibold">Save</button>
        </form>
      </div>

      <div className="card p-6 mb-5 max-w-md">
        <h3 className="text-sm font-semibold mb-4">Change password</h3>
        <form onSubmit={changePassword} className="space-y-3">
          <input type="password" placeholder="Current password" value={pwd.current} onChange={(e) => setPwd({ ...pwd, current: e.target.value })}
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
          <input type="password" placeholder="New password" value={pwd.next} onChange={(e) => setPwd({ ...pwd, next: e.target.value })}
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
          <input type="password" placeholder="Confirm new password" value={pwd.confirm} onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })}
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm" />
          {pwdError && <div className="text-sm text-red-600">{pwdError}</div>}
          {pwdOk && <div className="text-sm text-green-600">Password updated</div>}
          <button type="submit" className="w-full py-2.5 border border-gray-300 rounded-xl text-sm font-semibold">Change</button>
        </form>
      </div>

      <div className="card p-6 max-w-md">
        <h3 className="text-sm font-semibold mb-4">Student accounts</h3>
        <div className="flex flex-col gap-2">
          {students.map((s) => (
            <div key={s.id} className="flex items-center justify-between text-sm py-1.5">
              <span>{s.name} {s.last_name}</span>
              <button
                onClick={() => toggleActive(s)}
                className={`text-xs px-2.5 py-1 rounded-full font-semibold ${s.active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}
              >
                {s.active ? 'Active' : 'Inactive'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
