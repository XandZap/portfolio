"use client";

import { useTheme } from "@/hooks/useTheme";
import { BsMoon, BsSun, BsCircleHalf } from "react-icons/bs";

function ThemeToggle() {
  const { isDark, toggle, theme, mounted } = useTheme();

  if (!mounted) {
    return <div className="w-5 h-5 rounded-full bg-zinc-600/30 animate-pulse" />;
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-secondary-foreground transition-colors duration-200"
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      {theme === "system" ? (
        <>
          <BsCircleHalf className="text-base" />
          <span className="max-md:hidden">Sistema</span>
        </>
      ) : isDark ? (
        <>
          <BsMoon className="text-base" />
          <span className="max-md:hidden">Escuro</span>
        </>
      ) : (
        <>
          <BsSun className="text-base" />
          <span className="max-md:hidden">Claro</span>
        </>
      )}
    </button>
  );
}

export default ThemeToggle;