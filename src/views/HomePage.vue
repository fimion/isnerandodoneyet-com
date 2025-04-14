
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import ProgressCard from '../components/ProgressCard.vue';
import ProgressUpdate from '../components/ProgressUpdate.vue';
import UpdateFilter from '../components/UpdateFilter.vue';
import { fetchProgressData } from '../services/progressService';
import type { ProgressData, ProgressItem, Update } from '../types';

// Type definitions
type CategoryWithId = ProgressItem & { id: number };
type UpdateWithId = Update & { id: number };

// State management
const progressData = ref<CategoryWithId[]>([]);
const updates = ref<UpdateWithId[]>([]);
const activeFilter = ref<string>('all');
const isLoading = ref(true);
const error = ref<string | null>(null);

// Data fetching
onMounted(async () => {
  try {
    const data = await fetchProgressData();
    progressData.value = data.categories;
    updates.value = data.updates;
  } catch (e) {
    error.value = 'Failed to load progress data. Please try again later.';
    console.error('Error fetching progress data:', e);
  } finally {
    isLoading.value = false;
  }
});

// Computed properties
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

// Event handlers
const updateFilter = (filter: string): void => {
  activeFilter.value = filter;
};
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Is Nerando Done Yet?</h1>

    <div v-if="error" class="text-red-600 text-center mb-4">
      {{ error }}
    </div>

    <template v-if="isLoading">
      <div class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </template>

    <template v-else>
      <div id="total-progress" class="text-6xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        {{ totalProgressPercentage }}%
      </div>

      <section class="mb-16">
        <h2 class="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">2024 Goals Progress</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <progress-card
            v-for="category in progressData"
            :key="category.id"
            :item="category satisfies CategoryWithId"
          />
        </div>
      </section>

      <section class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">Recent Updates</h2>
        <update-filter @filter-change="updateFilter" />
        <div v-if="filteredUpdates.length" class="space-y-4">
          <progress-update
            v-for="(update: UpdateWithId) in filteredUpdates"
            :key="update.id"
            :update="update satisfies UpdateWithId"
          />
        </div>
        <p v-else class="text-center text-gray-600 dark:text-gray-400">
          No updates available for this category
        </p>
      </section>
    </template>
  </div>
</template>
