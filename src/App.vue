// App.vue
<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-xl p-6 mb-6">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Sorting Training System</h1>
            <p class="text-gray-600">Sort items by their potato count in descending order</p>
          </div>
          <div class="flex items-center space-x-4">
            <button
              v-if="!gameStore.isPlaying && !showSuccessMessage"
              @click="startGame"
              class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-lg"
            >
              Start Train
            </button>
            <button
              v-if="gameStore.isPlaying"
              @click="endGame"
              class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors shadow-lg"
            >
              End Train
            </button>
          </div>
        </div>

        <div v-if="gameStore.isPlaying" class="mb-4">
          <div class="bg-gray-50 bg-opacity-50 backdrop-blur-md rounded-lg p-4">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="font-medium mb-2">Instructions:</h2>
                <ul class="text-gray-600 space-y-1">
                  <li>• Drag and drop items to reorder them</li>
                  <li>• Sort by potato count in descending order (highest to lowest)</li>
                  <li>• Complete the sort as quickly as possible</li>
                </ul>
              </div>
              <div class="text-center">
                <Timer
                  :start-time="gameStore.startTime!"
                  :is-running="gameStore.isPlaying"
                />
                <p class="text-sm text-gray-500 mt-1">Current Time</p>
              </div>
            </div>
          </div>
        </div>

        <Transition name="fade">
          <SortingTable
            v-if="gameStore.people.length && gameStore.isPlaying"
            :people="gameStore.people"
            @update="handleUpdate"
          />
        </Transition>
      </div>

      <div v-if="!gameStore.isPlaying && leaderboardStore.scores.length" class="mt-8 bg-opacity-50 backdrop-blur-md rounded-xl shadow-2xl p-8 transition-all duration-700 opacity-100 transform">
        <h2 class="text-4xl font-semibold text-gray-900 mb-6 tracking-wide">Leaderboard</h2>
        <div class="overflow-x-auto shadow-lg rounded-xl bg-white bg-opacity-20 backdrop-blur-xl">
          <table class="min-w-full table-auto text-gray-700">
            <thead class="bg-gray-700 bg-opacity-40 text-white">
              <tr>
                <th class="px-6 py-4 text-lg font-semibold">Rank</th>
                <th class="px-6 py-4 text-lg font-semibold">Player</th>
                <th class="px-6 py-4 text-lg font-semibold">Score</th>
                <th class="px-6 py-4 text-lg font-semibold">Time</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr v-for="(score, index) in leaderboardStore.scores" :key="score.date" class="hover:bg-gray-200 transition-all ease-in-out">
                <td class="px-6 py-4">{{ index + 1 }}</td>
                <td class="px-6 py-4 font-semibold">{{ score.playerName }}</td>
                <td class="px-6 py-4">{{ score.count }}</td>
                <td class="px-6 py-4">{{ formatTime(score.time) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <GameModal
      :show="showModal"
      @close="showModal = false"
      @start="handleStart"
    />

    <SuccessMessage
      v-if="showSuccessMessage && !showEndTrainModal"
      :score="gameStore.score!"
      :count="gameStore.targetCount!"
      @restart="handleRestart"
      
    />

    <EndTrainingModal
      v-if="showEndTrainModal"
      :is-visible="showEndTrainModal"
      @close="showEndTrainModal = false"
      @restart="handleRestart"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useGameStore } from './stores/game';
import { useLeaderboardStore } from './stores/leaderboard';
import type { Person } from './types/types';
import GameModal from './components/GameModal.vue';
import SortingTable from './components/SortingTable.vue';
import Timer from './components/Timer.vue';
import SuccessMessage from './components/SuccessMessage.vue';
import EndTrainingModal from './components/EndTrainingModal.vue';

const gameStore = useGameStore();
const leaderboardStore = useLeaderboardStore();
const showModal = ref(false);
const showEndTrainModal = ref(false);
const showSuccessMessage = computed(() => gameStore.score !== null && gameStore.isComplete);

onMounted(() => {
  leaderboardStore.initializeFromStorage();
  if (!leaderboardStore.playerName) {
    showModal.value = true;
  }
});

const startGame = () => {
  if (gameStore.isPlaying || showSuccessMessage.value) return;
  showModal.value = true;
};

const endGame = () => {
  showEndTrainModal.value = true;
  gameStore.endGameEarly();
};

const handleStart = (count: number) => {
  gameStore.startGame(count);
  showModal.value = false;
};

const handleUpdate = (people: Person[]) => {
  gameStore.updatePeopleOrder(people);
  if (gameStore.score !== null) {
    leaderboardStore.addScore({
      playerName: leaderboardStore.playerName!,
      count: gameStore.targetCount!,
      time: gameStore.score,
      date: new Date().toISOString()
    });
  }
};

const handleRestart = () => {
  showEndTrainModal.value = false;
  gameStore.$reset();
  showModal.value = true;
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
</script>

<style scoped>
/* Table Styles */
table th,
table td {
  text-align: center;
  white-space: nowrap;
}



table tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}

table tr:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  padding: 14px;
  text-align: left;
}

/* Glassmorphism Styles */
.bg-opacity-50 {
  background-color: rgba(255, 255, 255, 0.5);
}

.backdrop-blur-md {
  backdrop-filter: blur(20px);
}

.backdrop-blur-xl {
  backdrop-filter: blur(30px);
}

/* Premium Leaderboard Styling */
.bg-gray-700 {
  background-color: rgb(0, 0, 0);
}

table th {
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  min-width: 120px;
  font-size: 1.1rem;
  letter-spacing: 1px;
}

table td, table th {
  border-radius: 0px;
}

table tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}

table tr:hover {
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Modern Typography */
h2 {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1.5px;
  font-weight: 700;
}
</style>
