import { useState } from 'react';

function normalize(s) {
  return s.toUpperCase().replace(/[^A-Z]/g, '');
}

function ClueList({ title, color, clues, answers, onChange, checked }) {
  return (
    <div className="flex-1">
      <div className={`text-[11px] font-bold mb-2 ${color}`}>{title}</div>
      <div className="flex flex-col gap-2.5">
        {clues.map((c) => {
          const key = `${title}-${c.num}`;
          const value = answers[key] || '';
          const isCorrect = checked && normalize(value) === normalize(c.answer);
          const isWrong = checked && value && !isCorrect;
          return (
            <div key={key}>
              <div className="text-[13px] mb-1">
                <strong>{c.num}.</strong> {c.clue} <span className="text-gray-400">({c.answer.length})</span>
              </div>
              <input
                value={value}
                onChange={(e) => onChange(key, e.target.value)}
                className={`w-full px-3 py-1.5 rounded-lg text-sm border-[1.5px] uppercase tracking-wide ${
                  isCorrect ? 'border-green-500 bg-green-50 text-green-700' :
                  isWrong ? 'border-red-400 bg-red-50' : 'border-gray-200'
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Crossword({ data, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const allClues = [
    ...data.across.map((c) => ({ ...c, key: `ACROSS-${c.num}` })),
    ...data.down.map((c) => ({ ...c, key: `DOWN-${c.num}` })),
  ];

  function handleChange(key, value) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setChecked(false);
  }

  function handleCheck() {
    setChecked(true);
    const allCorrect = allClues.every((c) => normalize(answers[c.key] || '') === normalize(c.answer));
    if (allCorrect) onComplete?.();
  }

  const correctCount = checked
    ? allClues.filter((c) => normalize(answers[c.key] || '') === normalize(c.answer)).length
    : 0;

  return (
    <div>
      <div className="flex gap-6 flex-col sm:flex-row mb-4">
        <ClueList title="ACROSS" color="text-sky" clues={data.across} answers={answers} onChange={handleChange} checked={checked} />
        <ClueList title="DOWN" color="text-mag" clues={data.down} answers={answers} onChange={handleChange} checked={checked} />
      </div>

      <button onClick={handleCheck} className="px-6 py-2.5 bg-grad rounded-xl text-white font-semibold text-sm hover:opacity-90">
        Check answers
      </button>

      {checked && (
        <div className="mt-3 text-sm text-gray-600">
          {correctCount}/{allClues.length} correct
          {correctCount === allClues.length && <span className="ml-2 text-green-600 font-semibold">🎉 ¡Completado!</span>}
        </div>
      )}
    </div>
  );
}
