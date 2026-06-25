const FREQ_SCALE = [
  { word: 'never', pct: '0%' },
  { word: 'rarely', pct: '20%' },
  { word: 'sometimes', pct: '40%' },
  { word: 'often', pct: '60%' },
  { word: 'usually', pct: '80%' },
  { word: 'always', pct: '100%' },
];

function GrammarTable({ table }) {
  const [headRow, ...bodyRows] = table;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[13px] mb-4 border-collapse">
        <thead>
          <tr>
            {headRow.map((h, i) => (
              <th key={i} className="bg-[#f7f8fc] px-3.5 py-2.5 text-left font-semibold border-b-2 border-gray-200 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="px-3.5 py-2.5 border-b border-gray-200">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FrequencyScale() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-sky/10 to-mag/10 rounded-full px-4 py-3 my-3 flex-wrap gap-2">
      {FREQ_SCALE.map((f) => (
        <div key={f.word} className="flex flex-col items-center gap-1 text-[11px] font-semibold">
          <span className="text-gray-400 text-[10px]">{f.pct}</span>
          <span>{f.word}</span>
        </div>
      ))}
    </div>
  );
}

function GrammarExtra({ extra }) {
  return (
    <div className="card border-l-4 border-soft bg-gradient-to-br from-soft/10 to-purple-200/10 p-6 mt-4">
      <h3 className="text-[13px] font-bold text-[#534AB7] uppercase tracking-wide mb-3">
        {extra.icon} {extra.title}
      </h3>
      <p className="text-sm leading-7 mb-4">{extra.intro}</p>

      {extra.table && <GrammarTable table={extra.table} />}
      {extra.freqScale && <FrequencyScale />}

      {extra.structureNotes && (
        <div className="flex flex-col gap-2.5 my-4">
          {extra.structureNotes.map((note, i) => (
            <div key={i} className="bg-gradient-to-br from-sky/10 to-soft/10 rounded-xl px-4 py-3 text-sm border-l-[3px] border-sky">
              {note}
            </div>
          ))}
        </div>
      )}

      {extra.extraBlocks && extra.extraBlocks.map((block, bi) => (
        <div key={bi} className="bg-white rounded-xl p-4 mb-3 border border-gray-100">
          <h4 className="text-xs font-bold text-mag mb-2.5">{block.heading}</h4>
          <div className="flex flex-col gap-2">
            {block.rows.map((row, ri) => (
              <div key={ri} className="text-[13px]">
                <div className="font-semibold mb-1">{row.label}</div>
                {row.examples.map((ex, ei) => (
                  <div key={ei} className="text-gray-600 italic ml-2">{ex}</div>
                ))}
              </div>
            ))}
          </div>
          {block.note && <p className="text-xs text-gray-500 mt-2 italic">{block.note}</p>}
        </div>
      ))}

      {extra.watch && (
        <div className="bg-gradient-to-br from-mag/10 to-purple-200/10 rounded-xl px-4 py-3.5 text-[13px] border-l-[3px] border-mag mb-3">
          <strong className="text-mag">⚠️ Watch out — </strong>
          <span dangerouslySetInnerHTML={{ __html: extra.watch }} />
        </div>
      )}

      {extra.tip && (
        <div className="bg-gradient-to-br from-sky/10 to-sky/5 rounded-xl px-4 py-3.5 text-[13px] mb-3">
          🎯 <strong>Pattern:</strong> <span dangerouslySetInnerHTML={{ __html: extra.tip }} />
        </div>
      )}

      {extra.practice && (
        <div className="mt-4">
          <h4 className="text-xs font-bold text-sky uppercase tracking-wide mb-2">🗣️ Let's practice</h4>
          <ul className="flex flex-col gap-2">
            {extra.practice.map((q, i) => (
              <li key={i} className="text-sm bg-[#f7f8fc] rounded-lg px-3.5 py-2.5">{q}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Grammar({ unit }) {
  return (
    <div>
      <div className="card p-6">
        <h3 className="text-[13px] font-bold text-sky uppercase tracking-wide mb-4">📝 First, look at these lines from the text</h3>
        <div className="flex flex-col gap-2.5 mb-5">
          {unit.grammarExamples.map((ex, i) => (
            <div key={i} className="bg-gradient-to-br from-sky/10 to-soft/10 rounded-xl px-4 py-3 text-sm italic border-l-[3px] border-sky">
              {ex}
            </div>
          ))}
        </div>
        <p className="text-sm leading-7 mb-4">{unit.grammarRule}</p>
        <GrammarTable table={unit.grammarTable} />
        <div className="bg-gradient-to-br from-mag/10 to-purple-200/10 rounded-xl px-4 py-3.5 text-[13px] border-l-[3px] border-mag mb-3">
          <strong className="text-mag">⚠️ Watch out — </strong>
          <span dangerouslySetInnerHTML={{ __html: unit.grammarWatch }} />
        </div>
        <div className="bg-gradient-to-br from-sky/10 to-sky/5 rounded-xl px-4 py-3.5 text-[13px]">
          🎯 <strong>Pattern:</strong> <span dangerouslySetInnerHTML={{ __html: unit.grammarTip }} />
        </div>
      </div>

      {unit.grammarExtra && <GrammarExtra extra={unit.grammarExtra} />}
    </div>
  );
}
