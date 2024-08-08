/** @type {import('tailwindcss').Config} */

import tailwindScrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "bg-primary": "#ffffff",
        "bg-secondary": "#156fef",
        "text-color": "#181818",
        "input-field": "#e8eaee",
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};
