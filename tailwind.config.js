/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#065626",
        secondary: "#0A0F0B",
      },
      fontFamily: {
        primary: ["Primary", "serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
