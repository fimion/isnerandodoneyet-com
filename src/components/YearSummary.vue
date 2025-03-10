<template>
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">{{ year }} Progress</h1>

      <progress-bar :percentage="progressPercentage" />

      <h2 class="text-5xl font-bold text-gray-800 dark:text-white mb-8">{{ progressPercentage }}%</h2>

      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Goals for {{ year }}</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <progress-card
          v-for="(item, index) in yearData.items"
          :key="`${year}-${item.category}-${index}`"
          :item="item"
        />
      </div>

      <div v-if="yearData.updates && yearData.updates.length > 0" class="mt-12 text-left">
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Progress Updates</h3>

        <update-filter
          :categories="categories"
          @filter-changed="updateFilters"
        />

        <div class="space-y-4">
          <progress-update
            v-for="(update, index) in filteredUpdates"
            :key="`${year}-update-${index}`"
            :update="update"
          />
        </div>
      </div>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent, computed, ref } from 'vue';
  import ProgressCard from './ProgressCard.vue';
  import ProgressBar from './ProgressBar.vue';
  import ProgressUpdate from './ProgressUpdate.vue';
  import UpdateFilter from './UpdateFilter.vue';
  import { progressService } from '../services/progressService';
  import type { YearlyData, Update } from '../types';

  export default defineComponent({
    name: 'YearSummary',
    components: {
      ProgressCard,
      ProgressBar,
      ProgressUpdate,
      UpdateFilter
    },
    props: {
      year: {
        type: Number,
        required: true
      }
    },
    setup(props) {
      const activeFilters = ref<string[]>(['All']);

      const yearData = computed<YearlyData>(() => {
        return progressService.getYearData(props.year) || {
          year: props.year,
          items: [],
          updates: []
        };
      });

      const progressPercentage = computed(() => {
        return progressService.calculateOverallProgress(props.year);
      });

      const categories = computed(() => {
        return progressService.getCategoriesForYear(props.year);
      });

      const filteredUpdates = computed<Update[]>(() => {
        if (activeFilters.value.includes('All')) {
          return yearData.value.updates || [];
        }

        return (yearData.value.updates || []).filter(update =>
          activeFilters.value.includes(update.category)
        );
      });

      const updateFilters = (filters: string[]) => {
        activeFilters.value = filters;
      };

      return {
        yearData,
        progressPercentage,
        categories,
        filteredUpdates,
        updateFilters
      };
    }
  });
  </script>
