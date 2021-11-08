module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#edeeef',
        },
        lightgrey: {
          DEFAULT: '#f4f4f5',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
