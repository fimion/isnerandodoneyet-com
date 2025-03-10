import { ref, onMounted, watch } from 'vue';
import { useLocalStorage } from './useLocalStorage';

export function useTheme() {
  const { getItem, setItem } = useLocalStorage();
  const isDarkMode = ref(false);

  // Initialize theme based on local storage or system preference
  onMounted(() => {
    const savedTheme = getItem('theme');
    
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark';
    } else {
      // Check system preference
      isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Apply theme to document
    applyTheme();
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!getItem('theme')) {
        isDarkMode.value = e.matches;
        applyTheme();
      }
    });
  });

  // Watch for theme changes and update local storage
  watch(isDarkMode, () => {
    applyTheme();
    setItem('theme', isDarkMode.value ? 'dark' : 'light');
  });

  // Apply theme to document
  function applyTheme() {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Toggle theme
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
  }

  return {
    isDarkMode,
    toggleDarkMode
  };
}
