// useDarkMode.js
import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize dark mode based on localStorage or system preference
    const darkModeSetting = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const enabledDarkMode =
      darkModeSetting === "dark" || (!darkModeSetting && prefersDark);

    setIsDarkMode(enabledDarkMode);
    document.documentElement.classList.toggle("dark", enabledDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return { isDarkMode, toggleDarkMode };
}
