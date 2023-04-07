export const getLocalStorage = <T>(key: string, defaultValue: T | null = null): T | null =>  {
  const store = localStorage.getItem(key);

  if (typeof store === 'string') {
    try {
      return JSON.parse(store) as T | null;
    } catch (e) {
      return null;
    }
  }

  return defaultValue;
}