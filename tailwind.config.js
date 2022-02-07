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
      height: {
        720: '45rem',
      },
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
