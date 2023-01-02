<script>
  import VuePlyr from 'vue-plyr'
  import 'vue-plyr/dist/vue-plyr.css'

  export default {
    components: {
      VuePlyr
    },
    props: {
      video: {
        type: String,
        default: null,
        required: true
      }
    },
    data () {
      return {
        options: {
          controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
        }
      }
    },
    computed: {
      workspace () {
        return this.$store.state.workspace
      }
    },
    mounted () {
      this.$refs.plyr.player.on('ended', this.finishedVideo)
      this.$refs.plyr.player.on('pause', this.pausedVideo)
      this.$refs.plyr.player.on('playing', this.playVideo)
      this.$refs.plyr.player.on('seeked', this.seekVideo)
      this.$refs.plyr.player.on('enterfullscreen', this.enterFullscreen)
      this.$refs.plyr.player.on('exitfullscreen', this.exitFullscreen)
    },
    beforeDestroy () {
      this.$refs.plyr.player.off('ended', this.finishedVideo)
      this.$refs.plyr.player.off('pause', this.pausedVideo)
      this.$refs.plyr.player.off('playing', this.playVideo)
      this.$refs.plyr.player.off('seeked', this.seekVideo)
      this.$refs.plyr.player.off('enterfullscreen', this.enterFullscreen)
      this.$refs.plyr.player.off('exitfullscreen', this.exitFullscreen)
      this.$refs.plyr.player.destroy()
    },
    methods: {
      pausedVideo () {
        if (this.$refs.plyr.player.currentTime >= this.$refs.plyr.player.duration) {
          return
        }
        this.$api.client.sendEvent(`PAUSED_VIDEO ${this.$refs.plyr.player.currentTime}`, this.workspace.id, this.$route).catch(console.error)
      },
      playVideo () {
        this.$api.client.sendEvent(`PLAY_VIDEO ${this.$refs.plyr.player.currentTime}`, this.workspace.id, this.$route).catch(console.error)
      },
      finishedVideo () {
        this.$api.client.sendEvent('FINISHED_VIDEO', this.workspace.id, this.$route).catch(console.error)
      },
      seekVideo () {
        this.$api.client.sendEvent(`SEEK_VIDEO ${this.$refs.plyr.player.currentTime}`, this.workspace.id, this.$route).catch(console.error)
      },
      enterFullscreen () {
        this.$api.client.sendEvent('FULLSCREEN_VIDEO', this.workspace.id, this.$route).catch(console.error)
      },
      exitFullscreen () {
        this.$api.client.sendEvent('EXIT_FULLSCREEN_VIDEO', this.workspace.id, this.$route).catch(console.error)
      }
    }
  }
</script>

<template>
  <div class="" style="max-width: 600px;">
    <vue-plyr ref="plyr" :options="options">
      <video
        class="video-player"
        controls
        crossorigin
        playsinline
        allowfullscreen>
        <source
          :src="video"
          type="video/mp4"/>
      </video>
    </vue-plyr>
  </div>
</template>

<style scoped>
  .mobile-header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: linear-gradient(#1a1a1a88, transparent);
    border: none;
  }

  .desktop-header {
    flex: 0 0 55px;
  }

  .widget-wrapper {
    overflow: hidden;
    flex-wrap: nowrap;
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    flex-direction: column;
  }

  .video-container {
    /*height: 100%;*/
  }

  .chat-col {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .chat-col {
      width: 450px !important;
      flex: 0 0 450px;
    }

    .widget-wrapper {
      flex-direction: row;
    }
  }

  .video-player {
    flex: 1 1 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
