require('dotenv').config()
const axios = require('axios')
const head = require('./head')

const modules = [
  'cookie-universal-nuxt',
  '@nuxtjs/dotenv',
  '@nuxtjs/sitemap',
  '@nuxtjs/toast',
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

module.exports = {
  static: true,
  target: 'static',
  ssr: false,
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
  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.WEB_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    exclude: [
      '/forgot',
      '/reset',
      '/password',
      '/admin/**'
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
