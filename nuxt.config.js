require('dotenv').config()
const head = require('./head')

const modules = [
  '@nuxtjs/dotenv',
  '@nuxtjs/sitemap',
  'bootstrap-vue/nuxt'
]

const plugins = [
  { src: '~/plugins/fontAwesome' },
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
    hostname: 'https://www.coolwallpapers.app',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false
  },
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
