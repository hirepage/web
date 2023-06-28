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
        fields: this.user.fields,
        lead: null
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
          this.lead = lead
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error sending message')
        }).finally(done)
      },
      openCalendly () {
        const color = this.user.btnColor.replace('#', '')
        const url = `${this.user.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=${color}`
        console.log('this.user.calendlyUrl ', url)
        window.Calendly.initPopupWidget({ url })
        return false
      }
    }
  }
</script>

<template>
  <div v-if="user.calendlyUrl" class="text-center mt-4">
    <!-- Calendly link widget begin -->
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
    <b-btn
      pill
      size="xl"
      variant="primary"
      :style="`background-color: ${user.btnColor} !important; color: ${user.btnTextColor} !important;`"
      class="colored-btn mb-4"
      style="width: 350px; max-width: 100%;"
      @click="openCalendly">
      Book Free Consultation
    </b-btn>
  </div>
  <div v-else-if="user.resumeUrl" class="text-center mt-3">
    <b-btn
      pill
      size="xl"
      variant="primary"
      :style="`background-color: ${user.btnColor} !important; color: ${user.btnTextColor} !important;`"
      class="colored-btn mb-4"
      style="width: 350px; max-width: 100%;"
      :href="user.resumeUrl"
      target="_blank">
      Download Resume
    </b-btn>
  </div>

  <div v-else-if="lead">
    <b-alert show variant="success" class="mt-4">
      <div class="my-3">
        <h3 class="alert-heading">
          Submission Sent!
        </h3>
        <p>
          {{ user.title }} will be in touch with you by email at {{ lead.email }}.
          <a class="alert-link" @click="lead = null">Click here</a> if you want to edit your submission.
        </p>
      </div>
    </b-alert>
  </div>
  <div v-else>
    <hr v-if="user.about">
    <h3 style="font-weight: bold; margin-bottom: 16px; font-size: 24px;">
      Get in touch
    </h3>
    <div
      v-for="field in fields"
      :key="field.id">
      <b-form-group
        v-if="field.type === 'radio'"
        v-slot="{ ariaDescribedby }"
        :label="field.placeholder">
        <b-form-radio-group
          v-model="field.value"
          :options="field.options"
          :stacked="field.stacked"
          :aria-describedby="ariaDescribedby"
          name="buttons-2"/>
      </b-form-group>
      <b-form-group
        v-else-if="field.type === 'checkbox'"
        v-slot="{ ariaDescribedby }"
        :label="field.placeholder">
        <b-form-checkbox-group
          v-model="field.value"
          :options="field.options"
          :stacked="field.stacked"
          :aria-describedby="ariaDescribedby"
          name="buttons-2"/>
      </b-form-group>
      <b-form-group v-else-if="field.type === 'date'" :label="field.placeholder">
        <b-form-input
          v-model="field.value"
          class="profile-field"
          type="date"/>
      </b-form-group>
      <b-form-group v-else-if="field.type === 'textarea'" :label="user.showLabels ? field.placeholder : null">
        <b-form-textarea
          v-model="field.value"
          :placeholder="user.showLabels ? null : field.placeholder"
          class="profile-field"
          rows="4"/>
      </b-form-group>
      <b-form-group v-else :label="user.showLabels ? field.placeholder : null">
        <b-form-input
          v-model="field.value"
          :placeholder="user.showLabels ? null : field.placeholder"
          class="profile-field"
          :type="field.type"/>
      </b-form-group>
    </div>

    <div class="text-center">
      <loading-button
        pill
        size="xl"
        variant="primary"
        :style="`background-color: ${user.btnColor} !important; color: ${user.btnTextColor} !important;`"
        class="colored-btn mb-4"
        style="width: 350px; max-width: 100%;"
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
