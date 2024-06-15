import type { Config } from "tailwindcss";

const COLORS = {
  "link-100": "#0277BD",
  "primary-100": "#F39C12",
  "primary-50": "#98C3E3",
  "primary-10": "#FBFCFE",
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
