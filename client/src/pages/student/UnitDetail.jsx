import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { UNITS as UNITS_BASIC } from '../../data/units';
import { UNITS as UNITS_STARTER } from '../../data/units_starter';
import { UNITS as UNITS_NATIVE } from '../../data/units_native';
import { api } from '../../api';
import { useProgress } from '../../hooks/useProgress.js';
import Class1Reading from './tabs/Class1Reading.jsx';
import Class2Grammar from './tabs/Class2Grammar.jsx';
import Class3Listening from './tabs/Class3Listening.jsx';
import Class4Game from './tabs/Class4Game.jsx';
import Class5Idioms from './tabs/Class5Idioms.jsx';
import { getCycleIndex, getCycleUnit } from '../../utils/cycleData.js';

// For native: class 5 = Idioms; classes 1-4 and 6-13 follow the 4-type cycle.
// For others: classes 1-12 follow the 4-type cycle.
function classType(classNum, isNative) {
  if (isNative && classNum === 5) return 'idioms';
  const adj = isNative && classNum > 5 ? classNum - 5 : classNum;
  return ((adj - 1) % 4) + 1; // 1=Reading 2=Grammar 3=Listening 4=Game
}

const TYPE_LABEL = { 1: 'Reading', 2: 'Grammar', 3: 'Listening', 4: 'Game', idioms: 'Idioms' };
const TYPE_ICON  = { 1: '📖', 2: '✏️', 3: '🎧', 4: '🎮', idioms: '💬' };

// Groups of class numbers per cycle
function buildCycles(isNative) {
  return isNative
    ? [[1, 2, 3, 4, 5], [6, 7, 8, 9], [10, 11, 12, 13]]
    : [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
}

export default function UnitDetail() {
  const { unitIndex } = useParams();
  const idx = Number(unitIndex);
  const { user } = useAuth();
  const isNative = user?.program === 'native';
  const UNITS = user?.program === 'starter' ? UNITS_STARTER : isNative ? UNITS_NATIVE : UNITS_BASIC;
  const unit = UNITS[idx];
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { isClassDone, isClassUnlocked, reload, maxClasses } = useProgress();
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
      if (activeClass < maxClasses) setActiveClass(activeClass + 1);
    } finally {
      setMarking(false);
    }
  }

  const done = isClassDone(idx, activeClass);
  const cycles = buildCycles(isNative);
  const type = classType(activeClass, isNative);
  const isIdiomsActive = type === 'idioms';
  const cycleIndex = getCycleIndex(activeClass, isNative);
  const cycleUnit = getCycleUnit(unit, idx, cycleIndex, user?.program);

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

      {/* 3-cycle tab grid */}
      <div className="space-y-3 mb-6">
        {cycles.map((cycle, ci) => (
          <div key={ci} className="card p-3">
            <div className="text-[10px] font-bold text-gray-400 mb-2 tracking-widest">CICLO {ci + 1}</div>
            <div className="flex gap-2">
              {cycle.map((n) => {
                const t = classType(n, isNative);
                const unlocked = isClassUnlocked(idx, n);
                const classDone = isClassDone(idx, n);
                const isActive = activeClass === n;
                return (
                  <button
                    key={n}
                    onClick={() => goToClass(n)}
                    disabled={!unlocked}
                    className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                      isActive       ? 'bg-grad text-white shadow' :
                      classDone      ? 'bg-green-50 text-green-700' :
                      unlocked       ? 'bg-[#f7f8fc] text-gray-600 hover:bg-gray-100' :
                                       'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <span className="text-base leading-none">{classDone ? '✅' : unlocked ? TYPE_ICON[t] : '🔒'}</span>
                    <span className="text-[10px] font-normal hidden sm:block">{TYPE_LABEL[t]}</span>
                    <span className={`text-[9px] font-bold ${isActive ? 'text-white/70' : 'text-gray-300'}`}>C{n}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Active class content */}
      {type === 1 && <Class1Reading unit={cycleUnit} unitIndex={idx} />}
      {type === 2 && <Class2Grammar unit={cycleUnit} />}
      {type === 3 && <Class3Listening unit={cycleUnit} unitIndex={idx} onListeningComplete={handleListeningComplete} />}
      {type === 4 && <Class4Game unit={unit} unitIndex={idx} />}
      {isIdiomsActive && <Class5Idioms unit={unit} />}

      <div className="mt-6">
        {isIdiomsActive ? null : done ? (
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
