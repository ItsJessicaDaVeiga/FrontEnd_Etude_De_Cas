/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        minuit: '#013766',
        lavande: '#636AF2',
        lightlavande: '#8D92F2',
        darklavende: '#3D46F2',
        dark: '#0D0D0D',
        graay: '#D5D7F2',
        golden: '#F2AE30'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}