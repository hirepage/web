import axios from 'axios'

export default app => ({
  upload (file) {
    return app.$axios.$post(`/url?file=${file.name}`, null, { progress: false }).then(data => {
      const bodyFormData = new FormData()
      for (let key in data.signature) {
        bodyFormData.set(key, data.signature[key])
      }
      bodyFormData.append('file', file)
      return axios({
        method: 'post',
        url: data.postEndpoint,
        data: bodyFormData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      }).then(result => {
        return `${data.postEndpoint}/${data.signature.key}`
      })
    })
  }
})
