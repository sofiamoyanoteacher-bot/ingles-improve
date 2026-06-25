import { useMemo, useState } from 'react';

const SIZE = 12;
const DIRECTIONS = [
  [0, 1], [1, 0], [1, 1], [-1, 1],
];
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function buildGrid(words) {
  const grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(null));

  function canPlace(word, row, col, [dr, dc]) {
    for (let i = 0; i < word.length; i++) {
      const r = row + dr * i;
      const c = col + dc * i;
      if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) return false;
      if (grid[r][c] && grid[r][c] !== word[i]) return false;
    }
    return true;
  }

  function place(word) {
    for (let attempt = 0; attempt < 200; attempt++) {
      const dir = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
      const row = Math.floor(Math.random() * SIZE);
      const col = Math.floor(Math.random() * SIZE);
      if (canPlace(word, row, col, dir)) {
        for (let i = 0; i < word.length; i++) {
          grid[row + dir[0] * i][col + dir[1] * i] = word[i];
        }
        return true;
      }
    }
    return false;
  }

  words.forEach((w) => place(w.replace(/\s+/g, '')));

  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (!grid[r][c]) grid[r][c] = ALPHABET[Math.floor(Math.random() * 26)];
    }
  }
  return grid;
}

function cellsBetween(start, end) {
  const dr = Math.sign(end.row - start.row);
  const dc = Math.sign(end.col - start.col);
  if (start.row !== end.row && start.col !== end.col && Math.abs(end.row - start.row) !== Math.abs(end.col - start.col)) {
    return null;
  }
  const len = Math.max(Math.abs(end.row - start.row), Math.abs(end.col - start.col)) + 1;
  const cells = [];
  for (let i = 0; i < len; i++) cells.push({ row: start.row + dr * i, col: start.col + dc * i });
  return cells;
}

export default function WordSearch({ words, onComplete }) {
  const cleanWords = useMemo(() => words.map((w) => w.replace(/\s+/g, '')), [words]);
  const grid = useMemo(() => buildGrid(cleanWords), [cleanWords]);
  const [selecting, setSelecting] = useState(false);
  const [start, setStart] = useState(null);
  const [current, setCurrent] = useState(null);
  const [foundWords, setFoundWords] = useState([]);
  const [foundCells, setFoundCells] = useState([]);

  const liveCells = start && current ? cellsBetween(start, current) || [] : [];

  function cellKey(r, c) { return `${r}-${c}`; }

  function handleDown(r, c) {
    setSelecting(true);
    setStart({ row: r, col: c });
    setCurrent({ row: r, col: c });
  }
  function handleEnter(r, c) {
    if (selecting) setCurrent({ row: r, col: c });
  }
  function handleUp() {
    if (start && current) {
      const cells = cellsBetween(start, current);
      if (cells) {
        const str = cells.map((c) => grid[c.row][c.col]).join('');
        const rev = [...str].reverse().join('');
        const match = cleanWords.find((w) => w === str || w === rev);
        if (match && !foundWords.includes(match)) {
          const next = [...foundWords, match];
          setFoundWords(next);
          setFoundCells((prev) => [...prev, ...cells.map((c) => cellKey(c.row, c.col))]);
          if (next.length === cleanWords.length) onComplete?.();
        }
      }
    }
    setSelecting(false);
    setStart(null);
    setCurrent(null);
  }

  const liveKeys = liveCells.map((c) => cellKey(c.row, c.col));

  return (
    <div onMouseUp={handleUp} className="select-none">
      <div className="flex flex-wrap gap-2 mb-4">
        {words.map((w) => {
          const clean = w.replace(/\s+/g, '');
          const done = foundWords.includes(clean);
          return (
            <span
              key={w}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                done ? 'bg-grad text-white line-through' : 'bg-[#f7f8fc] text-gray-500'
              }`}
            >
              {w}
            </span>
          );
        })}
      </div>

      <div className="overflow-x-auto">
        <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `repeat(${SIZE}, 28px)` }}>
          {grid.map((row, r) =>
            row.map((letter, c) => {
              const key = cellKey(r, c);
              const isFound = foundCells.includes(key);
              const isLive = liveKeys.includes(key);
              return (
                <div
                  key={key}
                  onMouseDown={() => handleDown(r, c)}
                  onMouseEnter={() => handleEnter(r, c)}
                  className={`w-7 h-7 flex items-center justify-center text-[13px] font-semibold rounded cursor-pointer ${
                    isFound ? 'bg-grad text-white' : isLive ? 'bg-sky/30' : 'bg-white text-black'
                  }`}
                >
                  {letter}
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        {foundWords.length}/{cleanWords.length} words found
        {foundWords.length === cleanWords.length && <span className="ml-2 text-green-600 font-semibold">🎉 ¡Completado!</span>}
      </div>
    </div>
  );
}
