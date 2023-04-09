/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      lg: {
        max: "1920px",
      },
      mid: {
        max: "1320px",
      },
      laptop: {
        max: "1024px",
      },
      tablet: {
        max: "834px",
      },
      mb: {
        max: "639px",
      },
    },
    extend: {},
  },
  plugins: [],
};
