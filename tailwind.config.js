/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-logo-color': '#0ed184',
        'my-second-color': '#0ed199',
      }
    },
  },
  plugins: [],
}