import { useEffect, useRef, useState } from 'react';
import { NARRATOR_GENDER } from '../../../data/units';

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();
}

function pickVoice(availableVoices, gender) {
  if (!availableVoices.length) return null;
  const en = availableVoices.filter((v) => v.lang.startsWith('en'));
  const us = en.filter((v) => v.lang === 'en-US');
  const pool = us.length ? us : en.length ? en : availableVoices;

  const femaleKw = ['female', 'woman', 'girl', 'zira', 'samantha', 'victoria', 'karen', 'moira', 'tessa', 'fiona', 'susan', 'kate', 'alice'];
  const maleKw = ['male', 'man', 'guy', 'david', 'daniel', 'alex', 'george', 'lee', 'rishi', 'arthur', 'fred', 'oliver'];
  const femalePool = pool.filter((v) => femaleKw.some((k) => v.name.toLowerCase().includes(k)));
  const malePool = pool.filter((v) => maleKw.some((k) => v.name.toLowerCase().includes(k)));

  if (gender === 'female' && femalePool.length) return femalePool[0];
  if (gender === 'male' && malePool.length) return malePool[0];
  return pool[gender === 'female' ? 0 : Math.min(1, pool.length - 1)] || null;
}

export default function Listening({ unit, unitIndex, onComplete }) {
  const gender = NARRATOR_GENDER[unitIndex];
  const genderLabel = gender === 'female' ? '👩 voz femenina' : '👨 voz masculina';

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [elapsedLabel, setElapsedLabel] = useState('0:00');
  const [selections, setSelections] = useState({});

  const utteranceRef = useRef(null);
  const timerRef = useRef(null);
  const voicesRef = useRef([]);

  useEffect(() => {
    function loadVoices() {
      voicesRef.current = speechSynthesis.getVoices();
    }
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      speechSynthesis.cancel();
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    // reset when unit changes
    setStarted(false);
    setPlaying(false);
    setProgressPct(0);
    setElapsedLabel('0:00');
    setSelections({});
    speechSynthesis.cancel();
    clearInterval(timerRef.current);
  }, [unitIndex]);

  function play() {
    speechSynthesis.cancel();
    clearInterval(timerRef.current);

    const text = stripHtml(unit.reading);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.88;
    utterance.pitch = 1.0;
    const voice = pickVoice(voicesRef.current, gender);
    if (voice) utterance.voice = voice;

    let charCount = 0;
    const charTotal = text.length;

    utterance.onboundary = (e) => {
      charCount = e.charIndex || charCount;
      setProgressPct(Math.min((charCount / charTotal) * 100, 99));
    };
    utterance.onend = () => {
      setPlaying(false);
      setProgressPct(100);
      clearInterval(timerRef.current);
    };
    utterance.onerror = (e) => {
      if (e.error !== 'interrupted') console.warn('TTS error:', e.error);
      setPlaying(false);
    };

    const estSecs = Math.ceil(text.length / 12);
    let elapsed = 0;
    timerRef.current = setInterval(() => {
      elapsed += 1;
      const m = Math.floor(elapsed / 60);
      const s = elapsed % 60;
      setElapsedLabel(`${m}:${s.toString().padStart(2, '0')}`);
      if (charCount === 0) {
        setProgressPct(Math.min((elapsed / estSecs) * 100, 98));
      }
    }, 1000);

    utteranceRef.current = utterance;
    setPlaying(true);
    speechSynthesis.speak(utterance);
  }

  function startListening() {
    setStarted(true);
    play();
  }

  function togglePlayPause() {
    if (!playing && speechSynthesis.paused) {
      speechSynthesis.resume();
      setPlaying(true);
      return;
    }
    if (playing) {
      speechSynthesis.pause();
      setPlaying(false);
    } else {
      play();
    }
  }

  function stop() {
    speechSynthesis.cancel();
    clearInterval(timerRef.current);
    setPlaying(false);
    setProgressPct(0);
    setElapsedLabel('0:00');
  }

  function checkAnswer(qIdx, optIdx, correct) {
    if (selections[qIdx] !== undefined) return;
    const next = { ...selections, [qIdx]: optIdx };
    setSelections(next);
    if (Object.keys(next).length === unit.listeningQ.length) {
      const score = unit.listeningQ.filter((q, i) => next[i] === q.correct).length;
      onComplete?.(score);
    }
  }

  return (
    <div className="card p-6">
      <h3 className="text-[13px] font-bold text-sky uppercase tracking-wide mb-1.5">🎧 {unit.listeningTitle}</h3>
      <p className="text-[13px] text-gray-500 mb-4">{unit.listeningDesc}</p>

      {!started && (
        <div className="bg-gradient-to-br from-sky/10 to-mag/5 rounded-2xl p-6 text-center mb-5">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-grad text-white mb-2.5">{genderLabel}</div>
          <p className="text-[13px] text-gray-500 mb-4">Presioná el botón para escuchar el texto en inglés</p>
          <button
            onClick={startListening}
            className="inline-flex items-center gap-2 px-7 py-3 bg-grad rounded-xl text-white font-semibold text-sm hover:opacity-90 shadow-lg"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
            Escuchar lectura
          </button>
        </div>
      )}

      {started && (
        <div className="bg-gradient-to-br from-sky/10 to-mag/8 rounded-2xl p-4.5 flex items-center gap-3.5 mb-5">
          <button onClick={togglePlayPause} className="w-12 h-12 rounded-full bg-grad flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform">
            {playing ? (
              <svg viewBox="0 0 24 24" width="20" height="20"><rect x="6" y="4" width="4" height="16" fill="white" /><rect x="14" y="4" width="4" height="16" fill="white" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20"><polygon points="5,3 19,12 5,21" fill="white" /></svg>
            )}
          </button>
          <div className="flex-1">
            <div className="text-[13px] font-semibold mb-1">{unit.listeningTitle} <span className="text-[11px] text-gray-400 font-normal">{genderLabel}</span></div>
            <div className="h-1 bg-sky/20 rounded-full overflow-hidden mb-1">
              <div className="h-full bg-grad rounded-full transition-all" style={{ width: `${progressPct}%` }} />
            </div>
            <div className="text-[11px] text-gray-500">{elapsedLabel}</div>
          </div>
          <button onClick={stop} className="text-gray-400 hover:text-red-500 text-lg px-2" title="Detener">■</button>
        </div>
      )}

      <div className="flex flex-col gap-3.5">
        {!started && (
          <div className="text-center py-5 text-gray-400 text-[13px]">🎧 Escuchá el texto primero y luego respondé las preguntas</div>
        )}
        {started && unit.listeningQ.map((q, qi) => {
          const selected = selections[qi];
          return (
            <div key={qi} className="bg-[#f7f8fc] rounded-xl p-4">
              <div className="text-[11px] font-bold text-mag mb-1.5">Question {qi + 1}</div>
              <div className="text-[13px] font-medium mb-2.5">{q.q}</div>
              <div className="flex flex-col gap-1.5">
                {q.opts.map((opt, oi) => {
                  let cls = 'bg-white border-gray-200 hover:border-sky hover:text-sky';
                  if (selected !== undefined) {
                    if (oi === q.correct) cls = 'bg-green-50 border-green-500 text-green-700';
                    else if (oi === selected) cls = 'bg-red-50 border-red-500 text-red-600';
                    else cls = 'bg-white border-gray-200 opacity-60';
                  }
                  return (
                    <button
                      key={oi}
                      disabled={selected !== undefined}
                      onClick={() => checkAnswer(qi, oi, q.correct)}
                      className={`text-left px-3.5 py-2 rounded-lg text-[13px] border-[1.5px] transition-colors ${cls}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
