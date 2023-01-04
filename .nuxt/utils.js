import Vue from 'vue'
import { isSamePath as _isSamePath, joinURL, normalizeURL, withQuery, withoutTrailingSlash } from 'ufo'

// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (process.client) {
  window.onNuxtReadyCbs = []
  window.onNuxtReady = (cb) => {
    window.onNuxtReadyCbs.push(cb)
  }
}

export function createGetCounter (counterObject, defaultKey = '') {
  return function getCounter (id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0
    }
    return counterObject[id]++
  }
}

export function empty () {}

export function globalHandleError (error) {
  if (Vue.config.errorHandler) {
    Vue.config.errorHandler(error)
  }
}

export function interopDefault (promise) {
  return promise.then(m => m.default || m)
}

export function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length
}
export function purifyData(data) {
  if (process.env.NODE_ENV === 'production') {
    return data
  }

  return Object.entries(data).filter(
    ([key, value]) => {
      const valid = !(value instanceof Function) && !(value instanceof Promise)
      if (!valid) {
        console.warn(`${key} is not able to be stringified. This will break in a production environment.`)
      }
      return valid
    }
    ).reduce((obj, [key, value]) => {
      obj[key] = value
      return obj
    }, {})
}
export function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || []
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child)
      continue; // Don't get the children since it will reload the template
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances)
    }
  }
  return instances
}

export function applyAsyncData (Component, asyncData) {
  if (
    // For SSR, we once all this function without second param to just apply asyncData
    // Prevent doing this for each SSR request
    !asyncData && Component.options.__hasNuxtData
  ) {
    return
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () { return {} }
  Component.options._originDataFn = ComponentData

  Component.options.data = function () {
    const data = ComponentData.call(this, this)
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid]
    }
    return { ...data, ...asyncData }
  }

  Component.options.__hasNuxtData = true

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data
  }
}

export function sanitizeComponent (Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component
  }
  if (!Component.options) {
    Component = Vue.extend(Component) // fix issue #6
    Component._Ctor = Component
  } else {
    Component._Ctor = Component
    Component.extendOptions = Component.options
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file
  }
  return Component
}

export function getMatchedComponents (route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map((key) => {
      matches && matches.push(index)
      return m[prop][key]
    })
  }))
}

export function getMatchedComponentsInstances (route, matches = false) {
  return getMatchedComponents(route, matches, 'instances')
}

export function flatMapComponents (route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index))
      } else {
        delete m.components[key]
      }
      return promises
    }, [])
  }))
}

export function resolveRouteComponents (route, fn) {
  return Promise.all(
    flatMapComponents(route, async (Component, instance, match, key) => {
      // If component is a function, resolve it
      if (typeof Component === 'function' && !Component.options) {
        try {
          Component = await Component()
        } catch (error) {
          // Handle webpack chunk loading errors
          // This may be due to a new deployment or a network problem
          if (
            error &&
            error.name === 'ChunkLoadError' &&
            typeof window !== 'undefined' &&
            window.sessionStorage
          ) {
            const timeNow = Date.now()
            const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'))

            // check for previous reload time not to reload infinitely
            if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
              window.sessionStorage.setItem('nuxt-reload', timeNow)
              window.location.reload(true /* skip cache */)
            }
          }

          throw error
        }
      }
      match.components[key] = Component = sanitizeComponent(Component)
      return typeof fn === 'function' ? fn(Component, instance, match, key) : Component
    })
  )
}

export async function getRouteData (route) {
  if (!route) {
    return
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route)
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta, ...(route.matched[index] || {}).meta }
    })
  }
}

export async function setContext (app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: process.static,
      isDev: true,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {"npm_package_dependencies_nuxt_rfg_icon":"0.6.4","npm_package_dependencies_mixpanel_browser":"^2.41.0","npm_package_dependencies__fortawesome_fontawesome_svg_core":"6.1.1","npm_package_dependencies__fortawesome_pro_light_svg_icons":"^6.2.0","npm_package_dependencies_mongoose":"6.0.8","TERM_PROGRAM":"Apple_Terminal","npm_package_dependencies_mongoose_timestamp":"0.6.0","NODE":"/usr/local/Cellar/node/18.10.0/bin/node","npm_config__fortawesome_registry":"https://npm.fontawesome.com/","INIT_CWD":"/Users/dylanwight/Developer/hirepage","npm_package_homepage":"https://chatpass.io/","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","TMPDIR":"/var/folders/6w/bwg_648d42gcf356xv1wjl4r0000gn/T/","npm_package_devDependencies_eslint_config_standard":"14.1.0","npm_package_dependencies__nuxtjs_axios":"5.13.6","npm_package_dependencies__fortawesome_pro_regular_svg_icons":"^6.1.1","npm_package_scripts_lint":"eslint --ext .js,.vue --ignore-path .gitignore . --fix","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"445","npm_package_dependencies_serverless_http":"^2.7.0","npm_package_dependencies_cookie":"^0.5.0","npm_package_scripts_dev":"yarn nuxt","npm_package_dependencies_express_rate_limit":"5.2.5","TERM_SESSION_ID":"ce71a5fb-d8d3-411e-819b-7e02d84682f0","npm_config_fortawesome_registry":"https://npm.fontawesome.com/","npm_package_dependencies_mongoose_autopopulate":"0.16.0","npm_package_dependencies_helmet":"^6.0.1","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_scripts_generate":"nuxt generate","__INTELLIJ_COMMAND_HISTFILE__":"/Users/dylanwight/Library/Caches/JetBrains/WebStorm2021.2/terminal/history/hirepage-history","npm_package_readmeFilename":"README.md","USER":"dylanwight","npm_package_description":"Talk to all of your clients from Slack | ChatPass","npm_package_license":"UNLICENSED","COMMAND_MODE":"unix2003","npm_package_devDependencies_eslint_loader":"3.0.2","npm_package_dependencies__nuxtjs_dotenv":"1.4.1","npm_package_scripts_deploy":"sls deploy","npm_package_devDependencies_eslint_friendly_formatter":"4.0.1","npm_package_dependencies_vuedraggable":"^2.24.3","npm_package_dependencies__nuxtjs_sentry":"5.1.7","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.jeJloiHeIC/Listeners","npm_package_devDependencies_babel_plugin_lodash":"3.3.4","__CF_USER_TEXT_ENCODING":"0x1F5:0x0:0x0","npm_package_devDependencies_eslint":"6.5.1","npm_package_scripts_offline":"sls offline start --skipCacheInvalidation","LOGIN_SHELL":"1","npm_execpath":"/usr/local/Cellar/yarn/1.22.19/libexec/bin/yarn.js","npm_package_dependencies__fortawesome_pro_solid_svg_icons":"^6.1.1","npm_package_dependencies__fortawesome_free_brands_svg_icons":"6.1.1","npm_package_author_name":"Otechie","npm_package_devDependencies_serverless_plugin_warmup":"4.9.0","npm_package_dependencies_bootstrap_vue":"2.22.0","PATH":"/var/folders/6w/bwg_648d42gcf356xv1wjl4r0000gn/T/yarn--1672788556239-0.7365838293918074:/Users/dylanwight/Developer/hirepage/node_modules/.bin:/Users/dylanwight/.config/yarn/link/node_modules/.bin:/usr/local/Cellar/node/18.10.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/18.10.0/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/18.10.0/bin/node_modules/npm/bin/node-gyp-bin:/var/folders/6w/bwg_648d42gcf356xv1wjl4r0000gn/T/yarn--1672788555459-0.47623911369814764:/Users/dylanwight/Developer/hirepage/node_modules/.bin:/Users/dylanwight/.config/yarn/link/node_modules/.bin:/usr/local/Cellar/node/18.10.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/18.10.0/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/18.10.0/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/opt/php@7.2/sbin:/usr/local/opt/php@7.2/bin:/usr/local/opt/php@7.4/sbin:/usr/local/opt/php@7.4/bin:/usr/local/opt/php@7.2/sbin:/usr/local/opt/php@7.2/bin:/usr/local/opt/php@7.4/sbin:/usr/local/opt/php@7.4/bin:/usr/local/opt/php@7.2/sbin:/usr/local/opt/php@7.2/bin:/usr/local/opt/php@8.2/sbin:/usr/local/opt/php@8.2/bin:/usr/local/opt/php@7.2/sbin:/usr/local/opt/php@7.2/bin:/usr/local/opt/php@5.6/sbin:/usr/local/opt/php@5.6/bin:/usr/local/opt/php@7.3/sbin:/usr/local/opt/php@7.3/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/Users/dylanwight/Developer/hirepage/node_modules/.bin:/usr/local/opt/php@7.2/sbin:/usr/local/opt/php@7.2/bin:/usr/local/opt/php@7.4/sbin:/usr/local/opt/php@7.4/bin:/usr/local/opt/php@8.2/sbin:/usr/local/opt/php@8.2/bin:/usr/local/opt/php@5.6/sbin:/usr/local/opt/php@5.6/bin:/usr/local/opt/php@7.3/sbin:/usr/local/opt/php@7.3/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"dev\"],\"original\":[\"dev\"]}","npm_package_dependencies_clipboard":"^2.0.8","npm_package_dependencies__fortawesome_free_solid_svg_icons":"6.1.1","TERMINAL_EMULATOR":"JetBrains-JediTerm","_":"/Users/dylanwight/Developer/hirepage/node_modules/.bin/nuxt","__CFBundleIdentifier":"com.jetbrains.WebStorm","PWD":"/Users/dylanwight/Developer/hirepage","npm_package_devDependencies_eslint_plugin_standard":"4.0.1","npm_package_dependencies__nuxtjs_sitemap":"2.4.0","npm_lifecycle_event":"nuxt","npm_package_devDependencies_serverless_dotenv_plugin":"2.1.1","npm_package_devDependencies_jsdom":"^19.0.0","LANG":"en_US.UTF-8","npm_package_name":"otechie","npm_package_devDependencies_eslint_plugin_import":"2.26.0","npm_package_dependencies_body_parser":"^1.20.1","npm_package_dependencies__nuxtjs_google_analytics":"^2.4.0","npm_package_dependencies__nuxtjs_toast":"3.3.1","npm_package_scripts_start":"nuxt start","npm_package_scripts_build":"nuxt build","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_package_dependencies__fortawesome_vue_fontawesome":"2.0.6","npm_config_bin_links":"true","npm_package_dependencies_mongoose_hidden":"1.9.1","npm_package_engines_node":">=14.0","npm_config_wrap_output":"","npm_package_devDependencies_eslint_plugin_node":"10.0.0","npm_package_devDependencies_eslint_config_prettier":"6.4.0","npm_package_main":"nuxt.config.js","XPC_SERVICE_NAME":"0","npm_package_dependencies_vue_plyr":"^7.0.0","npm_package_dependencies_nuxt_start":"2.15.8","npm_package_dependencies_cookie_universal_nuxt":"^2.1.4","npm_package_version":"1.0.0","npm_package_dependencies__nuxtjs_redirect_module":"^0.3.1","SHLVL":"4","HOME":"/Users/dylanwight","npm_package_devDependencies_eslint_plugin_vue":"5.2.3","npm_package_scripts_test":"ava --verbose","npm_package_dependencies_dotenv":"16.0.1","npm_package_dependencies_cookie_parser":"^1.4.6","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_devDependencies_babel_eslint":"10.1.0","npm_config_version_git_message":"v%s","npm_package_devDependencies_serverless_domain_manager":"3.3.2","npm_package_devDependencies_eslint_plugin_promise":"4.2.1","npm_package_dependencies_validator":"^13.5.2","npm_package_dependencies_morgan":"^1.10.0","npm_package_devDependencies_ava":"2.0.0","LOGNAME":"dylanwight","YARN_WRAP_OUTPUT":"false","npm_package_devDependencies_nock":"13.2.4","PREFIX":"/usr/local","npm_lifecycle_script":"yarn nuxt","npm_package_dependencies_serverless_apigw_binary":"^0.4.4","LC_CTYPE":"en_US.UTF-8","npm_package_devDependencies__sentry_cli":"2.0.4","npm_package_author_email":"hello@otechie.com","npm_package_devDependencies_nuxt":"2.15.8","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.19 npm/? node/v18.10.0 darwin x64","npm_package_dependencies_jsonwebtoken":"^9.0.0","npm_package_dependencies_express":"^4.18.2","npm_package_dependencies__fortawesome_free_regular_svg_icons":"6.1.1","npm_package_copyright":"© 2022 ChatPass","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_scripts_precommit":"yarn lint","npm_node_execpath":"/usr/local/Cellar/node/18.10.0/bin/node","npm_config_version_tag_prefix":"v","NODE_ENV":"development","_applied":"true","LOCAL":"true","DOMAIN":"dev-otechie.com","COOKIE_DOMAIN":"localhost","WEB_URL":"http://localhost:8080","APP_URL":"http://localhost:8081","STRIPE_KEY":"pk_test_JaZ4s97B6LcqaXa5JeQUkD9r","STRIPE_CLIENT_ID":"ca_BAIwVlMFqNM2gGEcgvG6Kd74VCoAS3Y9","GITHUB_ID":"9a4bbb3378e53cff8f58","DISCORD_ID":"523568538548568064","SLACK_ID":"299634128055.372212494657","GA_ID":"UA-115527430-3","GA_ID_APP":"UA-115527430-6","MIXPANNEL_TOKEN":"7ce9b1f84baad293b11578a3afbb6c3c","SENTRY_DSN":"https://8548505528f2482d87d9e7209ac44764@o224452.ingest.sentry.io/1547878","PUSHER_INSTANCE_ID":"fba18bec-0650-4185-a614-bf295003321b","PUSHER_APP_KEY":"79974b3dd2a94f7e5043","GOOGLE_ID":"1005492174773-cfp8golh4gk47d9q9vjsjru7107qebfr.apps.googleusercontent.com","APPLE_ID":"com.dev-otechie.service","MONGODB_URI":"mongodb+srv://hirepage:u9rEWRFXPR5tVaEa@cluster0.widrxvh.mongodb.net/dev?retryWrites=true&w=majority","VUE_ENV":"server","_AXIOS_BASE_URL_":"http://localhost:8080/api","SENTRY_DSN_WEB":""}
    }
    // Only set once

    if (context.req) {
      app.context.req = context.req
    }
    if (context.res) {
      app.context.res = context.res
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return
      }
      app.context._redirected = true
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {}
        path = status
        pathType = typeof path
        status = 302
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        })
      } else {
        path = withQuery(path, query)
        if (process.server) {
          app.context.next({
            path,
            status
          })
        }
        if (process.client) {
          // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
          window.location.replace(path)

          // Throw a redirect error
          throw new Error('ERR_REDIRECT')
        }
      }
    }
    if (process.server) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn)
    }
    if (process.client) {
      app.context.nuxtState = window.__NUXT__
    }
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([
    getRouteData(context.route),
    getRouteData(context.from)
  ])

  if (context.route) {
    app.context.route = currentRouteData
  }

  if (context.from) {
    app.context.from = fromRouteData
  }

  app.context.next = context.next
  app.context._redirected = false
  app.context._errored = false
  app.context.isHMR = Boolean(context.isHMR)
  app.context.params = app.context.route.params || {}
  app.context.query = app.context.route.query || {}
}

export function middlewareSeries (promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve()
  }
  return promisify(promises[0], appContext)
    .then(() => {
      return middlewareSeries(promises.slice(1), appContext)
    })
}

export function promisify (fn, context) {
  let promise
  if (fn.length === 2) {
      console.warn('Callback-based asyncData, fetch or middleware calls are deprecated. ' +
        'Please switch to promises or async/await syntax')

    // fn(context, callback)
    promise = new Promise((resolve) => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err)
        }
        data = data || {}
        resolve(data)
      })
    })
  } else {
    promise = fn(context)
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise
  }
  return Promise.resolve(promise)
}

// Imported from vue-router
export function getLocation (base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '')
  }

  base = decodeURI(base).slice(0, -1) // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname)

  if (base && path.startsWith(base)) {
    path = path.slice(base.length)
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash

  return normalizeURL(fullPath)
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
export function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

export function getQueryDiff (toQuery, fromQuery) {
  const diff = {}
  const queries = { ...toQuery, ...fromQuery }
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true
    }
  }
  return diff
}

export function normalizeError (err) {
  let message
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2)
    } catch (e) {
      message = `[${err.constructor.name}]`
    }
  } else {
    message = err.message || err
  }
  return {
    ...err,
    message,
    statusCode: (err.statusCode || err.status || (err.response && err.response.status) || 500)
  }
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  const tokens = []
  let key = 0
  let index = 0
  let path = ''
  const defaultDelimiter = (options && options.delimiter) || '/'
  let res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0]
    const escaped = res[1]
    const offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    const next = str[index]
    const prefix = res[2]
    const name = res[3]
    const capture = res[4]
    const group = res[5]
    const modifier = res[6]
    const asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    const partial = prefix != null && next != null && next !== prefix
    const repeat = modifier === '+' || modifier === '*'
    const optional = modifier === '?' || modifier === '*'
    const delimiter = res[2] || defaultDelimiter
    const pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g
  return encodeURI(str).replace(re, (c) => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURIComponentPretty(str, true)
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    let path = ''
    const data = obj || {}
    const options = opts || {}
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      const value = data[token.name || 'pathMatch']
      let segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

export function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = []
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn)
  }
}

export const urlJoin = joinURL

export const stripTrailingSlash = withoutTrailingSlash

export const isSamePath = _isSamePath

export function setScrollRestoration (newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch(e) {}
}
