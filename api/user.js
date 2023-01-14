export default app => ({
  myUser () {
    return app.$axios.$get('/user').then(user => {
      app.store.commit('SET_USER', user)
      return user
    }).catch(console.error)
  },
  getUser (username) {
    return app.$axios.$get(`/user/${username}`)
  },
  checkUsername (username) {
    return app.$axios.$get(`/user/username/${username}`)
  },
  register (data) {
    return app.$axios.$post('/user/register', data).then(auth => {
      app.$api.auth.setAuth(auth)
    })
  },
  login (data) {
    return app.$axios.$post('/user/login', data).then(auth => {
      app.$api.auth.setAuth(auth)
    })
  }
})
