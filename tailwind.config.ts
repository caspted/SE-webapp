import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#D0CFF7",
          300: "#7370E7",
          500: "#1510D7",
          700: "#0D0A81",
          900: "#080656",
        },
        secondary: {
          100: "#FFEBCC",
          300: "#FEC267",
          500: "#FE9901",
          700: "#985C01",
          900: "#663D00",
        },
        neutral: {
          100: "#ECECEC",
          300: "#C5C5C5",
          500: "#9E9E9E",
          700: "#5F5F5F",
          900: "#3F3F3F",
        },
        shades: {
          light: "#FFFFFF",
          dark: "#333333",
        },
        semantics: {
          success: "#28A745",
          warning: "#FFE207",
          error: "#DC3545",
        },
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
export default config;
