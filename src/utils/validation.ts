// utils/validation.ts
// utils/validation.ts
import type { Person } from '../types/types';

export function validateCount(count: number): boolean {
  return count >= 20 && count <= 100;
}

export function isSorted(people: Person[]): boolean {
  for (let i = 1; i < people.length; i++) {
    if (people[i - 1].potatoes < people[i].potatoes) {
      return false;
    }
  }
  return true;
}