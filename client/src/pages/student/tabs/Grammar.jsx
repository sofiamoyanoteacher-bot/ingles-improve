export default function Grammar({ unit }) {
  const [headRow, ...bodyRows] = unit.grammarTable;
  return (
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
      <table className="w-full text-[13px] mb-4 border-collapse">
        <thead>
          <tr>
            {headRow.map((h) => (
              <th key={h} className="bg-[#f7f8fc] px-3.5 py-2.5 text-left font-semibold border-b-2 border-gray-200">{h}</th>
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
      <div className="bg-gradient-to-br from-mag/10 to-purple-200/10 rounded-xl px-4 py-3.5 text-[13px] border-l-[3px] border-mag mb-3">
        <strong className="text-mag">⚠️ Watch out — </strong>
        <span dangerouslySetInnerHTML={{ __html: unit.grammarWatch }} />
      </div>
      <div className="bg-gradient-to-br from-sky/10 to-sky/5 rounded-xl px-4 py-3.5 text-[13px]">
        🎯 <strong>Pattern:</strong> <span dangerouslySetInnerHTML={{ __html: unit.grammarTip }} />
      </div>
    </div>
  );
}
