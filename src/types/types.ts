// types/index.ts
export interface Person {
  id: string;
  email: string;
  potatoes: number;
  name: string;
}

export interface GameState {
  people: Person[];
  isPlaying: boolean;
  startTime: number | null;
  endTime: number | null;
  targetCount: number | null;
}