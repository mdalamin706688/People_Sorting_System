import { defineStore } from 'pinia';
import type { Person, GameState } from '../types/types';
import { generatePeople } from '../utils/generateData';
import { isSorted } from '../utils/validation';

// Define the structure for persisted state
interface PersistedState {
  people: Person[];
  isPlaying: boolean;
  startTime: number | null;
  endTime: number | null;
  targetCount: number | null;
}

export const useGameStore = defineStore('game', {
  state: (): GameState => {
    // Try to load the persisted state from localStorage
    const persistedState = localStorage.getItem('gameState');
    if (persistedState) {
      const parsed = JSON.parse(persistedState) as PersistedState;
      return {
        people: parsed.people,
        isPlaying: parsed.isPlaying,
        startTime: parsed.startTime,
        endTime: parsed.endTime,
        targetCount: parsed.targetCount,
      };
    }
    
    // Return default state if no persisted state exists
    return {
      people: [],
      isPlaying: false,
      startTime: null,
      endTime: null,
      targetCount: null,
    };
  },
  
  getters: {
    score(): number | null {
      if (!this.startTime || !this.endTime) return null;
      return Math.floor((this.endTime - this.startTime) / 1000);
    },
    
    isComplete(): boolean {
      return isSorted(this.people);
    }
  },
  
  actions: {
    startGame(count: number) {
      this.people = generatePeople(count);
      this.isPlaying = true;
      this.startTime = Date.now();
      this.endTime = null;
      this.targetCount = count;
      this.persistState();
    },
    
    endGame() {
      this.endTime = Date.now();
      this.isPlaying = false;
      this.persistState();
    },

    endGameEarly() {
      this.isPlaying = false;
      this.endTime = Date.now();
      this.persistState();
    },
    
    updatePeopleOrder(people: Person[]) {
      this.people = people;
      this.persistState();
      if (this.isPlaying && isSorted(people)) {
        this.endGame();
      }
    },

    persistState() {
      const stateToSave: PersistedState = {
        people: this.people,
        isPlaying: this.isPlaying,
        startTime: this.startTime,
        endTime: this.endTime,
        targetCount: this.targetCount,
      };
      localStorage.setItem('gameState', JSON.stringify(stateToSave));
    },

    clearPersistedState() {
      localStorage.removeItem('gameState');
    },

    $reset() {
      this.people = [];
      this.isPlaying = false;
      this.startTime = null;
      this.endTime = null;
      this.targetCount = null;
      this.clearPersistedState();
    }
  }
});
