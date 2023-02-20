<script>
  import UsernameInput from '@/components/UsernameInput'
  import validator from 'validator'

  export default {
    layout: 'admin',
    components: {
      UsernameInput
    },
    data () {
      return {
        username: this.$store.state.user.username,
        email:  this.$store.state.user.email
      }
    },
    computed: {
      emailValid () {
        return validator.isEmail(this.email)
      },
      enabled () {
        return this.emailValid && this.username
      }
    },
    methods: {
      save (done) {
        this.$api.user.update({
          username: this.username,
          email: this.email
        }).catch(err => {
          this.$toast.error('Error updating settings')
        }).finally(done)
      }
    }
  }
</script>

<template>
  <div>
    <h2>
      Settings
    </h2>
    <b-card>
      <username-input :username.sync="username" />

      <b-form-group>
        <label>
          Email
        </label>
        <b-form-input
          v-model="email"
          maxlength="64"/>
      </b-form-group>

      <loading-button variant="primary" :disabled="!enabled" @click="save">
        Save
      </loading-button>
    </b-card>
  </div>
</template>
