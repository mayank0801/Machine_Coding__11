import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const localstoredValue = localStorage.getItem(key);
  const initial = localstoredValue
    ? JSON.parse(localstoredValue)
    : initialValue;
  const [value, setValue] = useState(initial);
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}
