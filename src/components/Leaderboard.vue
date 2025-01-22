<template>
    <div class="bg-white rounded-lg shadow-lg p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Leaderboard</h2>
        <div class="flex gap-2">
          <button
            v-for="diff in difficulties"
            :key="diff"
            @click="selectedDifficulty = diff"
            :class="[
              'px-3 py-1 rounded-full text-sm font-medium transition-colors',
              selectedDifficulty === diff
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
          >
            {{ diff }}
          </button>
        </div>
      </div>
  
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-gray-500">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(score, index) in filteredScores" :key="index" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div :class="[
                  'inline-flex items-center justify-center w-8 h-8 rounded-full font-bold',
                  index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-800' :
                  index === 2 ? 'bg-amber-100 text-amber-800' :
                  'text-gray-500'
                ]">
                  {{ index + 1 }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">{{ score.playerName }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ score.count }} items</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ score.score }}s</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ new Date(score.date).toLocaleDateString() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useHighScoresStore } from '../stores/highScores';
  
  const highScoresStore = useHighScoresStore();
  const difficulties = ['Easy', 'Medium', 'Hard'];
  const selectedDifficulty = ref('Medium');
  
  const filteredScores = computed(() => {
    return highScoresStore.getScoresByDifficulty(selectedDifficulty.value);
  });
  </script>