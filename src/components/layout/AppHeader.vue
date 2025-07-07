<script setup lang="ts">
defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
});

defineEmits(['toggle-dark-mode']);
</script>


<template>
  <header class="app-header">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold text-gray-900 dark:text-white">IsNerandoDoneYet</router-link>

      <nav class="main-nav">
        <router-link to="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          active-class="text-blue-600 dark:text-blue-400" exact-active-class="text-blue-600 dark:text-blue-400"
          :aria-current="$route.path === '/' ? 'page' : null">
          Home
        </router-link>
        <!-- <router-link
          to="/archives"
          class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          active-class="text-blue-600 dark:text-blue-400"
        >
          Archives
        </router-link> -->

        <button @click="$emit('toggle-dark-mode')" class="toggle-dark-btn" aria-label="Toggle dark mode">
          <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  @apply bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-4 sticky top-0 z-10;
}

.main-nav {
  @apply flex items-center space-x-6;
}

.toggle-dark-btn {
  @apply p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors;
}
</style>
