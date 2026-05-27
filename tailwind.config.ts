import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#020617",
        gold: "#fbbf24",
      },
    },
  },
  plugins: [],
};
export default config;