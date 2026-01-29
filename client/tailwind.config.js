/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ivc: {
          bg: "#ffffff",
          card: "#f3f4f6", // gray-100
          text: "#1f2937", // gray-800
          primary: "#14B8A6", // Teal
          secondary: "#2563eb", // Blue
          accent: "#0891b2", // Cyan-600
          // Dark theme colors
          "dark-bg": "#000000",
          "dark-text": "#F5F5F5",
          "purple": "#8b5cf6", // Violet-500
          "cyan": "#06b6d4", // Cyan-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'], // Added premium display font
      }
    },
  },
  plugins: [],
}
