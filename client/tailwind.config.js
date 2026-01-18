/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivc: {
          bg: "#0a0a0f",
          card: "rgba(255, 255, 255, 0.05)",
          primary: "#8b5cf6", // Violet
          secondary: "#3b82f6", // Blue
          accent: "#06b6d4", // Cyan
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

