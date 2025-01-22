<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full m-4">
        <h2 class="text-2xl font-bold mb-6">Enter Your Name</h2>
        
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Player Name</label>
          <input
            v-model="playerName"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
            @keyup.enter="handleSubmit"
          />
        </div>
  
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
          <div class="flex gap-2">
            <button
              v-for="diff in difficulties"
              :key="diff"
              @click="difficulty = diff"
              :class="[
                'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                difficulty === diff
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
            >
              {{ diff }}
            </button>
          </div>
        </div>
        
        <div class="flex justify-end gap-3">
          <button
            @click="$emit('close')"
            class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            Cancel
          </button>
          <button
            @click="handleSubmit"
            class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
            :disabled="!playerName.trim()"
          >
            Start Train
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const props = defineProps<{
    show: boolean;
  }>();
  
  const emit = defineEmits<{
    (e: 'start', playerName: string, difficulty: string): void;
    (e: 'close'): void;
  }>();
  
  const playerName = ref('');
  const difficulties = ['Easy', 'Medium', 'Hard'];
  const difficulty = ref('Medium');
  
  const handleSubmit = () => {
    if (playerName.value.trim()) {
      emit('start', playerName.value, difficulty.value);
      playerName.value = '';
    }
  };
  </script>