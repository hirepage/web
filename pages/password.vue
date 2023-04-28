<script>
  export default {
    layout: 'auth',
    metaInfo () {
      return {
        title: 'Reset Password | Hirepage'
      }
    },
    data () {
      return {
        password: ''
      }
    },
    computed: {
      passwordValid () {
        return /^(?=.*\d).{8,}$/.test(this.password)
      },
      token () {
        return this.$route.query.token
      }
    },
    methods: {
      resetPassword (done) {
        this.$api.user.resetPassword({ password: this.password, token: this.token }).then(next => {
          this.$router.push('/admin')
        }).catch(err => {
          this.$toast.error(err.response.data.error)
        }).finally(done)
      }
    }
  }
</script>

<template>
  <div>
    <h1 class="title form-header">
      Reset Password
    </h1>
    <div class="form-group has-feedback">
      <label>
        New Password
      </label>
      <b-form-input
        v-model="password"
        autofocus
        autocomplete="new-password"
        class="form-control"
        type="password"/>
      <div class="help-block with-errors">
        Minimum 8 characters and at least 1 number
      </div>
    </div>
    <div class="form-group">
      <loading-button
        ref="resetBtn"
        class="btn btn-primary btn-block btn-lg"
        :disabled="!passwordValid"
        @click="resetPassword">
        Set Your Password
      </loading-button>
    </div>
  </div>
</template>
