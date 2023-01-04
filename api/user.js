export default app => ({
  myUser () {
    return app.$axios.$get('/user').then(user => {
      app.store.commit('SET_USER', user)
      return user
    }).catch(console.error)
  },
  getUser (username) {
    return app.$axios.$get(`/user/${username}`).then(user => {
      return user
    })
  }
})
