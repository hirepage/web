<script>
  export default {
    middleware: 'authenticated',
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    created () {
      this.$api.user.myUser()
    },
    methods: {
      logout () {
        this.$api.auth.logout()
        this.$router.push('/login')
      }
    }
  }
</script>

<template>
  <div>
    {{ user }}
    <b-btn @click="logout">
      Logout
    </b-btn>
  </div>
</template>
