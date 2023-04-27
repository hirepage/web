<script>
  export default {
    data () {
      return {
        username: '',
        index: 0
      }
    },
    computed: {
      wallpaperStyle () {
        return ''
      }
    },
    created () {
      // setInterval(() => {
      //   this.index++
      //   this.index %= this.wallpapers.length
      // }, 5000)
    }
  }
</script>

<template>
  <b-row align-v="center" align-h="center">
    <b-col class="iframe-col" md="auto">
      <iframe class="iframe" src="https://cdn.forms-content.sg-form.com/704de0ae-e54c-11ed-b237-16ae2cec5aa6"/>
    </b-col>
  </b-row>
</template>


<style scoped>


  .iframe {
    border: none;
    width: 100%;
    height: 100vh;
  }

  @media (min-width: 992px) {
    .iframe {
      padding-top: 80px;
    }

    .iframe-col {
      width: 550px;
    }
  }
</style>
