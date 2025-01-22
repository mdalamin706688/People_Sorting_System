<template>
  <div class="w-full rounded-lg overflow-hidden border border-gray-200 relative shadow-lg">
    <!-- Header -->
    <div class="bg-black text-white border-b border-gray-300">
      <div class="flex items-center p-4 font-semibold text-lg">
        <div class="flex-1 px-2 text-xl">Name</div>
        <div class="flex-1 px-2 text-xl">Email</div>
        <div class="w-32 text-right px-2 text-xl">Potatoes</div>
      </div>
    </div>

    <!-- Scrollable Container -->
    <div
      ref="scrollContainer"
      class="overflow-auto relative bg-white rounded-lg shadow-lg"
      style="height: 600px;"
    >
      <draggable
        v-model="sortedPeople"
        item-key="id"
        handle=".drag-handle"
        :animation="200"
        :move="onMove"
        class="min-h-full"
        @start="dragStart"
        @end="dragEnd"
      >
        <template #item="{ element }">
          <div
            class="flex items-center p-4 bg-white hover:bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-100 group transition-colors ease-in-out"
          >
            <!-- Drag Handle -->
            <div
              class="drag-handle flex items-center justify-center w-8 -ml-2 cursor-move opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg
                class="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M8 4h8M8 12h8M8 20h8" />
              </svg>
            </div>

            <!-- Content -->
            <div class="flex-1 px-2 flex items-center">
              <div class="flex items-center space-x-3">
                <div
                  class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-medium"
                >
                  {{ element.name.charAt(0) }}
                </div>
                <span class="text-lg font-semibold text-gray-800">{{ element.name }}</span>
              </div>
            </div>
            <div class="flex-1 px-2 text-gray-600">{{ element.email }}</div>
            <div class="w-32 text-right px-2 font-medium text-lg text-gray-700">
              {{ element.potatoes.toLocaleString() }}
            </div>
          </div>
        </template>
      </draggable>
    </div>

  
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import draggable from "vuedraggable";
import type { Person } from "../types/types";

const props = defineProps<{
  people: Person[];
}>();

const emit = defineEmits<{
  (e: "update", value: Person[]): void;
}>();

const scrollContainer = ref<HTMLElement | null>(null);
const isDragging = ref(false);
const autoScrollSpeed = 5; // Speed of auto-scroll in px/frame

// Computed
const sortedPeople = computed({
  get: () => props.people,
  set: (value) => emit("update", value),
});



// Methods
const scrollToSection = (index: number) => {
  if (scrollContainer.value) {
    const sectionSize = Math.floor(props.people.length / Selection.length);
    const targetIndex = index * sectionSize;
    const targetElement =
      scrollContainer.value.children[0].children[targetIndex];

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const dragStart = () => {
  isDragging.value = true;
};

const dragEnd = () => {
  isDragging.value = false;
  stopAutoScroll();
};

// Auto-scroll detection
const autoScrollInterval = ref<ReturnType<typeof setInterval> | null>(null);

const startAutoScroll = (direction: "up" | "down") => {
  stopAutoScroll();
  autoScrollInterval.value = setInterval(() => {
    if (!scrollContainer.value) return;
    scrollContainer.value.scrollTop +=
      direction === "up" ? -autoScrollSpeed : autoScrollSpeed;
  }, 16); // ~60fps
};

const stopAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value);
    autoScrollInterval.value = null;
  }
};

const onMove = (evt: { originalEvent: MouseEvent }) => {
  if (!scrollContainer.value) return;

  const { clientY } = evt.originalEvent;
  const { top, bottom } = scrollContainer.value.getBoundingClientRect();
  const threshold = 50; // Distance from edge to start auto-scrolling

  if (clientY < top + threshold) {
    startAutoScroll("up");
  } else if (clientY > bottom - threshold) {
    startAutoScroll("down");
  } else {
    stopAutoScroll();
  }
};
</script>

<style scoped>
.drag-handle {
  touch-action: none;
}

/* Quick Navigation Button Styles */
button:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
  transition: all 0.3s ease;
}

/* Enhanced Glassmorphism and Elevation */
.sticky {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  transform: translateY(0);
  transition: all 0.5s ease-out;
}

/* Smooth Fade-in/Out for Sorting Table */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
