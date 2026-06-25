import { useState } from 'react';
import { WORD_SEARCH_WORDS, MATCHING_PAIRS, CROSSWORD_DATA } from '../../../data/games';
import WordSearch from '../../../components/games/WordSearch.jsx';
import MatchingGame from '../../../components/games/MatchingGame.jsx';
import Crossword from '../../../components/games/Crossword.jsx';
import Homework from './Homework.jsx';

function GameByType({ unit, unitIndex, onGameComplete }) {
  if (unit.gameType === 'wordsearch') {
    const words = WORD_SEARCH_WORDS[unitIndex];
    if (!words) return null;
    return <WordSearch words={words} onComplete={onGameComplete} />;
  }
  if (unit.gameType === 'matching') {
    const pairs = MATCHING_PAIRS[unitIndex];
    if (!pairs) return null;
    return <MatchingGame pairs={pairs} onComplete={onGameComplete} />;
  }
  if (unit.gameType === 'crossword') {
    const data = CROSSWORD_DATA[unitIndex];
    if (!data) return null;
    return <Crossword data={data} onComplete={onGameComplete} />;
  }
  return null;
}

export default function Class4Game({ unit, unitIndex }) {
  const [gameDone, setGameDone] = useState(false);

  return (
    <div>
      {unit.warmupQuestions && (
        <div className="card p-6 mb-4">
          <h3 className="text-[13px] font-bold text-sky uppercase tracking-wide mb-3">🔄 Warm-up review</h3>
          <ul className="flex flex-col gap-2">
            {unit.warmupQuestions.map((q, i) => (
              <li key={i} className="text-sm bg-[#f7f8fc] rounded-lg px-3.5 py-2.5">{q}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="card p-6 mb-4">
        <h3 className="text-[13px] font-bold text-mag uppercase tracking-wide mb-4">
          🎮 {unit.gameType === 'wordsearch' ? 'Word Search' : unit.gameType === 'matching' ? 'Matching Game' : 'Crossword'}
        </h3>
        <GameByType unit={unit} unitIndex={unitIndex} onGameComplete={() => setGameDone(true)} />
        {gameDone && <p className="text-xs text-green-600 font-semibold mt-3">Game completed! You can move on to the homework now.</p>}
      </div>

      {unit.grammarTip && (
        <div className="bg-gradient-to-br from-sky/10 to-sky/5 rounded-xl px-4 py-3.5 text-[13px] mb-4">
          🎯 <strong>Language tip:</strong> <span dangerouslySetInnerHTML={{ __html: unit.grammarTip }} />
        </div>
      )}

      <Homework unit={unit} unitIndex={unitIndex} />
    </div>
  );
}
