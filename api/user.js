export default app => ({
  myUser () {
    return app.$axios.$get('/user').then(user => {
      app.store.commit('SET_USER', user)
      return user
    }).catch(console.error)
  },
  update (data) {
    return app.$axios.$put('/user', data).then(user => {
      app.store.commit('SET_USER', user)
    })
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
  },
  addLink (data) {
    return app.$axios.$post('/user/link', data).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  editLink (id, data) {
    return app.$axios.$put(`/user/link/${id}`, data).then(user => {
      app.store.commit('SET_USER', user)
    })
  }
})
