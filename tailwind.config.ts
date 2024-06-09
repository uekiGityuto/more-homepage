import type { Config } from "tailwindcss";

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
      colors: {
        background: "#000",
        text: "#fff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
