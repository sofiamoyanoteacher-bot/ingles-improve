import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar.jsx';
import ProfileModal from '../../components/ProfileModal.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export default function StudentLayout() {
  const { user, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <div className="min-h-screen">
      <button
        onClick={() => setDrawerOpen(true)}
        className="md:hidden fixed top-3 left-3 z-[98] w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center text-lg"
        aria-label="Open menu"
      >
        ☰
      </button>

      <Sidebar
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onProfileClick={() => setProfileOpen(true)}
        user={user}
        onLogout={logout}
      />

      <main className="md:ml-[220px] min-h-screen">
        <Outlet />
      </main>

      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
