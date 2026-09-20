import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg0: "#020202",
        bg1: "#050505",
        bg2: "#0A0A0A",
        bg3: "#111111",
        gold: "#C9A876",
        "gold-light": "#E8D4A0",
        emerald: "#3FA57D",
        rust: "#D06B4A",
        ivory: "#F5F5F0",
        "ivory-dim": "#D8DAE0",
        "ivory-muted": "#B7BCC4",
        "ivory-faint": "#9AA0A8",
        "ivory-ghost": "#7B808A",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatSlow2: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(6px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 7s ease-in-out infinite",
        floatSlow2: "floatSlow2 8s ease-in-out infinite",
        spinSlow: "spinSlow 40s linear infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease both",
      },
    },
  },
  plugins: [],
};
export default config;
