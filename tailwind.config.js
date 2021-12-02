module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    /**
     * if you decided to add more tsx files outsides this 2 folders,
     * don't forget to list it here,
     * or else those styles won't be produced in the production
     */
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true, // https://tailwindcss.com/docs/container#centering-by-default
    },

    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
