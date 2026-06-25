import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { UNITS } from '../../data/units';

export default function TeacherDashboard() {
  const [stats, setStats] = useState(null);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.teacherStats().then(setStats);
    api.teacherStudents().then(({ students }) => setStudents(students));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <StatCard label="Active students" value={stats?.activeStudents ?? '—'} />
        <StatCard label="Pending submissions" value={stats?.pending ?? '—'} />
        <StatCard label="Total submissions" value={stats?.total ?? '—'} />
      </div>

      <div className="card p-5 overflow-x-auto">
        <h3 className="text-sm font-semibold mb-4">Students</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-200">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Last activity</th>
              <th className="py-2">Pending</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} onClick={() => navigate('/teacher/students')} className="border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                <td className="py-2.5 font-medium">{s.name} {s.last_name}</td>
                <td className="py-2.5 text-gray-500">{s.email}</td>
                <td className="py-2.5 text-gray-500">{s.last_activity ? new Date(s.last_activity).toLocaleDateString() : '—'}</td>
                <td className="py-2.5">{s.pending_submissions > 0 ? <span className="text-yellow-600 font-semibold">{s.pending_submissions}</span> : 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="card p-5">
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
