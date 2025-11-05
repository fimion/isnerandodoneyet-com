<script setup lang="ts">
import { computed } from 'vue';
import { useProgressStore } from '../store/progress';
import StatsCard from './StatsCard.vue';

const progressStore = useProgressStore();

const currentYear = new Date().getFullYear();
const yearData = computed(() => progressStore.getYearData(currentYear));

// Computed statistics from update data
const stats = computed(() => {
  if (!yearData.value) {
    return {
      totalTalks: 0,
      totalProjects: 0,
      totalArticles: 0,
      totalGoals: 0,
      totalCompleted: 0,
      overallProgress: 0,
      talksGoal: 0,
      projectsGoal: 0,
      articlesGoal: 0,
    };
  }

  const talksItem = yearData.value.items.find(item => item.category === 'Talks');
  const projectsItem = yearData.value.items.find(item => item.category === 'Projects');
  const articlesItem = yearData.value.items.find(item => item.category === 'Articles');

  const totalTalks = talksItem?.completed || 0;
  const totalProjects = projectsItem?.completed || 0;
  const totalArticles = articlesItem?.completed || 0;

  const talksGoal = talksItem?.total || 0;
  const projectsGoal = projectsItem?.total || 0;
  const articlesGoal = articlesItem?.total || 0;

  const totalGoals = yearData.value.items.reduce((sum, item) => sum + item.total, 0);
  const totalCompleted = yearData.value.items.reduce((sum, item) => sum + item.completed, 0);
  const overallProgress = totalGoals > 0 ? Math.round((totalCompleted / totalGoals) * 100) : 0;

  return {
    totalTalks,
    totalProjects,
    totalArticles,
    totalGoals,
    totalCompleted,
    overallProgress,
    talksGoal,
    projectsGoal,
    articlesGoal,
  };
});
</script>

<template>
  <section class="stats-showcase mb-16" aria-labelledby="stats-heading">
    <h2
      id="stats-heading"
      class="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
      {{ currentYear }} At a Glance
    </h2>

    <!-- Responsive grid layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Overall Progress -->
      <stats-card
        label="Overall Progress"
        :value="stats.overallProgress"
        suffix="%"
        icon="🎯"
        color="purple"
        :show-progress="true"
        :total="100" />

      <!-- Talks Completed -->
      <stats-card
        label="Talks"
        :value="stats.totalTalks"
        icon="🎤"
        color="blue"
        :show-progress="true"
        :total="stats.talksGoal" />

      <!-- Projects Completed -->
      <stats-card
        label="Projects"
        :value="stats.totalProjects"
        icon="💻"
        color="green"
        :show-progress="true"
        :total="stats.projectsGoal" />

      <!-- Articles Published -->
      <stats-card
        label="Articles"
        :value="stats.totalArticles"
        icon="✍️"
        color="orange"
        :show-progress="true"
        :total="stats.articlesGoal" />
    </div>

    <!-- Additional aggregate stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <!-- Total Goals -->
      <stats-card
        label="Total Goals"
        :value="stats.totalGoals"
        icon="🎯"
        color="pink" />

      <!-- Total Completed -->
      <stats-card
        label="Completed"
        :value="stats.totalCompleted"
        icon="✅"
        color="green" />
    </div>
  </section>
</template>

<style scoped>
.stats-showcase {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
