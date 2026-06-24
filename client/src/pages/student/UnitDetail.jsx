import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { UNITS } from '../../data/units';
import { api } from '../../api';
import StudentNav from '../../components/StudentNav.jsx';
import Reading from './tabs/Reading.jsx';
import Grammar from './tabs/Grammar.jsx';
import Listening from './tabs/Listening.jsx';
import LetsTalk from './tabs/LetsTalk.jsx';
import Homework from './tabs/Homework.jsx';

const TABS = [
  { id: 'reading', label: '📖 Reading' },
  { id: 'grammar', label: '📐 Grammar' },
  { id: 'listening', label: '🎧 Listening' },
  { id: 'letstalk', label: "💬 Let's Talk" },
  { id: 'homework', label: '📤 Homework' },
];

export default function UnitDetail() {
  const { unitIndex } = useParams();
  const idx = Number(unitIndex);
  const unit = UNITS[idx];
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [tab, setTab] = useState(searchParams.get('tab') || 'reading');

  useEffect(() => {
    if (!unit) return;
    if (tab === 'reading') api.putProgress(idx, { reading_done: 1 }).catch(() => {});
    if (tab === 'grammar') api.putProgress(idx, { grammar_done: 1 }).catch(() => {});
    if (tab === 'letstalk') api.putProgress(idx, { letstalk_done: 1 }).catch(() => {});
  }, [tab, idx]);

  if (!unit) {
    navigate('/program', { replace: true });
    return null;
  }

  function handleListeningComplete(score) {
    api.putProgress(idx, { listening_done: 1, listening_score: score }).catch(() => {});
  }

  return (
    <div className="min-h-screen">
      <StudentNav />
      <div className="max-w-[1100px] mx-auto px-6 py-7">
        <button onClick={() => navigate('/program')} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-sky mb-5">
          ← Volver al programa
        </button>

        <div className="card relative overflow-hidden p-7 mb-5">
          <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-gradient-to-br from-sky/10 to-mag/10 pointer-events-none" />
          <div className="text-[11px] font-bold text-sky tracking-wide mb-2">UNIT {unit.num}</div>
          <h1 className="text-[22px] font-bold mb-2">{unit.title}</h1>
          <span className="inline-block px-3.5 py-1 rounded-xl bg-grad text-white text-xs font-semibold">{unit.grammar}</span>
        </div>

        <div className="flex gap-1.5 mb-5 flex-wrap">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4.5 py-2 rounded-full text-sm font-medium border-[1.5px] transition-colors ${
                tab === t.id ? 'bg-grad text-white border-transparent' : 'bg-white text-gray-500 border-gray-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'reading' && <Reading unit={unit} />}
        {tab === 'grammar' && <Grammar unit={unit} />}
        {tab === 'listening' && <Listening unit={unit} unitIndex={idx} onComplete={handleListeningComplete} />}
        {tab === 'letstalk' && <LetsTalk unit={unit} />}
        {tab === 'homework' && <Homework unit={unit} unitIndex={idx} />}
      </div>
    </div>
  );
}
