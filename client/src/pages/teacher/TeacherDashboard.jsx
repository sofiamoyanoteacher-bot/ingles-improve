import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import Calendar from './Calendar.jsx';

export default function TeacherDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.teacher_type === 'admin') {
      navigate('/teacher/students', { replace: true });
    }
  }, [user]);

  if (user?.teacher_type === 'admin') return null;
  return <Calendar />;
}

function StatCard({ label, value }) {
  return (
    <div className="card p-5">
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
