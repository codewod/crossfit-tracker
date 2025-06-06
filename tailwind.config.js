/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        bg: "background-color",
      },
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
