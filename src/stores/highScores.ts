import { defineStore } from 'pinia';

interface HighScore {
  playerName: string;
  score: number;
  count: number;
  date: string;
  difficulty: string;
}

interface HighScoresState {
  scores: HighScore[];
}

export const useHighScoresStore = defineStore('highScores', {
  state: (): HighScoresState => ({
    scores: JSON.parse(localStorage.getItem('highScores') || '[]')
  }),

  getters: {
    topScores: (state) => {
      return state.scores
        .sort((a, b) => a.score - b.score)
        .slice(0, 10);
    },

    getScoresByDifficulty: (state) => (difficulty: string) => {
      return state.scores
        .filter(score => score.difficulty === difficulty)
        .sort((a, b) => a.score - b.score)
        .slice(0, 5);
    }
  },

  actions: {
    addScore(score: HighScore) {
      this.scores.push(score);
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem('highScores', JSON.stringify(this.scores));
    },

    clearScores() {
      this.scores = [];
      this.saveToLocalStorage();
    }
  }
});