<script>
  export default {
    name: 'WelcomeAlert',
    computed: {
      show () {
        return !this.$cookies.get('hide-welcome')
      }
    },
    methods: {
      dismissed () {
        this.$cookies.set('hide-welcome', true, {
          path: '/'
        })
      }
    }
  }
</script>

<template>
  <b-alert :show="show" dismissible variant="success" @dismissed="dismissed">
    <h3 class="alert-heading">
      Welcome to Hirepage!
    </h3>
    <p>
      First let's set your page up. Fill out your profile, add your media social links, write a description of your
      services, and make sure the contact form is collecting the info you need.
    </p>
    <hr>
    <p>
      Then once your page is ready, start sharing your new link with potential clients. Try adding it to your social
      media's profiles, making a post to LinkedIn or Twitter, and including it in your blog posts.
    </p>
  </b-alert>
</template>

<style scoped>

</style>
