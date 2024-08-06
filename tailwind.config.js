/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cerise: '#BF304A',
        cerisenoire: '#8c0f26',
        framboise: '#D96C89',
        bubblegum: '#F2C2DC',
        minuit: '#013766',
      }
    },
  },
  plugins: [],
}