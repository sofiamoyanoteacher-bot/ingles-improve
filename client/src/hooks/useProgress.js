import { useCallback, useEffect, useState } from 'react';
import { api } from '../api';
import { useAuth } from '../context/AuthContext.jsx';
import { UNITS as UNITS_BASIC } from '../data/units';
import { UNITS as UNITS_STARTER } from '../data/units_starter';
import { UNITS as UNITS_NATIVE } from '../data/units_native';

// native has an extra Idioms class at position 5 (total 13), all others have 12
const NON_IDIOMS_CLASSES = 12;
function maxClasses(isNative) { return isNative ? 13 : NON_IDIOMS_CLASSES; }
function allClassNums(isNative) { return Array.from({ length: maxClasses(isNative) }, (_, i) => i + 1); }

export function useProgress() {
  const { user } = useAuth();
  const isNative = user?.program === 'native';
  const UNITS = user?.program === 'starter' ? UNITS_STARTER : isNative ? UNITS_NATIVE : UNITS_BASIC;
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(() => {
    setLoading(true);
    return api.getProgress()
      .then(({ progress }) => setProgress(progress))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { reload(); }, [reload]);

  function rowFor(unitIndex) {
    return progress.find((p) => p.unit_index === unitIndex);
  }

  function classProgressFor(unitIndex) {
    const row = rowFor(unitIndex);
    const defaults = {};
    allClassNums(isNative).forEach((c) => { defaults[String(c)] = false; });
    return { ...defaults, ...(row?.class_progress || {}) };
  }

  function isClassDone(unitIndex, classNum) {
    return !!classProgressFor(unitIndex)[String(classNum)];
  }

  function isClassUnlocked(unitIndex, classNum) {
    if (classNum <= 1) return true;
    return isClassDone(unitIndex, classNum - 1);
  }

  function isComplete(unitIndex) {
    return allClassNums(isNative).every((c) => isClassDone(unitIndex, c));
  }

  function pctFor(unitIndex) {
    const nums = allClassNums(isNative);
    const done = nums.filter((c) => isClassDone(unitIndex, c)).length;
    return Math.round((done / nums.length) * 100);
  }

  function statusFor(unitIndex) {
    if (isComplete(unitIndex)) return 'done';
    const firstIncomplete = UNITS.findIndex((_, i) => !isComplete(i));
    if (unitIndex === firstIncomplete || (firstIncomplete === -1 && unitIndex === 0)) return 'current';
    if (unitIndex < firstIncomplete) return 'done';
    return 'locked';
  }

  function classesDoneCount(unitIndex) {
    return allClassNums(isNative).filter((c) => isClassDone(unitIndex, c)).length;
  }

  function totalClassesDone() {
    return UNITS.reduce((sum, _, i) => sum + classesDoneCount(i), 0);
  }

  function findNextClass() {
    const max = maxClasses(isNative);
    for (let u = 0; u < UNITS.length; u++) {
      for (let c = 1; c <= max; c++) {
        if (!isClassDone(u, c)) return { unitIndex: u, classNum: c };
      }
    }
    return { unitIndex: UNITS.length - 1, classNum: max };
  }

  return {
    progress, loading, reload, rowFor, isComplete, pctFor, statusFor,
    classProgressFor, isClassDone, isClassUnlocked, classesDoneCount,
    totalClassesDone, findNextClass, isNative, maxClasses: maxClasses(isNative),
  };
}
