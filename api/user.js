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
  },
  removeLink (id) {
    return app.$axios.$delete(`/user/link/${id}`).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  orderLink (id, position) {
    return app.$axios.$put(`/user/link/${id}/order`).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  addField (data) {
    return app.$axios.$post('/user/field', data).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  editField (id, data) {
    return app.$axios.$put(`/user/field/${id}`, data).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  removeField (id) {
    return app.$axios.$delete(`/user/field/${id}`).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  orderField (id, position) {
    return app.$axios.$put(`/user/field/${id}/order`).then(user => {
      app.store.commit('SET_USER', user)
    })
  }
})
