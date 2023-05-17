<script>
  export default {
    created () {
      if (!process.client) { // Prevents authorizing twice
        return
      }
      this.$api.user.connectQuickbooks({
        url: this.$route.fullPath,
        realmId: this.$route.query.realmId
      }).then(user => {
        this.$toast.success('Quickbooks connected successfully')
        this.$router.replace('/admin/settings')
      }).catch(err => {
        this.$toast.error('Error connecting QuickBooks, please try again')
        this.$router.replace('/admin/settings')
      })
    }
  }
</script>

<template>
  <div/>
</template>
