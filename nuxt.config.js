export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jordan’s Top Contributors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'See Jordan’s top Open Source contributors and find out where you rank among your fellow Jordanian developers, are you in the top 10?',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  server: {
    host: process.env.HOST, // default: localhost
    port: process.env.PORT, // default: 3000
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~layouts/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-apexchart.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@josango/nuxt-build-banner',
    [
      'nuxt-matomo',
      { matomoUrl: '//track.josa.ngo/', siteId: process.env.MATOMO_SITE_ID },
    ],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    'nuxt-healthcheck',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    '/v1': { target: process.env.CONTRIBUTIONS_API_URL },
  },

  publicRuntimeConfig: {
    CONTRIBUTIONS_API_URL: process.env.CONTRIBUTIONS_API_URL,
    siteID: process.env.MATOMO_SITE_ID,
    buildCommitSHA: process.env.DRONE_COMMIT_SHA,
    DRONE_COMMIT_SHA: process.env.DRONE_COMMIT_SHA,
    DRONE_COMMIT_LINK: process.env.DRONE_COMMIT_LINK,
    DRONE_BUILD_NUMBER: process.env.DRONE_BUILD_NUMBER,
    DRONE_BUILD_LINK: process.env.DRONE_BUILD_LINK,
    DRONE_REPO_LINK: process.env.DRONE_REPO_LINK,
    DRONE_BUILD_FINISHED: process.env.DRONE_BUILD_FINISHED,
    TARGET_ENV: process.env.TARGET_ENV
  },

  healthcheck: {
    path: '/healthcheck',
    contentType: 'application/json',
    healthy: () => {
      return JSON.stringify({ result: 'yeeeeeeeeeeees' })
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
