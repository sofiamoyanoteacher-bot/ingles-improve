import { useCallback, useEffect, useState } from 'react';
import { api } from '../api';
import { UNITS } from '../data/units';

export function useProgress() {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(() => {
    setLoading(true);
    return api.getProgress()
      .then(({ progress }) => setProgress(progress))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  function rowFor(unitIndex) {
    return progress.find((p) => p.unit_index === unitIndex);
  }

  function isComplete(unitIndex) {
    const row = rowFor(unitIndex);
    return !!(row && row.reading_done && row.grammar_done && row.listening_done && row.letstalk_done);
  }

  function pctFor(unitIndex) {
    const row = rowFor(unitIndex);
    if (!row) return 0;
    const flags = [row.reading_done, row.grammar_done, row.listening_done, row.letstalk_done];
    const done = flags.filter(Boolean).length;
    return Math.round((done / 4) * 100);
  }

  function statusFor(unitIndex) {
    if (isComplete(unitIndex)) return 'done';
    const firstIncomplete = UNITS.findIndex((_, i) => !isComplete(i));
    if (unitIndex === firstIncomplete || (firstIncomplete === -1 && unitIndex === 0)) return 'current';
    if (unitIndex < firstIncomplete) return 'done';
    return 'locked';
  }

  function classProgressFor(unitIndex) {
    const row = rowFor(unitIndex);
    return row?.class_progress || { 1: false, 2: false, 3: false, 4: false };
  }

  function isClassDone(unitIndex, classNum) {
    return !!classProgressFor(unitIndex)[String(classNum)];
  }

  function isClassUnlocked(unitIndex, classNum) {
    if (classNum <= 1) return true;
    return isClassDone(unitIndex, classNum - 1);
  }

  function classesDoneCount(unitIndex) {
    const cp = classProgressFor(unitIndex);
    return [1, 2, 3, 4].filter((c) => cp[String(c)]).length;
  }

  function totalClassesDone() {
    return UNITS.reduce((sum, _, i) => sum + classesDoneCount(i), 0);
  }

  function findNextClass() {
    for (let u = 0; u < UNITS.length; u++) {
      for (let c = 1; c <= 4; c++) {
        if (!isClassDone(u, c)) return { unitIndex: u, classNum: c };
      }
    }
    return { unitIndex: UNITS.length - 1, classNum: 4 };
  }

  return {
    progress, loading, reload, rowFor, isComplete, pctFor, statusFor,
    classProgressFor, isClassDone, isClassUnlocked, classesDoneCount, totalClassesDone, findNextClass,
  };
}
