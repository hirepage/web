import axios from 'axios'
import ColorThief from '../lib/colorthief/color-thief'

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
  },
  getImageColors (url) {
    const colorThief = new ColorThief()
    return new Promise((resolve, reject) => {
      colorThief.getPalleteFromUrl(url, (pallete) => {
        resolve(pallete.map(color => this.rgbToHex(color)))
      })
    })
  },
  rgbToHex ([r, g, b]) {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }).join('')
  }
})
