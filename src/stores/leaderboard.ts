import { defineStore } from 'pinia';

interface Score {
  playerName: string;
  count: number;
  time: number;
  date: string;
}

interface LeaderboardState {
  scores: Score[];
  playerName: string | null;
}

export const useLeaderboardStore = defineStore('leaderboard', {
  state: (): LeaderboardState => ({
    scores: [],
    playerName: localStorage.getItem('playerName') || null,
  }),

  getters: {
    topScores: (state) => {
      return [...state.scores]
        .sort((a, b) => a.time - b.time)
        .slice(0, 10);
    },

    playerBestScore: (state) => (count: number) => {
      return state.scores
        .filter(s => s.count === count && s.playerName === state.playerName)
        .sort((a, b) => a.time - b.time)[0];
    }
  },

  actions: {
    initializeFromStorage() {
      const stored = localStorage.getItem('leaderboard');
      if (stored) {
        this.scores = JSON.parse(stored);
      }
    },

    setPlayerName(name: string) {
      this.playerName = name;
      localStorage.setItem('playerName', name);
    },

    addScore(score: Score) {
      this.scores.push(score);
      localStorage.setItem('leaderboard', JSON.stringify(this.scores));
    }
  }
});