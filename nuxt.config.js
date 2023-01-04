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
  '@nuxtjs/google-analytics',
  '@nuxtjs/redirect-module'
]

if (process.env.LOCAL !== 'true') {
  modules.push('@nuxtjs/sentry')
}

const plugins = [
  { src: '~/plugins/fontAwesome' },
  { src: '~/plugins/api' }
]

if (process.env.WEB_URL === 'https://chatpass.io') {
  plugins.push({ src: '~/plugins/inspectlet', mode: 'client' })
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
  googleAnalytics: {
    id: process.env.GA_ID
  },
  sentry: {
    dsn: process.env.SENTRY_DSN_WEB,
    publishRelease: false,
    config: {
      environment: process.env.API_URL === 'https://api.chatpass.io' ? 'production' : 'development',
      release: process.env.CIRCLE_SHA1
    },
    clientIntegrations: {
      TryCatch: { eventTarget: false }
    }
  },
  axios: {
    progress: false,
    baseURL: `${process.env.WEB_URL}/api`
  },
  toast: {
    position: 'top-center',
    duration: 3000,
    theme: 'toasted-primary',
    singleton: false
  },
  'rfg-icon': {
    static: true,
    staticPath: '/_favicons/',
    masterPicture: 'https://chatpass.io/ChatPassRound.png',
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
  // serverMiddleware: [
  //   { path: 'api', handler: '~/serverMiddleware/api' }
  // ],
  dev: false,
  build: {
    analyze: false,
    cssSourceMap: false,
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
