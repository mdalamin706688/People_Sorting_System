// utils/generateData.ts
// utils/generateData.ts
import type { Person } from '../types/types';
import { nanoid } from 'nanoid';

const FIRST_NAMES = ['John', 'Jane', 'Alex', 'Maria', 'Peter', 'Sarah', 'Michael', 'Emma'];
const LAST_NAMES = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller'];

export function generateRandomPerson(usedPotatoes: Set<number>): Person {
  const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  
  let potatoes: number;
  do {
    potatoes = Math.floor(Math.random() * 1000) + 1;
  } while (usedPotatoes.has(potatoes));
  
  return {
    id: nanoid(),
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@potatostan.gov`,
    potatoes,
    name: `${firstName} ${lastName}`
  };
}

export function generatePeople(count: number): Person[] {
  const usedPotatoes = new Set<number>();
  const people: Person[] = [];
  
  for (let i = 0; i < count; i++) {
    const person = generateRandomPerson(usedPotatoes);
    usedPotatoes.add(person.potatoes);
    people.push(person);
  }
  
  return people;
}