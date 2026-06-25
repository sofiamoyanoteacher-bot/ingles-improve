import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { UNITS } from '../../data/units';
import { api } from '../../api';
import { useProgress } from '../../hooks/useProgress.js';
import Class1Reading from './tabs/Class1Reading.jsx';
import Class2Grammar from './tabs/Class2Grammar.jsx';
import Class3Listening from './tabs/Class3Listening.jsx';
import Class4Game from './tabs/Class4Game.jsx';

const CLASS_LABELS = { 1: 'Reading', 2: 'Grammar', 3: 'Listening', 4: 'Game' };

export default function UnitDetail() {
  const { unitIndex } = useParams();
  const idx = Number(unitIndex);
  const unit = UNITS[idx];
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { isClassDone, isClassUnlocked, reload } = useProgress();
  const [activeClass, setActiveClass] = useState(Number(searchParams.get('class')) || 1);
  const [marking, setMarking] = useState(false);

  useEffect(() => {
    setActiveClass(Number(searchParams.get('class')) || 1);
  }, [idx, searchParams]);

  if (!unit) {
    navigate('/program', { replace: true });
    return null;
  }

  function goToClass(n) {
    if (!isClassUnlocked(idx, n)) return;
    setActiveClass(n);
  }

  function handleListeningComplete(score) {
    api.putProgress(idx, { listening_done: 1, listening_score: score }).catch(() => {});
  }

  async function markComplete() {
    setMarking(true);
    try {
      await api.putProgress(idx, { class_number: activeClass });
      await reload();
      if (activeClass < 4) setActiveClass(activeClass + 1);
    } finally {
      setMarking(false);
    }
  }

  const done = isClassDone(idx, activeClass);

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-8 md:pt-8 pt-16">
      <button onClick={() => navigate('/program')} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-sky mb-5">
        ← Back to program
      </button>

      <div className="card relative overflow-hidden p-7 mb-5">
        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-gradient-to-br from-sky/10 to-mag/10 pointer-events-none" />
        <div className="text-[11px] font-bold text-sky tracking-wide mb-2">UNIT {unit.num}</div>
        <h1 className="text-[22px] font-bold mb-2">{unit.title}</h1>
        <span className="inline-block px-3.5 py-1 rounded-xl bg-grad text-white text-xs font-semibold">{unit.grammar}</span>
      </div>

      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3, 4].map((n) => {
          const unlocked = isClassUnlocked(idx, n);
          const classDone = isClassDone(idx, n);
          const isActive = activeClass === n;
          return (
            <div key={n} className="flex items-center flex-1">
              <button
                onClick={() => goToClass(n)}
                disabled={!unlocked}
                className={`flex-1 flex flex-col items-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  isActive ? 'bg-grad text-white' :
                  classDone ? 'bg-green-50 text-green-700' :
                  unlocked ? 'bg-[#f7f8fc] text-gray-600 hover:bg-gray-100' : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                }`}
              >
                <span>{classDone ? '✅' : unlocked ? '●' : '🔒'} C{n}</span>
                <span className="text-[10px] font-normal hidden sm:inline">{CLASS_LABELS[n]}</span>
              </button>
              {n < 4 && <div className={`h-0.5 w-3 flex-shrink-0 ${isClassDone(idx, n) ? 'bg-grad' : 'bg-gray-200'}`} />}
            </div>
          );
        })}
      </div>

      {activeClass === 1 && <Class1Reading unit={unit} unitIndex={idx} />}
      {activeClass === 2 && <Class2Grammar unit={unit} />}
      {activeClass === 3 && <Class3Listening unit={unit} unitIndex={idx} onListeningComplete={handleListeningComplete} />}
      {activeClass === 4 && <Class4Game unit={unit} unitIndex={idx} />}

      <div className="mt-6">
        {done ? (
          <div className="text-center text-sm text-green-600 font-semibold">✅ Class {activeClass} completed</div>
        ) : (
          <button
            onClick={markComplete}
            disabled={marking}
            className="w-full sm:w-auto px-8 py-3 bg-grad rounded-xl text-white font-semibold text-sm hover:opacity-90 disabled:opacity-60"
          >
            {marking ? 'Saving…' : `Mark Class ${activeClass} as completed`}
          </button>
        )}
      </div>
    </div>
  );
}
