/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#8807F7",
        "primary-200": "#21003D",
        "primary-300": "#3D0072",
        "secondary-100": "#E8356D",
        "pos-blue": "#B2D6FF",
        "pos-green": "#B2FFDA",
        "pos-yellow": "#FFF7B2",
        "pos-red": "#FFCCDE",
      },
    },
  },
  plugins: [],
}
