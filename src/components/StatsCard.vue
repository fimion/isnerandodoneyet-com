<script setup lang="ts">
import { computed } from 'vue';
import { useAnimatedCounter } from '../composables/useAnimatedCounter';

interface Props {
  label: string;
  value: number;
  icon?: string;
  suffix?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'pink';
  showProgress?: boolean;
  total?: number;
}

const props = withDefaults(defineProps<Props>(), {
  icon: '📊',
  suffix: '',
  color: 'blue',
  showProgress: false,
  total: 100,
});

const { current } = useAnimatedCounter(props.value);

const progressPercentage = computed(() => {
  if (!props.showProgress || !props.total) return 0;
  return Math.round((props.value / props.total) * 100);
});

const colorClasses = computed(() => {
  const colors = {
    blue: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700',
    green: 'from-green-500 to-green-600 dark:from-green-600 dark:to-green-700',
    purple: 'from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700',
    orange: 'from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700',
    pink: 'from-pink-500 to-pink-600 dark:from-pink-600 dark:to-pink-700',
  };
  return colors[props.color];
});

const textColorClass = computed(() => {
  const colors = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    purple: 'text-purple-600 dark:text-purple-400',
    orange: 'text-orange-600 dark:text-orange-400',
    pink: 'text-pink-600 dark:text-pink-400',
  };
  return colors[props.color];
});
</script>

<template>
  <div
    class="stats-card bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
    role="article"
    :aria-label="`${label}: ${value}${suffix}`">
    <div class="flex items-center justify-between mb-4">
      <span class="text-4xl" role="img" :aria-label="label">{{ icon }}</span>
      <div class="text-right">
        <div class="text-3xl font-bold" :class="textColorClass">
          {{ current }}{{ suffix }}
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {{ label }}
        </div>
      </div>
    </div>

    <!-- Progress bar if showProgress is true -->
    <div v-if="showProgress" class="mt-4">
      <div class="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
        <span>Progress</span>
        <span>{{ progressPercentage }}%</span>
      </div>
      <div class="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
        <div
          class="h-full bg-gradient-to-r transition-all duration-1000 ease-out rounded-full"
          :class="colorClasses"
          :style="{ width: `${progressPercentage}%` }"
          role="progressbar"
          :aria-valuenow="progressPercentage"
          aria-valuemin="0"
          aria-valuemax="100">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-card {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
