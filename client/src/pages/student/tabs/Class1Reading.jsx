import { useState } from 'react';

export default function Class1Reading({ unit, unitIndex }) {
  const [selections, setSelections] = useState({});
  const imageUrl = `https://picsum.photos/seed/${unit.unitImageSeed || unitIndex}/800/400`;

  function answer(i, value) {
    if (selections[i] !== undefined) return;
    setSelections((prev) => ({ ...prev, [i]: value }));
  }

  return (
    <div>
      <div className="relative mb-6 rounded-2xl overflow-hidden">
        <img
          src={imageUrl}
          alt={unit.title}
          className="w-full h-60 object-cover block"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 pt-10 pb-4 text-white">
          <div className="text-[11px] font-bold tracking-wide opacity-80">UNIT {unit.num} · CLASS 1</div>
          <div className="text-lg font-bold">{unit.title}</div>
        </div>
      </div>

      <div className="card border-l-4 border-sky p-7 mb-4">
        <h3 className="text-[13px] font-bold text-sky uppercase tracking-wide mb-4">📖 Reading text</h3>
        <div className="text-[15px] leading-[1.9] text-gray-700 space-y-3.5" dangerouslySetInnerHTML={{ __html: unit.reading }} />
      </div>

      <div className="card border-l-4 border-mag p-7 mb-4">
        <h3 className="text-[13px] font-bold text-mag uppercase tracking-wide mb-4">🔤 Vocabulary spotlight</h3>
        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
          {unit.vocab.map((v) => (
            <div key={v.word} className="bg-[#f7f8fc] rounded-xl p-3.5 border border-gray-200">
              <div className="text-sm font-bold">{v.word}</div>
              <div className="text-xs text-mag font-semibold mb-1">{v.trans}</div>
              <div className="text-xs text-gray-500 italic leading-relaxed">{v.ex}</div>
            </div>
          ))}
        </div>
      </div>

      {unit.quickCheck && (
        <div className="card p-6">
          <h3 className="text-[13px] font-bold text-sky uppercase tracking-wide mb-4">✅ Quick check</h3>
          <div className="flex flex-col gap-3">
            {unit.quickCheck.map((q, i) => {
              const selected = selections[i];
              return (
                <div key={i} className="bg-[#f7f8fc] rounded-xl p-4">
                  <div className="text-sm font-medium mb-2.5">{q.statement}</div>
                  <div className="flex gap-2">
                    {[true, false].map((opt) => {
                      let cls = 'bg-white border-gray-200 hover:border-sky';
                      if (selected !== undefined) {
                        if (opt === q.answer) cls = 'bg-green-50 border-green-500 text-green-700';
                        else if (opt === selected) cls = 'bg-red-50 border-red-500 text-red-600';
                        else cls = 'bg-white border-gray-200 opacity-50';
                      }
                      return (
                        <button
                          key={String(opt)}
                          disabled={selected !== undefined}
                          onClick={() => answer(i, opt)}
                          className={`px-4 py-1.5 rounded-lg text-xs font-semibold border-[1.5px] transition-colors ${cls}`}
                        >
                          {opt ? 'TRUE' : 'FALSE'}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
