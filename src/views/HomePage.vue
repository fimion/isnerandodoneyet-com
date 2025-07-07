<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useProgressStore } from '../store/progress';
import ProgressCard from '../components/ProgressCard.vue';
import ProgressUpdate from '../components/ProgressUpdate.vue';
import UpdateFilter from '../components/UpdateFilter.vue';
import type { ProgressItem, Update } from '../types';

// Type definitions
// (IDs are added in the store's getter)
type CategoryWithId = ProgressItem & { id: number };
type UpdateWithId = Update & { id: number };

const progressStore = useProgressStore();
const { fetchProgressData } = progressStore;

const activeFilter = ref<string>('all');

// Get progress data from the store
const progressData = computed<CategoryWithId[]>(() => fetchProgressData().categories);
const updates = computed<UpdateWithId[]>(() => fetchProgressData().updates);

const totalProgressPercentage = computed(() => {
  if (!progressData.value.length) return 0;
  const totalCompleted = progressData.value.reduce(
    (sum: number, category: CategoryWithId) => sum + category.completed,
    0
  );
  const totalGoals = progressData.value.reduce(
    (sum: number, category: CategoryWithId) => sum + category.total,
    0
  );
  return Math.round((totalCompleted / totalGoals) * 100);
});

const filteredUpdates = computed(() => {
  if (activeFilter.value === 'all') {
    return updates.value;
  }
  return updates.value.filter(
    (update: UpdateWithId) => update.category === activeFilter.value
  );
});

const updateFilter = (filter: string): void => {
  activeFilter.value = filter;
};
</script>

<template>
  <main id="main-content" tabindex="-1" aria-label="Main content" class="outline-none">
    <h1 class="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Is Nerando Done Yet?</h1>

    <div v-if="false" class="text-red-600 text-center mb-4">
      <!-- Error handling can be added if needed -->
    </div>

    <div id="total-progress" class="text-6xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      aria-live="polite" aria-atomic="true">
      {{ totalProgressPercentage }}%
    </div>

    <section class="mb-16" aria-labelledby="goals-heading">
      <h2 id="goals-heading" class="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">2025 Goals
        Progress</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <progress-card v-for="(category: CategoryWithId) in progressData" :key="category.id" :item="category" />
      </div>
    </section>

    <section class="max-w-3xl mx-auto" aria-labelledby="updates-heading">
      <h2 id="updates-heading" class="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">Recent
        Updates</h2>
      <update-filter @filter-change="updateFilter" />
      <div v-if="filteredUpdates.length" class="space-y-4">
        <progress-update v-for="(update: UpdateWithId) in filteredUpdates" :key="update.id" :update="update" />
      </div>
      <p v-else class="text-center text-gray-600 dark:text-gray-400">
        No recent updates available.
      </p>
    </section>
  </main>
</template>
