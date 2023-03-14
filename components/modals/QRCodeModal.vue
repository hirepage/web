<script>
  import QRCode from 'qrcode'

  export default {
    name: 'QRCodeModal',
    data () {
      return {
        qrCodeUrl: ''
      }
    },
    created () {
      const self = this
      QRCode.toDataURL(this.$store.state.user.url, { }, function (err, url) {
        if (err) throw err
        self.qrCodeUrl = url
      })
    }
  }
</script>

<template>
  <b-form-group >
    <b-img v-if="qrCodeUrl" :src="qrCodeUrl"/>
  </b-form-group>
</template>

<style scoped>

</style>
