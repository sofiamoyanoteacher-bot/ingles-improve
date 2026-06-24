import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Avatar from './Avatar.jsx';
import ProfileModal from './ProfileModal.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function StudentNav() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);
  const isProgram = location.pathname.startsWith('/program') || location.pathname.startsWith('/unit');

  return (
    <>
      <nav className="bg-white border-b border-gray-200 h-[60px] flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
        <Logo />
        <div className="flex gap-1">
          <Link
            to="/"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${!isProgram ? 'bg-grad text-white' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Dashboard
          </Link>
          <Link
            to="/program"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${isProgram ? 'bg-grad text-white' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Programa
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Avatar name={user?.name} lastName={user?.last_name} size="sm" onClick={() => setProfileOpen(true)} />
          <button onClick={logout} className="text-xs text-gray-400 hover:text-mag">Salir</button>
        </div>
      </nav>
      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}
