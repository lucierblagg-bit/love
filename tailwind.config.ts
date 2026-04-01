import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#FDF6F0", dark: "#F5EDE3" },
        card: "#FFFAF5",
        rose: { light: "#F2D7D5", DEFAULT: "#D4A0A0", dark: "#B07070" },
        lavender: { light: "#E8D5F0", DEFAULT: "#C6A0BA", dark: "#9B70B0" },
        gold: { light: "#F0E6D0", DEFAULT: "#C4A77D", dark: "#A08050" },
        warm: { DEFAULT: "#5C4033", light: "#8B7355", lighter: "#B8A090" },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', "serif"],
        sans: ['"Noto Sans SC"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
