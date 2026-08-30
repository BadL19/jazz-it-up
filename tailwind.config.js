/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f6f3",
          100: "#e0e9e2",
          600: "#3c5a48",
          700: "#2f4a3a",
          800: "#28402f",
          900: "#1f3225",
        },
        ink: "#1a1a18",
        paper: "#fbfaf8",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
