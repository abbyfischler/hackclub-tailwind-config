module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      /* is it spacing or space ??  https://tailwindcss.com/docs/space*/ 
      spacing: {
        '0px': '0px',
        '4px': '4px',
        '8x': '8px',
        '16x': '16px',
        '32x': '32px',
        '64x': '64px',

      },
      /*screens instead of breakpoints: https://tailwindcss.com/docs/screens*/
      screens: {
        'sm': '32em',
        // => @media (min-width: 640px) { ... }
  
        'md': '48em',
        // => @media (min-width: 768px) { ... }
  
        'lg': '64em',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '96em',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '128em',
        // => @media (min-width: 1536px) { ... }
      },

      /*this is wrong how do i make it like them.hackclub.com?*/
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
    },
  },
  plugins: [],
}
