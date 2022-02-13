module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {yellow: '#ffbd59', primary: '#990f5b'},

      backgroundImage: {
        'hero-pattern-home': "url('/home-page-hero.png')",
        'hero-pattern-book': "url('/banner-livro.png')",
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
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
