/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blackgood': "#222831",
      'white': '#ffffff',
      'bluenew': '#76ABAE',
      'midnight': '#121063',
      'alus': '#31363F',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#76ABAE',
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}