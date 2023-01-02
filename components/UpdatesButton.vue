<script>
  export default {
    mounted () {
      Canny('initChangelog', {
        appID: '629c18925a34035e3568e16e',
        position: 'bottom',
        align: 'right'
      })
    }
  }
</script>

<template>
  <b-nav-item button data-canny-changelog>
    Updates
  </b-nav-item>
</template>
