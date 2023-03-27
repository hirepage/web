<script>
  import InfoHeader from '../components/InfoHeader'
  import InfoFooter from '../components/InfoFooter'

  export default {
    components: {
      InfoHeader,
      InfoFooter
    },
    props: { error: { type: Object, default: null } },
    computed: {
      statusCode () {
        return this.error.statusCode || this.error.response.status
      },
      title () {
        if (this.error.statusCode === 404) {
          return 'Page not found!'
        } else {
          return this.error.statusCode
        }
      },
      message () {
        if (this.error.statusCode === 404) {
          return 'Sorry, but the page you were looking for could not be found.'
        } else {
          return this.error.message
        }
      }
    }
  }
</script>

<template>
  <div class="info-wrapper">
    <info-header/>
    <b-container class="row-pad info-body">
      <b-row
        align-h="center"
        class="row-pad">
        <b-col md="10" lg="8" xl="6">
          <h1 class="title form-header">
            {{ title }}
          </h1>
          <h4>
            {{ message }}
          </h4>
          <p>
            You can return to our
            <nuxt-link to="/">
              <span>front page</span>
            </nuxt-link>
            or message us at
            <a
              href="mailto:dylan@hire.page">
              <span>dylan@hire.page</span>
            </a>
            for help with anything.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <div style="margin-top: 250px;"></div>
    <info-footer/>
  </div>
</template>
