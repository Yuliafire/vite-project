/** @type {{plugins: *[], purge: string[], theme: {extend: {}}, darkMode: string, variants: {extend: {}}, content: string[]}} */
let newLocal;
newLocal = module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  purge: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],

  darkMode: 'media',

  theme: {
    extend: {
      fontFamily: {
        'custom': ['Custom Font', 'sans-serif']
      }
    }
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

