/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "custom-header": "calc(100vh - 88px)",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "800px",
        1000: "1000px",
      },
      zIndex: {
        1: 1,
        5: 5,
      },
      minWidth: {
        200: "200px",
      },
      maxWidth: {
        100: "100px",
        200: "200px",
        "container-1": "1120px",
        "container-2": "992px",
      },
      colors: {
        "filter-1": "#0096C760",
        "filter-2": "#03055e60",
        "primary-1": "#0096C7",
        "primary-2": "#0077B6",
        "light-1": "#FFFFFF",
        "light-2": "#ADE8F4",
        "dark-1": "#313335",
        "light-fade": "#FFFFFF30",
        "dark-fade": "#313335b5",
      },
    },
  },
  plugins: [],
};
