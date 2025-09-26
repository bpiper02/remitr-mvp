/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'DM Serif Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        brandGreen: "#1B5E20",
        brandOrange: "#F57C00",
      },
    },
  },
  plugins: [],
};

