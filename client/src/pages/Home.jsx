import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useProgress } from '../hooks/useProgress.js';
import { UNITS as UNITS_BASIC } from '../data/units';
import { UNITS as UNITS_STARTER } from '../data/units_starter';
import { UNITS as UNITS_NATIVE } from '../data/units_native';
import Logo from '../components/Logo.jsx';
import { api } from '../api';

const PROGRAM_BADGE = {
  starter: { label: '⭐ Improve Starter — A1–A2', bg: 'bg-sky/10 text-sky' },
  basic:   { label: '⚡ Improve Basic — B1–B2',   bg: 'bg-mag/10 text-mag' },
  native:  { label: '🔥 Improve Native — C1–C2',  bg: 'bg-red-500/10 text-red-600' },
};

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

const MONTHS_ES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { progress, loading, totalClassesDone, findNextClass } = useProgress();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const UNITS = user?.program === 'starter' ? UNITS_STARTER : user?.program === 'native' ? UNITS_NATIVE : UNITS_BASIC;
  const badge = PROGRAM_BADGE[user?.program] || PROGRAM_BADGE.basic;

  useEffect(() => {
    api.getPaymentStatus().then(setPaymentStatus).catch(() => {});
  }, []);

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
          <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full mt-4 mb-2 ${badge.bg}`}>{badge.label}</span>
          <h1 className="text-[26px] font-bold mb-3 leading-snug">Hello, {user?.name}! 👋</h1>
          <p className="text-base text-gray-700 leading-relaxed italic mb-6 max-w-md">
            "Every expert was once a beginner.<br />Your English journey starts here,<br />one conversation at a time."
          </p>
          <button
            onClick={() => navigate(`/unit/${next.unitIndex}?class=${next.classNum}`)}
            className="px-8 py-3.5 bg-grad rounded-xl text-white font-semibold text-sm shadow-lg hover:opacity-90 transition-opacity"
          >
            Continue learning →
          </button>
        </div>

        <img
          src="/student-home.png"
          alt="Ingles IMPROVE student"
          className="relative z-10 flex-shrink-0 w-full md:w-[280px] h-[200px] object-cover rounded-2xl shadow-2xl"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard icon="📚" label="Current unit" value={`Unit ${nextUnit.num}`} />
        <StatCard icon="✅" label="Classes done" value={`${done}/${totalClasses}`} />
        <StatCard icon="🔥" label="Day streak" value={`${streak} day${streak === 1 ? '' : 's'}`} />
      </div>

      {paymentStatus && (
        <div className={`rounded-2xl px-5 py-4 mb-4 flex items-start gap-4 ${paymentStatus.paid ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
          <span className="text-2xl mt-0.5">{paymentStatus.paid ? '✅' : '⚠️'}</span>
          <div>
            <p className={`font-semibold text-sm ${paymentStatus.paid ? 'text-green-700' : 'text-amber-700'}`}>
              {paymentStatus.paid
                ? `Mes en curso (${MONTHS_ES[paymentStatus.month - 1]}) — Pagado`
                : `Mes en curso (${MONTHS_ES[paymentStatus.month - 1]}) — Pendiente de pago`}
            </p>
            {!paymentStatus.paid && (
              <p className="text-xs text-amber-600 mt-1">
                Recuerda realizar el pago de tu arancel mensual entre el 1 y el 6 de cada mes. ¡Gracias!
              </p>
            )}
          </div>
        </div>
      )}

      {!loading && (
        <div className="card p-6">
          <div className="text-xs font-bold text-sky tracking-wide mb-2">NEXT CLASS</div>
          <h3 className="text-base font-bold mb-1">{nextUnit.title}</h3>
          <p className="text-[13px] text-gray-500 mb-4">
            Class {next.classNum} of 4 · {CLASS_LABELS[next.classNum]}
          </p>
          <button
            onClick={() => navigate(`/unit/${next.unitIndex}?class=${next.classNum}`)}
            className="px-6 py-2.5 bg-grad rounded-xl text-white font-semibold text-sm hover:opacity-90"
          >
            Go to class →
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
