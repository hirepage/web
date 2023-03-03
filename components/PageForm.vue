<script>
  import validator from 'validator'

  export default {
    name: 'PageForm',
    props: {
      user: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
        fields: this.user.fields
      }
    },
    methods: {
      getFieldError (field) {
        if (!field.isRequired) {
          return null
        } else if (field.type === 'email') {
          return field.value && validator.isEmail(field.value) ? null : `Invalid ${field.label}`
        } else {
          return field.value && field.value.length ? null : `Invalid ${field.label}`
        }
      },
      submitForm (done) {
        for (const field of this.fields) {
          if (this.getFieldError(field)) {
            this.$toast.error(this.getFieldError(field))
            return done()
          }
        }
        this.$api.lead.submit({
          user: this.user.id,
          fields: this.fields
        }).then(lead => {
          this.$toast.success('Message sent')
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error sending message')
        }).finally(done)
      }
    }
  }
</script>

<template>
  <div>
    <!--    <h3 v-if="user.about" style="font-weight: bold; margin-bottom: 16px; font-size: 24px;">-->
    <!--      Get in touch-->
    <!--    </h3>-->
    <b-form-group
      v-for="field in fields"
      :key="field.id"
      class="has-feedback">
      <b-form-textarea
        v-if="field.type === 'textarea'"
        v-model="field.value"
        :placeholder="field.placeholder"
        class="profile-field"
        rows="4"/>
      <b-form-input
        v-else
        v-model="field.value"
        :placeholder="field.placeholder"
        class="profile-field"
        :type="field.type"/>
    </b-form-group>

    <div class="text-center">
      <loading-button
        pill
        size="xl"
        variant="primary"
        :style="`background-color: ${user.btnColor} !important; color: ${user.btnTextColor} !important;`"
        class="colored-btn mb-1"
        style="min-width: 350px;"
        @click="submitForm">
        {{ user.btnText }}
      </loading-button>
    </div>
  </div>
</template>

<style scoped>

  .profile-field {
    /*color: var(--text-color);*/
    background: rgba(0, 0, 0, 0.015);
  }

  .profile-field:focus {
    border-color: var(--theme-color);
  }

  .profile-field::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    /*color: var(--light-text-color);*/
    opacity: 1; /* Firefox */
  }

  .profile-field:-ms-input-placeholder { /* Internet Explorer 10-11 */
    /*color: var(--light-text-color);*/
  }

  .profile-field::-ms-input-placeholder { /* Microsoft Edge */
    color: var(--light-text-color);
  }
</style>
