export default function Reading({ unit }) {
  return (
    <div>
      <div className="card border-l-4 border-sky p-7">
        <h3 className="text-[13px] font-bold text-sky uppercase tracking-wide mb-4">📖 Reading text</h3>
        <div
          className="text-[15px] leading-[1.9] text-gray-700 space-y-3.5"
          dangerouslySetInnerHTML={{ __html: unit.reading }}
        />
      </div>
      <div className="mt-4">
        <div className="card border-l-4 border-mag p-7">
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
      </div>
    </div>
  );
}
