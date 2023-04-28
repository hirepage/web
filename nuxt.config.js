require('dotenv').config()
const favicon = require('./faviconDescription')
const head = require('./head')

const modules = [
  'cookie-universal-nuxt',
  '@nuxtjs/dotenv',
  '@nuxtjs/sitemap',
  '@nuxtjs/toast',
  'nuxt-rfg-icon',
  '@nuxtjs/axios',
  'bootstrap-vue/nuxt',
  'vue2-editor/nuxt'
]

if (process.env.LOCAL !== 'true') {
  modules.push('@nuxtjs/sentry')
}

const plugins = [
  { src: '~/plugins/fontAwesome' },
  { src: '~/plugins/api' },
  { src: '~/plugins/gtag' }
]

if (process.env.WEB_URL === 'https://hire.page') {
  // plugins.push({ src: '~/plugins/inspectlet', mode: 'client' })
}

module.exports = {
  ssr: true,
  head: head(),
  loading: {
    color: '#549DFF'
  },
  env: process.env,
  plugins: plugins,
  modules: modules,
  css: [
    '@/assets/main.css'
  ],
  sentry: {
    dsn: process.env.SENTRY_DSN_WEB,
    publishRelease: false,
    config: {
      environment: process.env.API_URL === 'https://api.hire.page' ? 'production' : 'development',
      release: process.env.CIRCLE_SHA1
    }
    // clientIntegrations: {
    //   TryCatch: { eventTarget: false }
    // }
  },
  axios: {
    progress: false,
    baseURL: process.env.API_URL
  },
  toast: {
    position: 'top-right',
    duration: 2000,
    theme: 'toasted-primary',
    singleton: false
  },
  'rfg-icon': {
    static: true,
    staticPath: '/_favicons/',
    masterPicture: 'https://hire.page/favicon.png',
    rfg: favicon
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.WEB_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    exclude: [
      '/setup',
      '/reset',
      '/password',
      '/join',
      '/unsubscribe',
      '/redirect/**',
      '/connect/**'
    ]
  },
  dev: false,
  build: {
    analyze: false,
    cssSourceMap: false,
    publicPath: process.env.DOMAIN === 'localhost' || process.env.NODE_ENV === 'test' ? undefined : `https://cdn.otechie.com/web/${process.env.STAGE}/_nuxt/`,
    extend (config, ctx) {
      if (process.env.NODE_ENV === 'local' && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  server: {
    port: process.env.PORT || 8080
  }
}
