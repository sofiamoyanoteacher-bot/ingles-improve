import Listening from './Listening.jsx';

export default function Class3Listening({ unit, unitIndex, onListeningComplete }) {
  return (
    <div>
      <Listening unit={unit} unitIndex={unitIndex} onComplete={onListeningComplete} />

      <div className="mt-4">
        <div className="flex flex-col gap-3.5">
          {unit.talkQ.map((q, i) => (
            <div key={i} className="card p-4.5 border-l-[3px] border-mag">
              <div className="text-[11px] font-bold text-mag mb-1.5">Question {i + 1}</div>
              <div className="text-sm leading-relaxed">{q}</div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-sky/10 to-mag/8 rounded-2xl p-5 mt-4">
          <h4 className="text-[13px] font-bold text-sky mb-2.5">🎤 Your Turn — model answer</h4>
          <p className="text-[13px] leading-relaxed text-gray-700 italic">{unit.talkTip}</p>
        </div>
      </div>

      {unit.speakingChallenge && (
        <div className="card border-l-4 border-mag bg-gradient-to-br from-mag/5 to-purple-200/5 p-6 mt-4">
          <h4 className="text-[13px] font-bold text-mag uppercase tracking-wide mb-2.5">🗣️ Speaking challenge</h4>
          <p className="text-sm leading-relaxed">{unit.speakingChallenge}</p>
        </div>
      )}
    </div>
  );
}
