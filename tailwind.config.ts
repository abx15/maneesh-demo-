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
        "brand-dark": "#080808",
        "brand-card": "#111111",
        "brand-border": "#2a2a2a",
        "brand-silver": "#a0a0a0",
        "brand-white": "#f0f0f0",
        "brand-accent": "#c9a84c",
      },
    },
  },
  plugins: [],
};
export default config;
