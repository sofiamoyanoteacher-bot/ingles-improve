import { UNITS, MONTHS } from '../data/units';
import { useProgress } from '../hooks/useProgress.js';

export default function Progress() {
  const { loading, classesDoneCount, totalClassesDone, isClassDone } = useProgress();
  const totalClasses = UNITS.length * 4;
  const done = totalClassesDone();
  const overallPct = Math.round((done / totalClasses) * 100);

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-8 md:pt-8 pt-16">
      <h1 className="text-2xl font-bold mb-6">My Progress</h1>

      <div className="card p-6 mb-5">
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-sm">Overall Program Progress</span>
          <span className="text-sky font-bold text-sm">{overallPct}%</span>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-grad rounded-full transition-all duration-500" style={{ width: `${overallPct}%` }} />
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>{done} classes completed</span>
          <span>{totalClasses - done} remaining</span>
        </div>
      </div>

      {!loading && MONTHS.map((m, mi) => {
        const monthUnits = UNITS.filter((u) => u.month === mi + 1);
        if (!monthUnits.length) return null;
        return (
          <div key={mi} className="mb-5">
            <div className="text-[11px] font-bold uppercase tracking-wide text-mag mb-3">{m.label}</div>
            {monthUnits.map((u) => {
              const idx = UNITS.indexOf(u);
              const unitDone = classesDoneCount(idx);
              const unitPct = Math.round((unitDone / 4) * 100);
              return (
                <div key={u.num} className="card p-4 mb-2">
                  <div className="flex justify-between items-center mb-2.5">
                    <div>
                      <div className="text-[11px] text-sky font-bold">UNIT {u.num}</div>
                      <div className="text-sm font-semibold">{u.title}</div>
                    </div>
                    <div className={`text-sm font-bold ${unitPct === 100 ? 'text-green-600' : 'text-sky'}`}>{unitPct}%</div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((c) => (
                      <div key={c} className={`flex-1 h-1.5 rounded-full ${isClassDone(idx, c) ? 'bg-grad' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                  <div className="flex gap-2 mt-1.5">
                    {['Reading', 'Grammar', 'Listening', 'Game'].map((label) => (
                      <div key={label} className="flex-1 text-[10px] text-gray-400 text-center">{label}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
