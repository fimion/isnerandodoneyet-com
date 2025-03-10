import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

// Category colors for global injection
const categoryColors = {
  talks: '#3B82F6',    // blue-500
  projects: '#10B981', // emerald-500
  articles: '#F59E0B'  // amber-500
};

const app = createApp(App);

// Provide global values
app.provide('categoryColors', categoryColors);

app.use(router);
app.mount('#app');
