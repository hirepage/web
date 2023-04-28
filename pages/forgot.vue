<script>
  export default {
    layout: 'auth',
    middleware: 'notAuthenticated',
    metaInfo () {
      return {
        title: 'Forgot Password | Hirepage'
      }
    },
    data () {
      return {
        username: this.$route.query.username || '',
        success: false,
        failed: false
      }
    },
    methods: {
      forgot (done) {
        this.$api.user.forgotPassword({ username: this.username }).then(response => {
          this.success = true
        }).catch(err => {
          console.error(err)
          this.failed = true
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
    <hr>
    <div v-if="success" class="form-group">
      <b-card>
        <h4>Check your email</h4>
        <p>
          We just sent you an email containing a temporary link that will allow you to reset your password.
          Please
          check your spam folder if the email doesn’t appear within a few minutes.
        </p>
        <p>
          If there are any issues
          <a href="mailto:hello@otechie.com">
            <span>email us</span>
          </a>, and we’ll help fix it!
        </p>
      </b-card>
    </div>
    <div v-else>
      <div class="form-group">
        <label>
          Username
        </label>
        <b-form-input
          v-model="username"
          autocomplete="username"
          class="form-control"
          type="text"
          autofocus/>
        <div
          v-if="failed"
          class="help-block with-errors">
          <p>
            There is no user with that username. Do you want to
            <nuxt-link to="/register">
              sign up instead?
            </nuxt-link>
          </p>
        </div>
      </div>
      <div class="form-group">
        <loading-button
          ref="forgotBtn"
          class="btn btn-primary btn-lg btn-block"
          @click="forgot">
          Reset Password
        </loading-button>
      </div>
    </div>
    <p>
      Remembered your password?
      <nuxt-link to="/login">
        <span>Log in</span>
      </nuxt-link>
    </p>
  </div>
</template>
