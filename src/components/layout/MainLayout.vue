<template>
    <div class="flex flex-col min-h-screen bg-gradient-to-b via-green-200 to-blue-300 from-yellow-200 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-200">
      <app-header />

      <main class="flex-grow container mx-auto px-4 py-8">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <app-footer />
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import AppHeader from './AppHeader.vue';
  import AppFooter from './AppFooter.vue';

  export default defineComponent({
    name: 'MainLayout',
    components: {
      AppHeader,
      AppFooter
    }
  });
  </script>

  <style scoped>
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }

  .page-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }

  .page-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  </style>
