export default app => ({
  loadAuth () {
    let token = app.$cookies.get('auth')
    if (token) {
      // Reset auth cookie to extend expiration
      app.$cookies.set('auth', token, {
        maxAge: 60 * 60 * 24 * 365,
        path: '/',
        domain: process.env.COOKIE_DOMAIN,
        secure: process.env.COOKIE_DOMAIN !== 'localhost',
        sameSite: process.env.COOKIE_DOMAIN === 'localhost' ? 'Lax' : 'None'
      })
    }
    app.store.commit('SET_AUTH', token)
    app.$axios.setHeader('Authorization', token)
  },

  setAuth (data) {
    app.$cookies.set('auth', `Bearer ${data.accessToken}`, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
      secure: process.env.COOKIE_DOMAIN !== 'localhost',
      sameSite: process.env.COOKIE_DOMAIN === 'localhost' ? 'Lax' : 'None'
    })
    app.$api.auth.loadAuth()
  },

  logout () {
    app.store.commit('RESET')
    app.$cookies.remove('auth')
    app.$cookies.remove('auth', { domain: process.env.COOKIE_DOMAIN })
    app.$axios.setHeader('Authorization', null)
  }
})
