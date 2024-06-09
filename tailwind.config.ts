import type { Config } from "tailwindcss";

const COLORS = {
  "primary-100": "#F39C12",
  "secondary-100": "#1B4881",
};

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-noto-sans-jp)"],
    },
    extend: {
      colors: COLORS,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
