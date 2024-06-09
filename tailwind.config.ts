import type { Config } from "tailwindcss";

const COLORS = {
  "primary-100": "#F39C12",
  "secondary-100": "#1B4881",
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
