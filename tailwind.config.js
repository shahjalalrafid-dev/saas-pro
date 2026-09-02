/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#EEF4F9',
        'secondary' : '#2C83BB',
        'offwhite' : '#FFFFFF'
      },
      fontFamily: {
        'inter' : ["Inter", "sans-serif"],
        'rale' : ["Raleway", "sans-serif"],
        'roboto' : ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}
