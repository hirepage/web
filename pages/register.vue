<script>
  import UsernameInput from '@/components/UsernameInput'
  import validator from 'validator'
  import { get } from 'lodash'

  export default {
    layout: 'auth',
    middleware: 'notAuthenticated',
    components: {
      UsernameInput
    },
    metaInfo () {
      return {
        title: 'Register | Hirepage'
      }
    },
    data () {
      return {
        username: this.$route.query.username || '',
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      }
    },
    computed: {
      passwordValid () {
        return /^(?=.*\d).{8,}$/.test(this.password)
      },
      emailValid () {
        return validator.isEmail(this.email)
      },
      allValid () {
        return this.emailValid
          && this.passwordValid
          && this.firstName.length
          && this.lastName.length
          && this.username
      }
    },
    methods: {
      register (done) {
        this.$api.user.register({
          username: this.username,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password
        }).then(next => {
          this.$router.push('/admin')
        }).catch(err => {
          console.error(err)
          get(err, 'response.data.error') ? this.$toast.error(get(err, 'response.data.error')) : null
        }).finally(done)
      }
    }
  }
</script>

<template>
  <div>
    <h1 class="title form-header">
      Create your account
    </h1>
    <hr>
    <div>
      <username-input :username.sync="username" register/>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group has-feedback">
            <label>
              First name
            </label>
            <b-form-input
              v-model="firstName"
              :class="{'is-valid': firstName}"
              name="first-name"
              autocomplete="first-name"
              class="form-control"
              type="text"
              maxlength="64"
              autocapitalize="word"/>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group has-feedback">
            <label>
              Last name
            </label>
            <b-form-input
              v-model="lastName"
              :class="{'is-valid': lastName}"
              name="last-name"
              autocomplete="last-name"
              class="form-control"
              type="text"
              maxlength="64"
              autocapitalize="word"/>
          </div>
        </div>
      </div>

      <div
        class="form-group">
        <label>
          Email
        </label>
        <b-form-input
          ref="emailInput"
          v-model="email"
          :class="{'is-invalid': email && !emailValid, 'is-valid': emailValid}"
          name="email"
          autocomplete="email username"
          type="email"
          class="form-control"
          maxlength="64"/>
        <!--        <div v-if="!emailValid && email" class="help-block with-errors">-->
        <!--          <p>-->
        <!--            That email doesn't look right. Try again.-->
        <!--          </p>-->
        <!--        </div>-->
      </div>

      <div class="form-group has-feedback">
        <label>
          Create password
        </label>
        <b-form-input
          v-model="password"
          :class="{'is-invalid': password.length && !passwordValid, 'is-valid': passwordValid}"
          name="password"
          autocomplete="new-password"
          class="form-control"
          type="password"
          maxlength="64"/>
        <div class="help-block with-errors">
          Minimum 8 characters and at least 1 number
        </div>
      </div>
      <div class="form-group">
        <p>
          Clicking create account you agree to Hirepage's
          <nuxt-link to="/terms">
            <span>Terms of Service</span>
          </nuxt-link>
          and
          <nuxt-link to="/privacy">
            <span>Privacy Policy.</span>
          </nuxt-link>
          You may receive offers, news and updates from us.
        </p>
      </div>
      <div class="form-group">
        <loading-button
          ref="registerBtn"
          class="btn btn-primary btn-block btn-lg"
          :disabled="!(allValid)"
          @click="register">
          Create Account
        </loading-button>
      </div>
    </div>
    <div class="">
      <p>
        Already have a Hirepage?
        <nuxt-link to="/login">
          <span>Log in</span>
        </nuxt-link>
      </p>
    </div>
  </div>
</template>
