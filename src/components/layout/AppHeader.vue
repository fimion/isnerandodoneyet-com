<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useTheme } from '../../composables/useTheme';
import { siteConfig } from '../../config/site';

const { isDarkMode, toggleDarkMode } = useTheme();

// Dropdown state management
const isDropdownOpen = ref(false);
const dropdownButton = ref<HTMLElement | null>(null);
const dropdownMenu = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isDropdownOpen.value) {
    closeDropdown();
    dropdownButton.value?.focus();
  }
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node;
  if (
    dropdownButton.value &&
    dropdownMenu.value &&
    !dropdownButton.value.contains(target) &&
    !dropdownMenu.value.contains(target)
  ) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header class="app-header">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold text-gray-900 dark:text-white">
        {{ siteConfig.name }}
      </router-link>

      <nav class="main-nav">
        <router-link
          to="/"
          class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          active-class="text-blue-600 dark:text-blue-400"
          exact-active-class="text-blue-600 dark:text-blue-400"
          :aria-current="$route.path === '/' ? 'page' : undefined">
          Home
        </router-link>

        <!-- Previous Years Dropdown -->
        <div class="relative inline-block text-left">
          <button
            ref="dropdownButton"
            @click="toggleDropdown"
            class="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 rounded-md transition-colors"
            :aria-expanded="isDropdownOpen"
            aria-haspopup="true"
            type="button">
            Previous Years
            <svg
              class="ml-1 h-4 w-4 transition-transform"
              :class="{ 'rotate-180': isDropdownOpen }"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-show="isDropdownOpen"
            ref="dropdownMenu"
            class="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 transition-opacity z-20"
            role="menu"
            aria-label="Previous Years">
            <router-link
              v-for="year in siteConfig.previousYears"
              :key="year"
              :to="`/year/${year}`"
              @click="closeDropdown"
              class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"
              role="menuitem">
              {{ year }}
            </router-link>
          </div>
        </div>
        <!-- End Previous Years Dropdown -->

        <button
          @click="toggleDarkMode"
          class="toggle-dark-btn"
          aria-label="Toggle dark mode"
          type="button">
          <svg
            v-if="isDarkMode"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  @apply bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-4 fixed top-0 left-0 right-0 z-50;
}

.main-nav {
  @apply flex items-center space-x-6;
}

.toggle-dark-btn {
  @apply p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors;
}
</style>
