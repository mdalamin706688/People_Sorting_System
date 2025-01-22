<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 transform transition-transform duration-300 scale-95 hover:scale-100">
      <div class="p-8">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-lg mb-6">
            <X class="w-10 h-10 text-red-700" />
          </div>
          <h2 class="text-3xl font-extrabold text-gray-800 mb-3">Training Session Ended</h2>
          <p class="text-gray-500 text-lg">Your training session has ended. Ready to start again or exit?</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <button
            @click="$emit('restart')"
            class="flex-1 px-5 py-3 bg-gradient-to-r from-black to-black text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-gray-700 hover:to-gray-600 transition-all">
            Start New Train
          </button>
          <button
            @click="$emit('close')"
            class="flex-1 px-5 py-3 border border-gray-300 text-gray-700 text-lg font-semibold rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition-all">
            End Train
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next';

defineProps<{
  isVisible: boolean;
}>();

defineEmits<{
  (e: 'close'): void;
  (e: 'restart'): void;
}>();
</script>

<style scoped>
</style>