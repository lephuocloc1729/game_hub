/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cs-clr": "rgba(0, 255, 0, 0.2)",
        "dark-blue": "rgb(15, 20, 27)",
      },
    },
  },
  plugins: [],
};
