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
    const host = req.headers.host
    let subdomain
    if (!host || host === 'hire.page' || host === 'dev.hire.page') {
      subdomain = null
    } else if (host.includes('hire.page')) {
      subdomain = host.split('.')[0]
    } else {
      subdomain = host
    }
    console.log('===== host', host, subdomain)
    commit('SET_SUBDOMAIN', subdomain)
  },
  updatePreview () {
    if (!process.client) {
      return
    }
    document.getElementsByClassName('preview-iframe')[0].contentWindow.location.reload()
  }
}
