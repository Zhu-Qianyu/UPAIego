import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#071122",
          900: "#0C1A33",
          800: "#13284D",
          700: "#1E3A8A",
          500: "#2563EB",
          400: "#22D3EE"
        }
      },
      boxShadow: {
        panel: "0 10px 40px rgba(8, 28, 70, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
