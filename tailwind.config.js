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
      fontFamily: {
        ubuntu: "Ubuntu",
        grotesk: "'Schibsted Grotesk'",
      },
      backgroundImage: {
        excellence: "url(../assets/Arrow.png)",
        dedication: "url(../assets/bro.png)",
        teamwork: "url(../assets/bro1.png)",
        positivity: "url(../assets/sun-2.png)",
        perks: "url(../assets/shape.png)",
        posBlue: "url(../assets/Vector 1601.png)",
        posGreen: "url(../assets/Ellipse 292.png)",
        posYellow: "url(../assets/Ellipse 293.png)",
        posRed: "url(../assets/Vector 160.png)",
        footer: "url(../assets/Background.png)",
      },
    },
  },
  plugins: [],
}
