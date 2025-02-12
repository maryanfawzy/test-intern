import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roobert: ["Roobert TRIAL", "sans-serif"],
      },
      colors: {
        primary: "#FCFCFC",
      },
    },
  },
  plugins: [],
};

export default config;