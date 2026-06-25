import { useEffect, useState } from 'react';
import { api } from '../api';
import { useAuth } from '../context/AuthContext.jsx';
import Avatar from './Avatar.jsx';

export default function ProfileModal({ open, onClose }) {
  const { user, setUser } = useAuth();
  const [form, setForm] = useState({ name: '', last_name: '', age: '', profession: '', email: '' });
  const [pwd, setPwd] = useState({ current: '', next: '', confirm: '' });
  const [error, setError] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [pwdOk, setPwdOk] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || '',
        last_name: user.last_name || '',
        age: user.age || '',
        profession: user.profession || '',
        email: user.email || '',
      });
    }
  }, [user, open]);

  if (!open) return null;

  async function handleSave(e) {
    e.preventDefault();
    setError('');
    try {
      const { user: updated } = await api.updateProfile(form);
      setUser(updated);
      onClose();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handlePasswordChange(e) {
    e.preventDefault();
    setPwdError('');
    setPwdOk(false);
    if (pwd.next !== pwd.confirm) {
      setPwdError('The new passwords do not match');
      return;
    }
    try {
      await api.changePassword(pwd.current, pwd.next);
      setPwdOk(true);
      setPwd({ current: '', next: '', confirm: '' });
    } catch (err) {
      setPwdError(err.message);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 text-xl">✕</button>
        <div className="flex justify-center mb-5">
          <Avatar name={form.name} lastName={form.last_name} size="lg" />
        </div>
        <h2 className="text-lg font-bold mb-1">My Profile</h2>
        <p className="text-sm text-gray-500 mb-6">Edit your personal information</p>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Field label="First name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field label="Last name" value={form.last_name} onChange={(v) => setForm({ ...form, last_name: v })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Age" type="number" value={form.age} onChange={(v) => setForm({ ...form, age: v })} />
            <Field label="Profession" value={form.profession} onChange={(v) => setForm({ ...form, profession: v })} />
          </div>
          <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button type="submit" className="w-full py-3 bg-grad rounded-xl text-white font-semibold text-sm hover:opacity-90">
            Save changes
          </button>
        </form>

        <hr className="my-6 border-gray-200" />

        <h3 className="text-sm font-bold mb-3">Change password</h3>
        <form onSubmit={handlePasswordChange} className="space-y-3">
          <Field label="Current password" type="password" value={pwd.current} onChange={(v) => setPwd({ ...pwd, current: v })} />
          <Field label="New password" type="password" value={pwd.next} onChange={(v) => setPwd({ ...pwd, next: v })} />
          <Field label="Confirm new password" type="password" value={pwd.confirm} onChange={(v) => setPwd({ ...pwd, confirm: v })} />
          {pwdError && <div className="text-sm text-red-600">{pwdError}</div>}
          {pwdOk && <div className="text-sm text-green-600">Password updated</div>}
          <button type="submit" className="w-full py-3 border border-gray-300 rounded-xl font-semibold text-sm hover:border-sky">
            Change password
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-sky"
      />
    </div>
  );
}
