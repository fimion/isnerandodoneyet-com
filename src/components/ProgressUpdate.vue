<template>
    <div class="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div class="flex items-start">
        <div class="flex-shrink-0 mr-3">
          <div class="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-800 dark:text-white">
            Progress Update ({{ update.date }}): {{ update.text }}
            <a
              v-if="update.link"
              :href="update.link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {{ update.link.text }}
            </a>
            <span v-if="update.additionalText">{{ update.additionalText }}</span>
          </p>
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Category: {{ update.category }}
          </p>
        </div>
      </div>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import type { PropType } from 'vue';
  import type { Update } from '../types';

  export default defineComponent({
    name: 'ProgressUpdate',
    props: {
      update: {
        type: Object as PropType<Update>,
        required: true
      }
    }
  });
  </script>
