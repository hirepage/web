export default app => ({
  submit (data) {
    return app.$axios.$post('/lead', data)
  }
})
