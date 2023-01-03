<script>
import validator from 'validator'
import LoadingButton from '@/components/LoadingButton'
import SocialIcons from '@/components/SocialIcons'

export default {
  components: {LoadingButton, SocialIcons},
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      website: ''
    }
  },
  computed: {
    enabled() {
      return this.isEmailValid && this.firstName && this.lastName
    },
    isEmailValid() {
      return this.email.length && validator.isEmail(this.email)
    },
    formUrl() {
      return `${process.env.API_URL}/waitlist`
    }
  },
  asyncData({ params, $axios }) {
    return $axios.$get(`${process.env.WEB_URL}/api/user`).then(user => {
      return { user: user }
    }).catch(err => {
      console.error(err)
    })
  },
  methods: {
    shareForm() {
      console.log('shareForm')
    }
  }
}
</script>

<template>
  <div class="setup-wrapper">
    <b-row
      align-h="center"
      align-v="center"
      style="height: 100%;"
      no-gutters>
      <b-col sm="10" md="8" lg="6" xl="5">
        <b-btn
          class="share-btn"
          variant="default"
          pill
          @click="shareForm">
          <font-awesome-icon
            class="concern-icon"
            :icon="['fal', 'arrow-up-from-square']"/>
        </b-btn>
        <div class="setup-cell">
          <div class="logo-wrapper">
            <b-img
              class="logo-img"
              :src="user.avatarUrl"
              :alt="`${user.fullName} Profile Picture`"
              height="96"
              width="96"/>
          </div>

          <div class="text-center">
            <h1 class="semi-bold mb-1 mt-3" style="font-size: 22px;">
              {{ user.fullName }}
            </h1>
            <p style="opacity: 0.8;">
              Software Developer
            </p>
            <social-icons class="pt-1"/>
          </div>

          <div class="pt-2 mb-3"/>

          <form :action="formUrl" method="POST">

            <b-form-group class="has-feedback">
              <label class="form-label">
                Full name
              </label>
              <b-form-input
                v-model="firstName"
                name="full_name"
                type="text"/>
            </b-form-group>

            <b-form-group class="has-feedback">
              <label class="form-label">
                Email
              </label>
              <b-form-input
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"/>
            </b-form-group>

            <b-form-group class="has-feedback">
              <label class="form-label">
                Website
              </label>
              <b-form-input
                v-model="website"
                name="website"
                type="url"/>
            </b-form-group>

            <b-form-group>
              <label class="form-label">
                Message
              </label>
              <b-form-textarea
                rows="4"
                :max-rows="8"/>
            </b-form-group>

            <div class="text-center pt-3">
              <loading-button
                pill
                size="xl"
                type="submit"
                variant="primary"
                style="min-width: 300px;"
                ref="loginBtn">
                Submit
              </loading-button>
            </div>
          </form>
        </div>
      </b-col>
    </b-row>
    <div class="text-center w-100 mt-5">
      <a href="/">
        Hirepage
      </a>
    </div>
  </div>
</template>

<style scoped>
.form-label {
  text-transform: capitalize;
  font-size: 13px;
  /*letter-spacing: 2px;*/
  font-weight: 500;
}

.logo-img {
  /*border: 4px solid white;*/
  border-radius: 50%;
  background-color: white;
  /*border: 1px solid rgba(0, 0, 0, 0.125);*/
}

.logo-wrapper {
  /*position: absolute;*/
  /*top: -48px;*/
  left: 0;
  right: 0;
  text-align: center;
}

.setup-wrapper {
  /*height: 100vh;*/
  padding: 0 0 100px 0;
  /*background-color: rgb(250, 250, 252);*/
}

.setup-cell {
  /*background-color: white;*/
  border-radius: 20px;
  /*border: 1px solid rgba(0, 0, 0, 0.125);*/
  padding: 24px;
  padding-top: 64px;
  position: relative;
}

.color-bg {
  display: none;
}

.setup-col {
  background-color: white;
  position: relative;
}

.share-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  height: 40px;
  width: 40px;
}

@media (min-width: 768px) {
  .color-bg {
    display: block;
    background-image: url(/bg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-left: 1px solid rgba(0, 0, 0, 0.125);
  }
}
</style>
