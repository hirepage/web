<script>
  import InfoHeader from '../components/InfoHeader'
  import InfoFooter from '../components/InfoFooter'


  export default {
    components: {
      InfoHeader,
      InfoFooter
    },
    head () {
      return {
        title: 'Privacy Policy | Hirepage'
      }
    },
    asyncData ({ app }) {
      return app.$axios.get('https://www.iubenda.com/api/privacy-policy/8252905/no-markup').then(response => {
        return { html: response.data.content }
      })
    }
  }
</script>

<template>
  <div class="info-wrapper">
    <info-header/>
    <b-container class="info-body">
      <b-row
        align-h="center"
        class="row-pad">
        <b-col
          lg="8"
          md="10">
          <!--eslint-disable-next-line-->
          <div v-html="html"></div>
        </b-col>
      </b-row>
    </b-container>
    <div style="margin-top: 250px;"></div>
    <info-footer/>
  </div>
</template>
