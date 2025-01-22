<template>
  <div
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div
      class="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 transform transition-all"
    >
      <div class="p-6">
        <div class="text-center mb-6">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
          >
            <CheckCircle class="w-8 h-8 text-green-600" />
          </div>
          <h2 class="text-2xl font-bold mb-2">Outstanding Job!</h2>
          <p class="text-gray-600">
            You've sorted {{ count }} items in
            <span class="font-bold text-gray-900">{{ score }}</span> seconds!
          </p>
        </div>

        <div class="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 class="font-medium mb-3">Leaderboard</h3>
          <div class="space-y-2">
            <div
              v-for="(topScore, index) in topScores"
              :key="index"
              class="flex items-center justify-between p-2 rounded"
              :class="
                topScore.playerName === leaderboardStore.playerName
                  ? 'bg-blue-50'
                  : ''
              "
            >
              <div class="flex items-center">
                <span class="w-6 text-gray-500">{{ index + 1 }}.</span>
                <span class="font-medium">{{ topScore.playerName }}</span>
              </div>
              <span>{{ topScore.time }}s</span>
            </div>
          </div>
        </div>

        <div class="flex space-x-3">
          <button
            @click="$emit('restart')"
            class="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle } from "lucide-vue-next";
import { useLeaderboardStore } from "../stores/leaderboard";
import { computed } from "vue";

const props = defineProps<{
  score: number;
  count: number;
}>();

const emit = defineEmits<{
  (e: "restart"): void;
}>();

const leaderboardStore = useLeaderboardStore();

const topScores = computed(() => {
  return leaderboardStore.topScores.filter((s) => s.count === props.count);
});
</script>
