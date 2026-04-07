"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

const STORAGE_KEY = "portfolio-theme";

function getSystemTheme(): "dark" | "light" {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme) || "system";
    setThemeState(stored);

    const resolve = stored === "system" ? getSystemTheme() : stored;
    setIsDark(resolve === "dark");
    document.documentElement.classList.toggle("dark", resolve === "dark");
    setMounted(true);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (stored === "system") {
        setIsDark(mediaQuery.matches);
        document.documentElement.classList.toggle("dark", mediaQuery.matches);
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  function setTheme(newTheme: Theme) {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
    const resolved = newTheme === "system" ? getSystemTheme() : newTheme;
    setIsDark(resolved === "dark");
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }

  function toggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return { theme, isDark, toggle, toggleFn: setTheme, mounted };
}