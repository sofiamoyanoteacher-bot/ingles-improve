export default function ProgressBar({ pct = 0, label }) {
  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-xs font-medium min-w-[60px]">{label}</span>}
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-grad rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-[11px] text-gray-500 min-w-[32px] text-right">{pct}%</span>
    </div>
  );
}
