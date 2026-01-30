import { useState, useEffect } from "react";

export function useLocalStorageState(initialState: unknown, key: string) {
  const [value, setValue] = useState(function () {
    if (typeof window === "undefined") {
      return initialState;
    }
    
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialState;
    }
  });

  useEffect(
    function () {
      if (typeof window === "undefined") {
        return;
      }
      
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [value, key],
  );

  return [value, setValue];
}
