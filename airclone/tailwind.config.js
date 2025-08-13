/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF385C", // Airbnb-ish primary
          dark: "#E11E48",
          light: "#FF738C"
        }
      },
      boxShadow: {
        soft: "0 2px 16px rgba(0,0,0,0.08)",
        card: "0 8px 24px rgba(0,0,0,0.12)"
      },
      maxWidth: {
        "wrap": "1200px"
      }
    }
  },
  plugins: []
}
