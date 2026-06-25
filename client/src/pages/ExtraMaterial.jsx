import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APPENDICES } from '../data/appendices';

const UNCOUNTABLE_SET = new Set([
  'advice', 'bread', 'coffee', 'furniture', 'hair', 'homework', 'information', 'knowledge',
  'luggage', 'money', 'music', 'news', 'progress', 'rain', 'research', 'rice', 'sugar', 'time',
  'traffic', 'travel', 'water', 'weather', 'work', 'butter', 'cheese', 'flour', 'fruit', 'honey',
  'juice', 'meat', 'milk', 'oil', 'pasta', 'salt', 'tea', 'wine', 'beauty', 'courage', 'education',
  'experience', 'freedom', 'fun', 'happiness', 'health', 'help', 'justice', 'love', 'luck', 'peace',
  'truth', 'air', 'cotton', 'electricity', 'fire', 'glass', 'gold', 'iron', 'leather', 'plastic',
  'rubber', 'silver', 'wood', 'wool', 'dust', 'fog', 'grass', 'ice', 'land', 'mud', 'sand', 'smoke',
  'snow', 'sunlight', 'wind', 'accommodation', 'baggage', 'clothing', 'equipment', 'evidence',
]);

export default function ExtraMaterial() {
  const navigate = useNavigate();
  const irregularVerbs = useMemo(() => APPENDICES.find((a) => a.id === 'a').sections[0].rows, []);
  const [verbQuery, setVerbQuery] = useState('');
  const [nounQuery, setNounQuery] = useState('');

  const verbResult = useMemo(() => {
    if (!verbQuery.trim()) return null;
    const q = verbQuery.trim().toLowerCase();
    return irregularVerbs.find((r) => r[0].toLowerCase() === q) || 'regular';
  }, [verbQuery, irregularVerbs]);

  const nounResult = useMemo(() => {
    if (!nounQuery.trim()) return null;
    const q = nounQuery.trim().toLowerCase();
    return UNCOUNTABLE_SET.has(q) ? 'uncountable' : 'countable';
  }, [nounQuery]);

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-8 md:pt-8 pt-16">
      <h1 className="text-2xl font-bold mb-1">⭐ Extra Material</h1>
      <p className="text-sm text-gray-500 mb-6">Reference sheets, grammar tables, and tools to support your learning.</p>

      <div className="text-[11px] font-bold uppercase tracking-wide text-mag mb-3">📚 Reference Appendices</div>
      <div className="grid gap-3.5 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
        {APPENDICES.map((a) => (
          <div
            key={a.id}
            onClick={() => navigate(`/appendix/${a.id}`)}
            className="appendix-card card p-5 cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <span className="appendix-badge inline-block text-[11px] font-bold px-2.5 py-1 rounded-lg mb-2.5">{a.badge}</span>
            <div className="text-sm font-semibold mb-1.5 leading-snug">{a.title}</div>
            <div className="text-xs text-gray-500 leading-relaxed">{a.subtitle}</div>
          </div>
        ))}
      </div>

      <div className="text-[11px] font-bold uppercase tracking-wide text-mag mb-3">🛠 Quick Tools</div>
      <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
        <div className="card p-5">
          <div className="text-2xl mb-2.5">🔄</div>
          <div className="text-sm font-semibold mb-2">Verb Quick Check</div>
          <input
            value={verbQuery}
            onChange={(e) => setVerbQuery(e.target.value)}
            placeholder="Type a verb..."
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm mb-2 outline-none focus:border-sky"
          />
          <div className="text-[13px] text-gray-600 leading-relaxed">
            {verbResult === 'regular' && 'No está en la lista de verbos irregulares — probablemente es regular (+ -ed).'}
            {verbResult && verbResult !== 'regular' && (
              <span>Simple Past: <strong>{verbResult[1]}</strong> · Past Participle: <strong>{verbResult[2]}</strong> · {verbResult[3]}</span>
            )}
          </div>
        </div>

        <div className="card p-5">
          <div className="text-2xl mb-2.5">🔢</div>
          <div className="text-sm font-semibold mb-2">Countable or Not?</div>
          <input
            value={nounQuery}
            onChange={(e) => setNounQuery(e.target.value)}
            placeholder="Type a noun..."
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm mb-2 outline-none focus:border-sky"
          />
          <div className="text-[13px] text-gray-600 leading-relaxed">
            {nounResult === 'uncountable' && 'Uncountable — usá some / much / a little (no "a/an", no plural).'}
            {nounResult === 'countable' && 'Probablemente countable — usá a/an / many / a few, y puede ir en plural.'}
          </div>
        </div>
      </div>
    </div>
  );
}
