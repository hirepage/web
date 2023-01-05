<script>
  import validator from 'validator'
  import LoadingButton from '@/components/LoadingButton'
  import { forOwn, find } from 'lodash'

  export default {
    components: { LoadingButton },
    data () {
      return {
        form: {}
      }
    },
    computed: {
      enabled () {
        return this.isEmailValid && this.firstName && this.lastName
      },
      isEmailValid () {
        return this.email.length && validator.isEmail(this.email)
      },
      formData () {
        return Object.entries(this.form).map(([key, value]) => {
          return {
            value: value,
            field: find(this.user.fields, { id: key })
          }
        })
      }
    },
    asyncData ({ params, app, error }) {
      return app.$api.user.getUser(params.username).then(user => {
        return { user }
      }).catch(err => {
        error(err)
      })
    },
    methods: {
      submitForm (done) {
        this.$api.lead.submit({
          user: this.user.id,
          form: this.formData
        }).then(lead => {
          console.log(lead)
          this.$toast.success('Message sent')
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error sending message')
        }).finally(done)
      },
      shareForm () {
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

            <div class="form-group social-icons pt-1">
              <div class="social-icon"
                   v-for="link in user.links"
                   :key="link.id">
                <a
                  :href="link.url"
                  target="_blank">
                  <font-awesome-icon
                    size="lg"
                    width="42.5"
                    height="35"
                    :icon="[link.iconSet, link.icon]"/>
                </a>
              </div>
            </div>
          </div>

          <div class="pt-2 mb-3"/>

          <b-form-group
            v-for="field in user.fields"
            :key="field.id"
            class="has-feedback">
            <label class="form-label">
              {{ field.label }}
            </label>
            <b-form-textarea
              v-if="field.type === 'textarea'"
              v-model="form[field.id]"
              :no-resize="false"
              rows="4"
              :max-rows="8"/>
            <b-form-input
              v-else
              v-model="form[field.id]"
              :type="field.type"/>
          </b-form-group>

          <div class="text-center pt-3">
            <loading-button
              pill
              size="xl"
              type="submit"
              variant="primary"
              style="min-width: 300px;"
              :style="`background-color: ${user.btnColor} !important;`"
              class="colored-btn"
              @click="submitForm">
              {{ user.btnText }}
            </loading-button>
          </div>
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

  .social-icons {
    margin: 12px auto 12px auto;
    max-width: 160px;
    display: flex;
    /*margin-top: 24px;*/
    /*margin-bottom: 24px;*/
  }

  .social-icon a {
    color: #3a3a3a;
    /*opacity: 0.7;*/
  }
</style>
