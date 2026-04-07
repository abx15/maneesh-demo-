import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        gold: "#c9a84c",
        "gold-light": "#e0bb6a",
        dark: "#080808",
        card: "#111111",
        border2: "#2a2a2a",
        silver: "#a0a0a0",
      },
      backgroundImage: {
        "gold-radial": "radial-gradient(ellipse at center, rgba(201,168,76,0.15) 0%, transparent 70%)",
        "grid-dark": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: { "grid": "40px 40px" },
    },
  },
  plugins: [],
};
export default config;
