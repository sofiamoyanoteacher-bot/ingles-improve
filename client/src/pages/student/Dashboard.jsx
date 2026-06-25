import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useProgress } from '../../hooks/useProgress.js';
import { UNITS } from '../../data/units';
import StudentNav from '../../components/StudentNav.jsx';
import Avatar from '../../components/Avatar.jsx';
import ProgressBar from '../../components/ProgressBar.jsx';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { statusFor, pctFor, loading } = useProgress();

  const firstIncomplete = UNITS.findIndex((_, i) => statusFor(i) !== 'done');
  const continueIndex = firstIncomplete === -1 ? 0 : firstIncomplete;
  const continueUnit = UNITS[continueIndex];

  return (
    <div className="min-h-screen">
      <StudentNav />
      <div className="max-w-[1100px] mx-auto px-6 py-7">
        <div className="card relative overflow-hidden p-7 mb-5 flex items-center gap-6 flex-col sm:flex-row text-center sm:text-left">
          <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-gradient-to-br from-sky/15 to-mag/15 pointer-events-none" />
          <Avatar name={user?.name} lastName={user?.last_name} size="lg" />
          <div>
            <h2 className="text-xl font-bold mb-1">{user?.name} {user?.last_name?.charAt(0)}.</h2>
            <p className="text-sm text-gray-500">
              {[user?.profession, user?.age && `${user.age} años`, user?.email].filter(Boolean).join(' · ')}
            </p>
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-br from-sky/10 to-mag/10 border border-sky/30 rounded-full px-3 py-1 text-xs font-semibold text-sky mt-2">
              ⚡ Improve Basic — A1–A2
            </div>
          </div>
        </div>

        <div className="grid gap-4 mb-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <DashCard icon="📚" iconBg="bg-grad" title="Mi programa" desc="11 unidades · 5 meses · 2 clases por semana" onClick={() => navigate('/program')} />
          <DashCard icon="▶️" iconBg="bg-gradient-to-br from-sky to-soft" title="Continuar" desc={`Unit ${continueUnit.num} — ${continueUnit.title}`} onClick={() => navigate(`/unit/${continueIndex}`)} />
          <DashCard icon="🎧" iconBg="bg-gradient-to-br from-mag to-purple-400" title="Listening" desc="Ejercicios de comprensión oral por unidad" onClick={() => navigate('/program')} />
          <DashCard icon="📤" iconBg="bg-gradient-to-br from-soft to-sky" title="Homework" desc="Subir audio, video, Word o PDF" onClick={() => navigate(`/unit/${continueIndex}?tab=homework`)} />
        </div>

        <div className="card p-6">
          <h3 className="text-sm font-semibold mb-4">Tu progreso — Improve Basic</h3>
          {!loading && (
            <div className="flex flex-col gap-2.5">
              {UNITS.map((u, i) => (
                <ProgressBar key={u.num} label={`Unit ${u.num}`} pct={pctFor(i)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DashCard({ icon, iconBg, title, desc, onClick }) {
  return (
    <div onClick={onClick} className="card p-5 cursor-pointer hover:-translate-y-1 transition-transform border border-gray-100">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 text-xl ${iconBg}`}>{icon}</div>
      <h3 className="text-[15px] font-semibold mb-1">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}
