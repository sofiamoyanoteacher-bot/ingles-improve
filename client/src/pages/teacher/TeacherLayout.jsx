import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../components/Logo.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const NAV = [
  { to: '/teacher', label: '📊 Dashboard', end: true },
  { to: '/teacher/students', label: '👥 Students' },
  { to: '/teacher/homework', label: '📤 Homework' },
  { to: '/teacher/feedback', label: '💬 Feedback' },
  { to: '/teacher/settings', label: '⚙️ Settings' },
];

export default function TeacherLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex">
      <aside className="w-60 bg-white border-r border-gray-200 flex flex-col p-5 sticky top-0 h-screen">
        <Logo />
        <div className="text-xs text-gray-400 mt-1 mb-6">Teacher panel</div>
        <nav className="flex flex-col gap-1 flex-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? 'bg-grad text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="text-sm font-medium mb-1">{user?.name} {user?.last_name}</div>
          <button onClick={logout} className="text-xs text-gray-400 hover:text-mag">Log out</button>
        </div>
      </aside>
      <main className="flex-1 p-7 max-w-[1100px]">
        <Outlet />
      </main>
    </div>
  );
}
