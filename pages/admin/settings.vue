<script>
  import UsernameInput from '@/components/UsernameInput'
  import QrCodeModal from '@/components/modals/QRCodeModal'
  import validator from 'validator'

  export default {
    layout: 'admin',
    components: {
      UsernameInput,
      QrCodeModal
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
      },
      user () {
        return this.$store.state.user
      }
    },
    methods: {
      save (done) {
        this.$api.user.update({
          username: this.username,
          email: this.email
        }).then(user => {
          this.$toast.success('Settings updated')
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
      <b-row>
        <b-col>
          <username-input :username.sync="username" />

          <b-form-group>
            <label>
              Email
            </label>
            <b-form-input
              v-model="email"
              maxlength="64"/>
            <p v-if="user && !user.emailConfirmed" class="help-block with-errors">
              Please check your email to confirm your email
            </p>
          </b-form-group>
        </b-col>
        <b-col md="auto">
          <qr-code-modal/>
        </b-col>
      </b-row>



      <loading-button variant="primary" :disabled="!enabled" @click="save">
        Save
      </loading-button>
    </b-card>
  </div>
</template>
