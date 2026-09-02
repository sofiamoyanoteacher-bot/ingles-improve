import { BASIC_CYCLES } from '../data/units_basic_cycles';
import { STARTER_CYCLES } from '../data/units_starter_cycles';

export function getCycleUnit(unit, unitIdx, cycleIndex, program) {
  if (cycleIndex === 0) return unit;
  const cycles = program === 'starter' ? STARTER_CYCLES : program === 'basic' ? BASIC_CYCLES : null;
  if (!cycles) return unit;
  const entry = cycles[unitIdx];
  if (!entry) return unit;
  const key = cycleIndex === 1 ? 'cycle2' : 'cycle3';
  const extra = entry[key];
  if (!extra) return unit;
  return { ...unit, ...extra };
}

export function getCycleIndex(classNum, isNative) {
  if (isNative) {
    if (classNum <= 5) return 0;
    return Math.floor((classNum - 6) / 4) + 1;
  }
  return Math.floor((classNum - 1) / 4);
}
