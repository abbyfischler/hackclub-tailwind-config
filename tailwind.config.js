module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading:
          '"Phantom Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        body: '"Phantom Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        monospace: '"SF Mono", "Roboto Mono", Menlo, Consolas, monospace',
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
        0: "0px",
        4: "4px",
        8: "8px",
        16: "16px",
        32: "32px",
        64: "64px",
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
        '0': '12px',
      '1': '16px',
      '2': '20px',
      '3': '24px',
      '4': '32px',
      '5': '48px',
      '6': '64px',
      '7': '96px',
      '8': '128px',
      '9': '160px',
      '10': '192px',
 
      },
      lineHeight: {
        limit: 0.875,
        title: 1,
        heading: 1.125,
        subheading: 1.25,
        caption: 1.375,
        body: 1.5,
      },
      fontWeight: {
        body: 400,
        bold: 700,
        heading: 700,
      },
      letterSpacing: {
        title: "-0.009em",
        headline: "0.009em",
      },
      sizes: {
        widePlus: 2048,
        wide: 1536,
        layoutPlus: 1200,
        layout: 1024,
        copyUltra: 980,
        copyPlus: 768,
        copy: 680,
        narrowPlus: 600,
        narrow: 512,
      },
      borderRadius: {
        small: 4,
        default: 8,
        extra: 12,
        ultra: 16,
        circle: 99999,
      },
      dropShadow: {
        text: "0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)",
        small:
          "0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)",
        card: "0 4px 8px rgba(0, 0, 0, 0.125)",
        elevated:
          "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
