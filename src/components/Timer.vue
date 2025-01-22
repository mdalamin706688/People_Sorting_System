<!-- components/Timer.vue -->
<template>
    <div class="text-2xl font-mono">
      {{ formattedTime }}
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue';
  
  export default defineComponent({
    name: 'Timer',
    
    props: {
      startTime: {
        type: Number,
        required: true
      },
      isRunning: {
        type: Boolean,
        required: true
      }
    },
    
    setup(props) {
      const currentTime = ref<number>(0);
      let interval: number | null = null;
      
      const updateTimer = () => {
        if (props.isRunning) {
          currentTime.value = Date.now() - props.startTime;
        }
      };
      
      onMounted(() => {
        interval = window.setInterval(updateTimer, 100);
      });
      
      onUnmounted(() => {
        if (interval) clearInterval(interval);
      });
      
      const formattedTime = computed(() => {
        const seconds = Math.floor(currentTime.value / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
      });
      
      return {
        formattedTime
      };
    }
  });
  </script>