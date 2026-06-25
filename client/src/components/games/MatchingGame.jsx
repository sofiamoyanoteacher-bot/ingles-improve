import { useMemo, useState } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchingGame({ pairs, onComplete }) {
  const items = useMemo(() => pairs.map((p, i) => ({ id: i, ...p })), [pairs]);
  const words = useMemo(() => shuffle(items), [items]);
  const matches = useMemo(() => shuffle(items), [items]);

  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [matched, setMatched] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [wrongFlash, setWrongFlash] = useState(null);

  function trySelectWord(id) {
    if (matched.includes(id)) return;
    setSelectedWord(id);
    if (selectedMatch != null) evaluate(id, selectedMatch);
  }
  function trySelectMatch(id) {
    if (matched.includes(id)) return;
    setSelectedMatch(id);
    if (selectedWord != null) evaluate(selectedWord, id);
  }

  function evaluate(wordId, matchId) {
    setAttempts((a) => a + 1);
    if (wordId === matchId) {
      const next = [...matched, wordId];
      setMatched(next);
      setSelectedWord(null);
      setSelectedMatch(null);
      if (next.length === items.length) onComplete?.();
    } else {
      setWrongFlash({ wordId, matchId });
      setTimeout(() => {
        setWrongFlash(null);
        setSelectedWord(null);
        setSelectedMatch(null);
      }, 350);
    }
  }

  return (
    <div>
      <div className="flex gap-3">
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-[11px] font-bold text-sky mb-1">WORDS</div>
          {words.map((item) => {
            const isDone = matched.includes(item.id);
            const isSelected = selectedWord === item.id;
            const isWrong = wrongFlash?.wordId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => trySelectWord(item.id)}
                disabled={isDone}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold border-[1.5px] transition-colors ${
                  isDone ? 'bg-green-50 border-green-500 text-green-700' :
                  isWrong ? 'bg-red-50 border-red-500' :
                  isSelected ? 'bg-sky/10 border-sky' : 'bg-white border-gray-200 hover:border-sky'
                }`}
              >
                {item.word}
              </button>
            );
          })}
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <div className="text-[11px] font-bold text-mag mb-1">MEANING</div>
          {matches.map((item) => {
            const isDone = matched.includes(item.id);
            const isSelected = selectedMatch === item.id;
            const isWrong = wrongFlash?.matchId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => trySelectMatch(item.id)}
                disabled={isDone}
                className={`text-left px-4 py-3 rounded-xl text-sm border-[1.5px] transition-colors ${
                  isDone ? 'bg-green-50 border-green-500 text-green-700' :
                  isWrong ? 'bg-red-50 border-red-500' :
                  isSelected ? 'bg-mag/10 border-mag' : 'bg-white border-gray-200 hover:border-mag'
                }`}
              >
                {item.match}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        ✅ {matched.length}/{items.length} matches · Attempts: {attempts}
        {matched.length === items.length && <span className="ml-2 text-green-600 font-semibold">🎉 ¡Completado!</span>}
      </div>
    </div>
  );
}
