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
        cream: "#F5F0E3",
        "panel-light": "#EFE7D2",
        "panel-mid": "#E7DCBE",
        "panel-dark": "#DED0A8",
        "border-gray": "#D8CBA8",
        amber: "#EFA23B",
        rust: "#E2613D",
        forest: "#23301E",
        sage: "#C9D4AC",
        ink: "#1B1B15",
      },
      fontFamily: {
        jost: ["var(--font-jost)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      boxShadow: {
        amber: "0 0 0 1px #EFA23B",
        "amber-md": "0 4px 20px rgba(239,162,59,0.20)",
        "amber-sm": "0 2px 8px rgba(239,162,59,0.14)",
        "amber-lg": "0 8px 32px rgba(239,162,59,0.24)",
      },
      animation: {
        "pulse-amber": "pulseAmber 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseAmber: {
          "0%, 100%": { boxShadow: "0 2px 8px rgba(239,162,59,0.25)" },
          "50%": { boxShadow: "0 4px 20px rgba(239,162,59,0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
