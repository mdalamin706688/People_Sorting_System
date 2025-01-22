<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Welcome to Potato Sorter!</h2>
        
        <div v-if="!leaderboardStore.playerName">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1 text-gray-700">Your Name:</label>
            <input
              v-model="name"
              type="text"
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              @keyup.enter="setName"
            />
          </div>
          <button
            @click="setName"
            class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            :disabled="!name.trim()"
          >
            Continue
          </button>
        </div>
        
        <div v-else>
          <p class="mb-4 text-gray-600">Welcome back, {{ leaderboardStore.playerName }}!</p>
          
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1 text-gray-700">Number of items to sort:</label>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="option in [20, 50, 100]"
                :key="option"
                @click="count = option"
                class="px-4 py-2 rounded-lg border-2 transition-all"
                :class="count === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'"
              >
                {{ option }}
              </button>
            </div>
          </div>

          <div class="mb-6">
            <h3 class="text-sm font-medium mb-2 text-gray-700">Your Best Time:</h3>
            <div class="bg-gray-50 rounded-lg p-3">
              {{ getBestTimeDisplay(count) }}
            </div>
          </div>

          <div class="flex space-x-3">
            <button
              @click="$emit('close')"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              @click="handleStart"
              class="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Start Train
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLeaderboardStore } from '../stores/leaderboard';

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'start', count: number): void;
  (e: 'close'): void;
}>();

const leaderboardStore = useLeaderboardStore();
const count = ref(20);
const name = ref('');

const handleStart = () => {
  emit('start', count.value);
};

const setName = () => {
  if (name.value.trim()) {
    leaderboardStore.setPlayerName(name.value.trim());
  }
};

const getBestTimeDisplay = (itemCount: number) => {
  const best = leaderboardStore.playerBestScore(itemCount);
  return best ? `${best.time} seconds` : 'No attempts yet';
};
</script>