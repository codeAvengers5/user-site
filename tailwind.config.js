/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  theme: {
    screens: {
      sm: "525px", // @media (min-width: 480px)
      md: "991px", // @media (min-width: 768px)
      lg: "1024px", //  @media (min-width: 1024px)
      xl: "1280px", //  @media (min-width: 1280px)
      "2xl": "1440px", // @media (min-width: 1536px)
      mq1325: {
        raw: "screen and (max-width: 1325px)"
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)"
      },
      mq800: {
        raw: "screen and (max-width: 800px)"
      },
      mq450: {
        raw: "screen and (max-width: 450px)"
      }
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      meke: {
        100: "#F3797E",
        200: "#ED3405",
        300: "#EFF3FF",
        350: "#F5F8FA",
        400: "#DDE3FF",
        450: "#CBD4DE",
        500: "#CBE4FF40",
        550: "#85CBF8",
        600: "#17A1FA",
        700: "#2B53CF",
        800: "#7091EE",
        900: "#4456A4",
        950: "#00FF38"
      },
      bg_primary: "#F5F8FA",
      bg_secondary: "#CBD4DE",
      bg_tertiary: "#EFF3FF",
      bg_additional: "#CBE4FF40",
      tx_primary: "#17A1FA",
      tx_secondary: "#000000",
      tx_tertiary: "#FFFFFF",
      tx_addtional: "#CBD4DE",
      tx_link: "#1270FD",
      br_primary: "#4456A4",
      br_secondary: "#DB0000",
      bt_primary: "#4456A4",
      bt_secondary: "#85CBF8",
      bt_tertiary: "#FF0000",
      bt_additional: "#00FF38",
      white: "#fff",
      darkslategray: "#2d3142",
      snow: "#fff8f8",
      orangered: {
        100: "#ed3405",
        200: "rgba(237, 52, 5, 0.35)"
      },
      tomato: "#ff592b",
      aliceblue: "#eff4f9",
      crimson: {
        100: "#ff425c",
        200: "#e71d36"
      },
      red: {
        100: "#ff2626",
        200: "#ff0000",
        300: "rgba(255, 38, 38, 0.09)"
      }
    },
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Nunito", "sans-serfi"],
        inter: "Inter",
        roboto: "Roboto"
      },
      fontSize: {
        heading_1: "48px",
        heading_2: "35px",
        medium: "20px",
        base: "16px",
        small: "14px",
        xl: "20px",
        "13xl": "32px",
        "7xl": "26px",
        lgi: "19px",
        "29xl": "48px",
        "19xl": "38px",
        "10xl": "29px",
        "17xl": "36px",
        "3xl": "22px",
        "5xl": "24px",
        "41xl": "60px",
        inherit: "inherit"
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700
      },
      spacing: {
        base: "1rem",
        small: "0.5rem",
        large: "2rem"
      },
      borderRadius: {
        small: "0.25rem",
        medium: "0.5rem",
        large: "0.8rem",
        "3xs": "10px",
        "8xs": "5px"
      },
      transitionDuration: {
        short: "0.15s ease",
        medium: "0.3s ease",
        long: "0.45s ease",
        timing_function: "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      blur: {
        150: "150px"
      }
    }
  },
  plugins: []
};
