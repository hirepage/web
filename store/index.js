import cookie from 'cookie'

export const state = () => ({
  auth: null,
  user: null,
  subdomain: null
})

export const mutations = {
  SET_AUTH (state, auth) {
    state.auth = auth
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_SUBDOMAIN (state, subdomain) {
    state.subdomain = subdomain
  },
  RESET (state) {
    state.auth = null
    state.user = null
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    console.log('nuxtServerInit')
    const host = req.headers.host
    const subdomain = host ? host.split('.')[0] : null
    console.log('== middleware/subdomain.js', subdomain)
    commit('SET_SUBDOMAIN', subdomain)
  },
  updatePreview () {
    if (!process.client) {
      returnr
    }
    document.getElementsByClassName('preview-iframe')[0].contentWindow.location.reload()
  }
}
