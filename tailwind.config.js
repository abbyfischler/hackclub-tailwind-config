module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "phantom-sans": "Phantom Sans, sans-serif",
      },
      colors: {
        red: "#ec3750",
        darker: "#121217",
        dark: "#17171d",
        darkless: "#252429",
        black: "#1f2d3d",
        steel: "#273444",
        slate: "#3c4858",
        muted: "#8492a6",
        smoke: "#e0e6ed",
        snow: "#f9fafc",
        white: "#ffffff",
        red: "#ec3750",
        orange: "#ff8c37",
        yellow: "#f1c40f",
        green: "#33d6a6",
        cyan: "#5bc0de",
        blue: "#338eda",
        purple: "#a633d6",
        twitter: "#1da1f2",
        facebook: "#3b5998",
        instagram: "#e1306c",
        text: "#1f2d3d",
        background: "#ffffff",
        elevated: "#ffffff",
        sheet: "#f9fafc",
        sunken: "#e0e6ed",
        border: "#e0e6ed",
        placeholder: "#8492a6",
        secondary: "#3c4858",
        primary: "#ec3750",
        accent: "#338eda",
      },
      /* is it spacing or space ??  https://tailwindcss.com/docs/space*/
      spacing: {
        "0": "0px",
        "4": "4px",
        "8": "8px",
        "16": "16px",
        "32": "32px",
        "64": "64px",
      },
      /*screens instead of breakpoints: https://tailwindcss.com/docs/screens*/
      screens: {
        sm: "32em",
        // => @media (min-width: 640px) { ... }

        md: "48em",
        // => @media (min-width: 768px) { ... }

        lg: "64em",
        // => @media (min-width: 1024px) { ... }

        xl: "96em",
        // => @media (min-width: 1280px) { ... }

        "2xl": "128em",
        // => @media (min-width: 1536px) { ... }
      },

      /*this is wrong how do i make it like them.hackclub.com?*/
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
