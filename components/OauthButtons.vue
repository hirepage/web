<script>
  import { get } from 'lodash'
  export default {
    props: {
      verb: {
        type: String,
        default: 'Continue with'
      }
    },
    computed: {
      githubUrl () {
        return `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_ID}&scope=user:email`
      },
      googleUrl () {
        return `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.GOOGLE_ID}&scope=openid%20email%20profile&redirect_uri=${process.env.WEB_URL}/connect/google`
      },
      appleUrl () {
        return `https://appleid.apple.com/auth/authorize?client_id=${process.env.APPLE_ID}&redirect_uri=${encodeURIComponent(process.env.API_URL)}%2Fauth%2Fapple%2Fredirect&response_type=code&response_mode=form_post&scope=email name`
      }
    },
    methods: {
      githubLogin () {
        if (get(window, 'webkit.messageHandlers.default')) {
          window.webkit.messageHandlers.default.postMessage({ name: 'github', url: `${this.githubUrl}&state=ios` })
        } else if (window.android) {
          window.android.postMessage(JSON.stringify({ name: 'github', url: `${this.githubUrl}&state=android` }))
        } else {
          window.location = this.githubUrl
        }
      },
      googleLogin () {
        if (get(window, 'webkit.messageHandlers.default')) {
          window.webkit.messageHandlers.default.postMessage({ name: 'google', url: `${this.googleUrl}&state=ios` })
        } else if (window.android) {
          window.android.postMessage(JSON.stringify({ name: 'google', url: `${this.googleUrl}&state=android` }))
        } else {
          window.location = this.googleUrl
        }
      },
      appleLogin () {
        if (get(window, 'webkit.messageHandlers.default')) {
          window.webkit.messageHandlers.default.postMessage({ name: 'apple' })
        } else if (window.android) {
          window.android.postMessage(JSON.stringify({ name: 'apple', url: `${this.appleUrl}&state=android` }))
        } else {
          window.location = this.appleUrl
        }
      }
    }
  }
</script>

<template>
  <div>
    <hr class="mt-4">
    <div class="or-divider-wrapper">
      <div class="or-divider">
        or
      </div>
    </div>
    <b-form-group>
      <b-btn
        variant="default"
        block
        size="lg"
        @click="githubLogin">
        <font-awesome-icon
          class="mr-1"
          :icon="['fab', 'github']"
          size="lg"
          width="22"
          height="17"
          fixed-width/>
        {{ verb }} Github
      </b-btn>
    </b-form-group>
    <b-form-group>
      <b-btn
        variant="default"
        block
        size="lg"
        @click="googleLogin">
        <b-img
          src="/google.svg"
          height="17"
          width="22"
          class="mr-1"/>
        {{ verb }} Google
      </b-btn>
    </b-form-group>
    <b-form-group>
      <b-btn
        variant="default"
        block
        size="lg"
        @click="appleLogin">
        <font-awesome-icon
          class="mr-1"
          :icon="['fab', 'apple']"
          size="lg"
          width="22"
          height="17"
          fixed-width/>
        {{ verb }} Apple
      </b-btn>
    </b-form-group>
  </div>
</template>

<style scoped>
  .or-divider {
    background-color: white;
    font-size: 14px;
    padding: 4px 12px;
    margin: auto;
    display: inline-block;
  }
  .or-divider-wrapper {
    text-align: center;
    margin-top: -32px;
    margin-bottom: 10px;
  }
</style>
