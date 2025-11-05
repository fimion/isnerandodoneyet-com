export function useLocalStorage() {
  function getItem(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return null;
    }
  }

  function setItem(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Error setting localStorage item:', error);
    }
  }

  function removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing localStorage item:', error);
    }
  }

  return {
    getItem,
    setItem,
    removeItem
  };
}
