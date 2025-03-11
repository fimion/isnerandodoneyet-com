<template>
  <div class="mb-6 flex flex-wrap gap-2">
    <button
      v-for="category in categories"
      :key="category"
      @click="toggleFilter(category)"
      class="px-3 py-1 rounded-full text-sm transition-colors duration-200"
      :class="isActive(category) ? activeClass : inactiveClass"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Props definition
const props = withDefaults(defineProps<{
  categories?: string[];
}>(), {
  categories: () => ['All', 'Talks', 'Projects', 'Articles']
});

// Emits definition
const emit = defineEmits<{
  'filter-changed': [filters: string[]];
}>();

const activeFilters = ref<string[]>(['All']);

const toggleFilter = (category: string) => {
  if (category === 'All') {
    activeFilters.value = ['All'];
  } else {
    if (activeFilters.value.includes('All')) {
      activeFilters.value = activeFilters.value.filter(f => f !== 'All');
    }

    if (activeFilters.value.includes(category)) {
      activeFilters.value = activeFilters.value.filter(f => f !== category);
      if (activeFilters.value.length === 0) {
        activeFilters.value = ['All'];
      }
    } else {
      activeFilters.value.push(category);
    }
  }

  emit('filter-changed', activeFilters.value);
};

const isActive = (category: string): boolean => {
  return activeFilters.value.includes(category);
};

const activeClass = 'bg-blue-500 text-white dark:bg-blue-600';
const inactiveClass = 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
</script>
