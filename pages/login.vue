<script>
  export default {
    layout: 'auth',
    middleware: 'notAuthenticated',
    metaInfo () {
      return {
        title: 'Login | Hirepage'
      }
    },
    data () {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      next () {
        return this.$route.query.next
      }
    },
    methods: {
      login (done) {
        this.$api.user.login({
          username: this.username,
          password: this.password
        }).then(next => {
          this.$router.push(next || '/admin')
        }).catch(err => {
          this.$toast.error('Invalid Login')
        }).finally(done)
      }
    }
  }
</script>

<template>
  <div>
    <h1 class="title form-header">
      Login
    </h1>
    <hr>
    <b-form
      id="login-form"
      @keydown.enter.prevent="$refs.loginBtn.click()">
      <div class="form-group">
        <label>
          Username
        </label>
        <b-input-group
          prepend="hire.page/"
          class="username-input-group">
          <b-form-input
            v-model="username"
            autofocus
            maxlength="64"/>
        </b-input-group>
      </div>
      <div class="form-group">
        <label>
          Password
        </label>
        <b-form-input
          id="password-input"
          v-model="password"
          autocomplete="current-password"
          class="form-control"
          type="password"/>
      </div>
      <div class="form-group">
        <loading-button
          ref="loginBtn"
          class="btn btn-block btn-primary btn-lg"
          @click="login">
          Log in
        </loading-button>
      </div>
    </b-form>
    <p>
      Don't have an account yet?
      <nuxt-link to="/register">
        <span>Register</span>
      </nuxt-link>
    </p>
    <p>
      Forgot your password?
      <nuxt-link to="/forgot">
        <span>Reset your password</span>
      </nuxt-link>
    </p>
  </div>
</template>
