<template>
  <div>
    <h1 class="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Is Nerando Done Yet?</h1>
    <div id="total-progress" class="text-6xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      {{ totalProgressPercentage }}%
    </div>

    <section class="mb-16">
      <h2 class="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">2024 Goals Progress</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <progress-card
          v-for="category in progressData"
          :key="category.id"
          :category="category"
        />
      </div>
    </section>

    <section class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">Recent Updates</h2>
      <update-filter @filter-change="updateFilter" />
      <div class="space-y-4">
        <progress-update
          v-for="update in filteredUpdates"
          :key="update.id"
          :update="update"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import ProgressCard from '../components/ProgressCard.vue';
import ProgressUpdate from '../components/ProgressUpdate.vue';
import UpdateFilter from '../components/UpdateFilter.vue';
import { fetchProgressData } from '../services/progressService';

const progressData = ref([]);
const updates = ref([]);
const activeFilter = ref('all');

onMounted(async () => {
  const data = await fetchProgressData();
  progressData.value = data.categories;
  updates.value = data.updates;
});

const totalProgressPercentage = computed(() => {
  if (!progressData.value.length) return 0;

  const totalCompleted = progressData.value.reduce((sum, category) => sum + category.completed, 0);
  const totalGoals = progressData.value.reduce((sum, category) => sum + category.total, 0);

  return Math.round((totalCompleted / totalGoals) * 100);
});

const updateFilter = (filter) => {
  activeFilter.value = filter;
};

const filteredUpdates = computed(() => {
  if (activeFilter.value === 'all') {
    return updates.value;
  }
  return updates.value.filter(update => update.category === activeFilter.value);
});
</script>
