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
      sans: ['"Futura"', "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--color-background)",
        titles: "var(--color-titles)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        primaryhover: "var(--color-primary-hover)",
        error: "var(--color-error)",
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
    themes: [],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};