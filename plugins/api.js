import auth from '../api/auth'
import lead from '../api/lead'
import user from '../api/user'

import Vue from 'vue'
import LoadingButton from '../components/LoadingButton'

Vue.component('loading-button', LoadingButton)

export default function (ctx, inject) {
  const api = {
    auth,
    lead,
    user
  }

  Object.keys(api).forEach(function (k) {
    api[k] = api[k](ctx.app)
  })
  api.auth.loadAuth()
  inject('api', api)
}
