<template>
    <div>
      <year-summary :year="year" />
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import YearSummary from '../components/YearSummary.vue';

  export default defineComponent({
    name: 'YearPage',
    components: {
      YearSummary
    },
    props: {
      year: {
        type: Number,
        required: true
      }
    }
  });
  </script>
