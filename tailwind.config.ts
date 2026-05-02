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
        orange: {
          DEFAULT: "#F4511E",
          500: "#F4511E",
          600: "#D9421A",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          100: "#1A1A1A",
        },
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;