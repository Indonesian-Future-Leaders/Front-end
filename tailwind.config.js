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
        "primary-1": "#023E8A",
        "primary-2": "#0077B6",
        "primary-3": "#0096C7",
        "primary-4": "#00B4D8",
        "light-1": "#FFFFFF",
        "light-2": "#F1EFEF",
        "dark-1": "#121417",
      },
    },
  },
  plugins: [],
};
