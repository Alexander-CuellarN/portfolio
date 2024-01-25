/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "500px",
      md: "767px",
      lg: "960px",
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        "open-sans": ["'Open Sans'", "sans-serif"],
      },
      backgroundImage: {
        'wavesSvg': "url('/images/waves/waves.svg')",
        "wave2":  "url('/images/waves/wave2.svg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
