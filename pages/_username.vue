<script>
  import meta from '@/mixins/meta'
  import MainProfile from '~/components/MainProfile.vue'

  export default {
    components: { MainProfile },
    mixins: [meta],
    asyncData ({ params, app, error }) {
      return app.$api.user.getUser(params.username).then(user => {
        return { user }
      }).catch(err => {
        error(err)
      })
    }
  }
</script>

<template>
  <main-profile :user="user"/>
</template>
