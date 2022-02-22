module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/simple-hero.png')",
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#c3138e',
        secondary: '#990C6E',
        green: '#088B99',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
