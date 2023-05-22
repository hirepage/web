<script>
  import ClipboardJS from 'clipboard'

  export default {
    name: 'CopyPageLink',
    data () {
      return {
        clipboard: null
      }
    },
    mounted () {
      this.clipboard = new ClipboardJS('.share-btn')
      const self = this
      this.clipboard.on('success', function (e) {
        self.$toast.success('Copied link')
        console.log('clipboard', e)
      })
    },
    beforeDestroy () {
      this.clipboard.destroy()
    },
    computed: {
      shareUrl () {
        return this.user ? `${process.env.WEB_URL}/${this.user.username}` : 'nope'
      },
      user () {
        return this.$store.state.user
      }
    },
    methods: {
      shareForm () {
        console.log('shareForm')
      }
    }
  }
</script>

<template>
  <b-btn
    id="share-btn"
    class="share-btn"
    variant="default"
    pill
    data-clipboard-action="copy"
    :data-clipboard-text="shareUrl">
    <b-img src="/arrow-up-from-square-light.svg" height="12" width="12" style="margin-bottom: 2px;"/>
  </b-btn>
</template>

<style scoped>

</style>
