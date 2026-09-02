import { BASIC_CYCLES } from '../data/units_basic_cycles';

/**
 * Returns the unit object merged with cycle-specific content.
 * cycleIndex: 0 = cycle 1 (original), 1 = cycle 2, 2 = cycle 3
 */
export function getCycleUnit(unit, unitIdx, cycleIndex, program) {
  if (cycleIndex === 0) return unit;
  const cycles = BASIC_CYCLES; // only Basic for now; extend later for Starter/Native
  const entry = cycles[unitIdx];
  if (!entry) return unit;
  const key = cycleIndex === 1 ? 'cycle2' : 'cycle3';
  const extra = entry[key];
  if (!extra) return unit;
  return { ...unit, ...extra };
}

/**
 * Given an active class number, returns the cycle index (0/1/2).
 * Native programs have an extra Idioms class at position 5 inside cycle 1.
 */
export function getCycleIndex(classNum, isNative) {
  if (isNative) {
    if (classNum <= 5) return 0;
    return Math.floor((classNum - 6) / 4) + 1;
  }
  return Math.floor((classNum - 1) / 4);
}
