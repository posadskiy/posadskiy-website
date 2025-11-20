import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        accentSoft: "var(--color-accent-soft)",
        ink: "var(--color-ink)",
        "ink-muted": "var(--color-ink-muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 20px 50px -20px rgba(0, 0, 0, 0.55)",
      },
      borderRadius: {
        xl: "1.5rem",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".glass-panel": {
          backdropFilter: "blur(18px)",
          backgroundColor: "rgba(17, 17, 17, 0.65)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        },
      });
    }),
  ],
};

export default config;

