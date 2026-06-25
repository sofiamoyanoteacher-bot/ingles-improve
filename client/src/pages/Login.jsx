import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Logo from '../components/Logo.jsx';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const user = await login(email, password);
      navigate(user.role === 'teacher' ? '/teacher' : '/', { replace: true });
    } catch (err) {
      setError(err.message || 'Could not sign in');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f7f8fc]">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-sky/15 to-mag/15" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-soft/20 to-sky/10" />
      <div className="absolute top-1/3 right-10 grid grid-cols-6 gap-1.5 opacity-30">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-soft block" />
        ))}
      </div>

      <div className="card relative z-10 w-full max-w-sm mx-4 p-8">
        <div className="flex justify-center mb-6">
          <Logo size="lg" />
        </div>
        <h1 className="text-lg font-bold text-center mb-1">Welcome</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Sign in with your email and password</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-sky transition-colors"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-sky transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-grad rounded-xl text-white font-semibold text-sm disabled:opacity-60 hover:opacity-90 transition-opacity"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
