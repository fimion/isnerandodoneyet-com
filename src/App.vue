<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
import { useTheme } from './composables/useTheme';

const { isDarkMode, toggleDarkMode } = useTheme();
</script>

<template>
  <div class="min-h-screen" :class="{ 'dark': isDarkMode }">
    <div class="min-h-screen bg-gradient-to-b from-yellow-200 via-green-200 to-blue-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <app-header :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      <main class="w-full max-w-7xl mx-auto px-4 py-8">
        <router-view />
      </main>
      <app-footer />
    </div>
  </div>
</template>
