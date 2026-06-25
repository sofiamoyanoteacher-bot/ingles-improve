import { NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import Avatar from './Avatar.jsx';

const NAV_ITEMS = [
  { to: '/', icon: '🏠', label: 'Home', end: true },
];
const NAV_ITEMS_AFTER_PROFILE = [
  { to: '/program', icon: '📚', label: 'Program' },
  { to: '/progress', icon: '📊', label: 'Progress' },
  { to: '/extra', icon: '⭐', label: 'Extra Material' },
];

export default function Sidebar({ open, onClose, onProfileClick, user, onLogout }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-[99] md:hidden transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 left-0 h-screen w-[220px] bg-white border-r border-gray-200 flex flex-col z-[100] shadow-[2px_0_20px_rgba(76,192,241,.08)] transition-transform md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-5 pt-6 pb-5 border-b border-gray-200">
          <Logo />
        </div>

        <nav className="flex-1 p-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? 'bg-gradient-to-br from-sky/[.12] to-mag/[.08] text-sky font-semibold' : 'text-gray-500 hover:bg-[#f7f8fc] hover:text-black'
                }`
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => { onProfileClick(); onClose(); }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-[#f7f8fc] hover:text-black text-left"
          >
            <span>👤</span> Profile
          </button>
          {NAV_ITEMS_AFTER_PROFILE.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? 'bg-gradient-to-br from-sky/[.12] to-mag/[.08] text-sky font-semibold' : 'text-gray-500 hover:bg-[#f7f8fc] hover:text-black'
                }`
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 flex items-center gap-2.5">
          <Avatar name={user?.name} lastName={user?.last_name} size="sm" />
          <span className="text-[13px] font-semibold flex-1 truncate">{user?.name} {user?.last_name}</span>
          <button onClick={onLogout} className="text-gray-400 hover:text-mag text-base" title="Cerrar sesión">⏻</button>
        </div>
      </aside>
    </>
  );
}
