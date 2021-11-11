module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/image.png')",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      backgroundColor: {
        primary: "#c3138e",
        secondary: "#990C6E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
