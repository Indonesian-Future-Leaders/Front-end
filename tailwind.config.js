/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
      },
      zIndex: {
        1: 1,
        10: 10,
        20: 20,
        30: 30,
      },
      maxWidth: {
        1124: "1124px",
      },
      colors: {
        "filter-1": "#0096C750",
        "filter-2": "#03055e50",
        "primary-1": "#0096C7",
        "primary-2": "#0077B6",
        "light-1": "#FFFFFF",
        "light-2": "#ADE8F4",
        "dark-1": "#313335",
        "light-fade": "#FFFFFF30",
        "dark-fade-1": "#313335b5",
        "dark-fade-2": "#31333570",
      },
    },
  },
  plugins: [],
};
