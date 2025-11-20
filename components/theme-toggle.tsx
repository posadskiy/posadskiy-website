"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-full border border-muted/60 bg-surface/70 p-2 text-ink-muted transition hover:border-accent hover:text-accent"
      >
        <Moon className="h-4 w-4" />
      </button>
    );
  }

  const isDark = theme === "dark" || theme === undefined;

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "rounded-full border border-muted bg-surface/90 p-2 transition",
        "hover:border-accent hover:text-accent text-ink-muted"
      )}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

