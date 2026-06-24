import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/student/Dashboard.jsx';
import Program from './pages/student/Program.jsx';
import UnitDetail from './pages/student/UnitDetail.jsx';
import TeacherLayout from './pages/teacher/TeacherLayout.jsx';
import TeacherDashboard from './pages/teacher/TeacherDashboard.jsx';
import Students from './pages/teacher/Students.jsx';
import HomeworkInbox from './pages/teacher/HomeworkInbox.jsx';
import FeedbackHistory from './pages/teacher/FeedbackHistory.jsx';
import Settings from './pages/teacher/Settings.jsx';

function FullScreenLoader() {
  return <div className="min-h-screen flex items-center justify-center text-gray-400 text-sm">Cargando…</div>;
}

function RequireAuth({ role, children }) {
  const { user, loading } = useAuth();
  if (loading) return <FullScreenLoader />;
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to={user.role === 'teacher' ? '/teacher' : '/'} replace />;
  return children;
}

export default function App() {
  const { user, loading } = useAuth();
  if (loading) return <FullScreenLoader />;

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to={user.role === 'teacher' ? '/teacher' : '/'} replace /> : <Login />} />

      <Route path="/" element={<RequireAuth role="student"><Dashboard /></RequireAuth>} />
      <Route path="/program" element={<RequireAuth role="student"><Program /></RequireAuth>} />
      <Route path="/unit/:unitIndex" element={<RequireAuth role="student"><UnitDetail /></RequireAuth>} />

      <Route path="/teacher" element={<RequireAuth role="teacher"><TeacherLayout /></RequireAuth>}>
        <Route index element={<TeacherDashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="homework" element={<HomeworkInbox />} />
        <Route path="feedback" element={<FeedbackHistory />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
