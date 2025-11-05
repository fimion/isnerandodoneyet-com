<template>
    <main-layout>
      <div class="flex flex-col items-center justify-center py-12">
        <h1 class="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
        <h2 class="text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8">Page Not Found</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <router-link
          to="/"
          class="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Go Home
        </router-link>
      </div>
    </main-layout>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import MainLayout from '../components/layout/MainLayout.vue';

  export default defineComponent({
    name: 'NotFoundPage',
    components: {
      MainLayout
    }
  });
  </script>
