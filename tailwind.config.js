module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Ubuntu"', "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--color-background)",
        titles: "var(--color-titles)",
        subtitles: "var(--color-subtitles)",
        primary: "var(--color-primary)",
        primaryHover: "var(--color-primary-hover)",
      },
      backgroundImage: {
        main: "url('/src/assets/backgrounds/main-background.jpg')",
        homePage:
          "url('/images/backgrounds/backgrounds-healthpros-mobile.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [   
    require("tailwindcss"),
    require("autoprefixer"),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};