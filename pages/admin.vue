<script>
  export default {
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    created () {
      this.$api.user.myUser()
    }
  }
</script>

<template>
  <div>
    {{ user }}
  </div>
</template>
