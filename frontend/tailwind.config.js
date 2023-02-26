/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "mp-violet": "#623eba",
      "mp-red": "red",
      "mp-black": "#0F0F0F",
      "mp-black1":"#000006",
      "mp-light-black": "#1c1f22",
      "mp-gray": "#d6cced",
      "mp-white": "#fff",
      "mp-green": "#1fdf64",
      "mp-gold": "#ffef0f",
      "mp-ramargreen": "#65ffe9",
      "mp-very-light-black":"#202322"
    },
    extend: {
      boxShadow: {
        "5xl": " inset 0px 0px 3000px 2000px rgba(255,255,255,1)",
        "6xl": " 0px 0px 3000px 2000px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        tamil:["Noto Sans Tamil","sans-serif"],
        poppins:["Poppins",'sans-serif']
      },
    },
  },
  plugins: [],
};
