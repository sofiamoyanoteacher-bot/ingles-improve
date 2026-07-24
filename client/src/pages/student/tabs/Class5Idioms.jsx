export default function Class5Idioms({ unit }) {
  const idioms = unit?.idioms || [];

  return (
    <div className="space-y-4">
      <div className="card p-5">
        <h2 className="text-sm font-bold text-sky tracking-wide uppercase mb-1">Idioms & Expressions</h2>
        <p className="text-xs text-gray-500">Master these 5 native-level expressions from this unit.</p>
      </div>

      {idioms.map((idiom, i) => (
        <div key={i} className="card p-5 space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-grad flex items-center justify-center text-white text-xs font-bold">{i + 1}</span>
            <div className="flex-1">
              <p className="font-bold text-[15px] text-gray-900">{idiom.expression}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-10">
            <div className="bg-sky/5 rounded-xl p-3">
              <p className="text-[10px] font-bold text-sky uppercase tracking-wide mb-1">Meaning</p>
              <p className="text-sm text-gray-700">{idiom.meaning}</p>
            </div>
            <div className="bg-mag/5 rounded-xl p-3">
              <p className="text-[10px] font-bold text-mag uppercase tracking-wide mb-1">Example</p>
              <p className="text-sm text-gray-700 italic">{idiom.example}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-3">
              <p className="text-[10px] font-bold text-green-600 uppercase tracking-wide mb-1">When to use</p>
              <p className="text-sm text-gray-700">{idiom.whenToUse}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
