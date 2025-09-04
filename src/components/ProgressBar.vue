<template>
  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div 
      class="h-2.5 rounded-full transition-all duration-500" 
      :style="{ width: `${percentage}%`, backgroundColor: color }" 
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  percentage: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: '#10B981' // Default to emerald-500
  }
});
</script>
