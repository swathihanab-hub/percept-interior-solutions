import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A18",
        accent: "#C5A059",
        travertine: "#E8E2D8",
        beige: "#F4F0EA",
        container: "#FAF8F5",
        muted: "#6B6862",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      transitionDuration: {
        250: "250ms",
        280: "280ms",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};

export default config;
