import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useProgress } from '../hooks/useProgress.js';
import { UNITS } from '../data/units';
import Logo from '../components/Logo.jsx';

const CLASS_LABELS = { 1: 'Reading & Vocabulary', 2: 'Grammar', 3: 'Listening & Talk', 4: 'Game & Homework' };

function computeStreak(progress) {
  const dates = [...new Set(progress.filter((p) => p.updated_at).map((p) => p.updated_at.slice(0, 10)))].sort().reverse();
  if (!dates.length) return 0;
  const todayStr = new Date().toISOString().slice(0, 10);
  let cursor = new Date(todayStr);
  let streak = 0;
  for (let i = 0; i < dates.length; i++) {
    const cursorStr = cursor.toISOString().slice(0, 10);
    if (dates.includes(cursorStr)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else if (cursorStr === todayStr) {
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { progress, loading, totalClassesDone, findNextClass } = useProgress();

  const totalClasses = UNITS.length * 4;
  const done = totalClassesDone();
  const streak = computeStreak(progress);
  const next = findNextClass();
  const nextUnit = UNITS[next.unitIndex];

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-8 md:pt-8 pt-16">
      <section className="relative overflow-hidden rounded-3xl p-8 md:p-10 mb-6 bg-gradient-to-br from-sky/[.08] to-mag/[.06] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full bg-gradient-to-br from-sky/15 to-mag/10 pointer-events-none" />
        <div className="absolute right-10 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-br from-soft/20 to-sky/10 pointer-events-none" />

        <div className="relative z-10 flex-1">
          <Logo size="lg" />
          <h1 className="text-[26px] font-bold mt-5 mb-3 leading-snug">Hola, {user?.name}! 👋</h1>
          <p className="text-base text-gray-700 leading-relaxed italic mb-6 max-w-md">
            "Every expert was once a beginner.<br />Your English journey starts here,<br />one conversation at a time."
          </p>
          <button
            onClick={() => navigate(`/unit/${next.unitIndex}?class=${next.classNum}`)}
            className="px-8 py-3.5 bg-grad rounded-xl text-white font-semibold text-sm shadow-lg hover:opacity-90 transition-opacity"
          >
            Continuar aprendiendo →
          </button>
        </div>

        <img
          src="/student-home.png"
          alt="Estudiante de Ingles IMPROVE"
          className="relative z-10 flex-shrink-0 w-full md:w-[280px] h-[200px] object-cover rounded-2xl shadow-2xl"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard icon="📚" label="Unidad actual" value={`Unit ${nextUnit.num}`} />
        <StatCard icon="✅" label="Clases hechas" value={`${done}/${totalClasses}`} />
        <StatCard icon="🔥" label="Días seguidos" value={`${streak} día${streak === 1 ? '' : 's'}`} />
      </div>

      {!loading && (
        <div className="card p-6">
          <div className="text-xs font-bold text-sky tracking-wide mb-2">PRÓXIMA CLASE</div>
          <h3 className="text-base font-bold mb-1">{nextUnit.title}</h3>
          <p className="text-[13px] text-gray-500 mb-4">
            Clase {next.classNum} de 4 · {CLASS_LABELS[next.classNum]}
          </p>
          <button
            onClick={() => navigate(`/unit/${next.unitIndex}?class=${next.classNum}`)}
            className="px-6 py-2.5 bg-grad rounded-xl text-white font-semibold text-sm hover:opacity-90"
          >
            Ir a la clase →
          </button>
        </div>
      )}
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="card p-5">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-lg font-bold mb-0.5">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
