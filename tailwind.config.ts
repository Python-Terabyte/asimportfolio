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
        cream: "#F8F7F4",
        "panel-light": "#F0EFEB",
        "panel-mid": "#E8E7E2",
        "panel-dark": "#DFDCD8",
        "border-gray": "#D3D3D3",
        teal: "#006879",
        "teal-dark": "#003149",
        "teal-light": "#AEC8D5",
        ink: "#191A1C",
      },
      fontFamily: {
        jost: ["var(--font-jost)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      boxShadow: {
        teal: "0 0 0 1px #006879",
        "teal-md": "0 4px 20px rgba(0,104,121,0.15)",
        "teal-sm": "0 2px 8px rgba(0,104,121,0.10)",
        "teal-lg": "0 8px 32px rgba(0,104,121,0.18)",
      },
      animation: {
        "pulse-teal": "pulseTeal 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseTeal: {
          "0%, 100%": { boxShadow: "0 2px 8px rgba(0,104,121,0.2)" },
          "50%": { boxShadow: "0 4px 20px rgba(0,104,121,0.4)" },
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
