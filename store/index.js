import cookie from 'cookie'

export const state = () => ({
  auth: null,
  user: null,
  blocks: []
})

export const mutations = {
  SET_AUTH (state, auth) {
    state.auth = auth
  },
  SET_USER (state, user) {
    state.user = user
  },
  RESET (state) {
    state.auth = null
    state.user = null
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req, app }) {
    // if (req.headers.cookie) {
    //   const token = cookie.parse(req.headers.cookie).auth
    //   commit('SET_AUTH', token)
    //   app.$axios.setHeader('Authorization', token)
    // }
  },
  updatePreview() {
    if (!process.client) {
      return
    }
    document.getElementsByClassName('preview-iframe')[0].contentWindow.location.reload()
  }
}
