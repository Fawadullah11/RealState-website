/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#DCAC36",
        secondary: {
          light: "#fff",
          DEFAULT: "#0D0D0D",
          dark: "#0D0D0D"
        },
        gray: "rgba(255, 255, 255, 0.75)",
        lightGray: {
          light: "#f5f5f5",
          DEFAULT: "#161616",
          dark: "#161616"
        },
      },
    },
  },
  plugins: [],
};
