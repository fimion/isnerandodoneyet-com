
<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue';
import type { PropType } from 'vue';
import type { ProgressItem } from '../types';

export default defineComponent({
  name: 'ProgressCard',
  props: {
    item: {
      type: Object as PropType<ProgressItem>,
      required: true
    }
  },
  setup(props) {
    const circumference = 2 * Math.PI * 40;
    const dashOffset = ref(circumference);

    const progressPercentage = computed(() => {
      return Math.round((props.item.completed / props.item.total) * 100);
    });

    const formattedTitle = computed(() => {
      return props.item.title.replace('\n', '<br />');
    });

    onMounted(() => {
      // Animate the progress ring
      setTimeout(() => {
        dashOffset.value = circumference - (progressPercentage.value / 100) * circumference;
      }, 100);
    });

    return {
      circumference,
      dashOffset,
      progressPercentage,
      formattedTitle
    };
  }
});
</script>


<template>
    <div
      class="p-8 md:p-12 lg:p-20 text-center shadow-lg rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
    >
      <div class="mb-4">
        <svg class="w-full h-32" viewBox="0 0 100 100">
          <circle
            class="text-gray-200 dark:text-gray-700 stroke-current"
            stroke-width="8"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            class="text-blue-500 dark:text-blue-400 progress-ring stroke-current"
            stroke-width="8"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="dashOffset"
            stroke-linecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <text
            x="50"
            y="50"
            font-size="20"
            text-anchor="middle"
            alignment-baseline="middle"
            class="font-bold fill-current text-gray-800 dark:text-white"
          >
            {{ item.completed }}/{{ item.total }}
          </text>
        </svg>
      </div>
      <div class="text-xl font-medium text-gray-800 dark:text-white" v-html="formattedTitle"></div>
      <div class="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {{ progressPercentage }}% Complete
      </div>
    </div>
  </template>
