/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'trade-winds': ['"Trade Winds"', 'cursive'],
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
