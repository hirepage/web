import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7fa1e860 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _5b3286df = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _9d966eac = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _89645ee6 = () => interopDefault(import('../pages/_username.vue' /* webpackChunkName: "pages/_username" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/privacy",
    component: _7fa1e860,
    name: "privacy"
  }, {
    path: "/terms",
    component: _5b3286df,
    name: "terms"
  }, {
    path: "/",
    component: _9d966eac,
    name: "index"
  }, {
    path: "/:username",
    component: _89645ee6,
    name: "username"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
