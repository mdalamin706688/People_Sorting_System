import { defineStore } from 'pinia';
import { generatePeople } from '../utils/generateData';
import { isSorted } from '../utils/validation';
export const useGameStore = defineStore('game', {
    state: () => {
        // Try to load the persisted state from localStorage
        const persistedState = localStorage.getItem('gameState');
        if (persistedState) {
            const parsed = JSON.parse(persistedState);
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
        score() {
            if (!this.startTime || !this.endTime)
                return null;
            return Math.floor((this.endTime - this.startTime) / 1000);
        },
        isComplete() {
            return isSorted(this.people);
        }
    },
    actions: {
        startGame(count) {
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
        updatePeopleOrder(people) {
            this.people = people;
            this.persistState();
            if (this.isPlaying && isSorted(people)) {
                this.endGame();
            }
        },
        persistState() {
            const stateToSave = {
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
