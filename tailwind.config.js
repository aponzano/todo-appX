/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // screens: {
      //   xl: "1440px",
      // },
      // backgroundImage: {
      //   "mobile-dark": "url('./src/assets/img/background/mobile-dark.jpg')",
      //   "mobile-light": "url('./src/assets/img/background/mobile-light.jpg')",
      //   "desktop-dark": "url('./src/assets/img/background/desktop-dark.jpg')",
      //   "desktop-light": "url('./src/assets/img/background/desktop-light.jpg')",
      // },

      colors: {
        brightBlue: "#3A7BFD",
        veryLightGray: "#FAFAFA",
        veryDarkDesaturatedBlue: "#25273C",

        lightGrayishBlue: {
          light: "#D2D3DB",
          DEFAULT: "#D2D3DB",
          dark: "#CACDE8",
        },
        darkGrayishBlue: {
          light: "#9394A5",
          DEFAULT: "#9394A5",
          dark: "#777A92",
        },
        VeryDarkGrayishBlue: {
          light: "#484B6A",
          DEFAULT: "#484B6A",
          dark: "#4D5066",
        },

        veryLightGrayishBlue: "#E4E5F1",
        veryDarkBlue: "#161722",
        veryVeryDarkGrayishBlue: "#393A4C",
      },
    },
  },
  plugins: [],
};
