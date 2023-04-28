<script>
  import AdminHeader from '@/components/AdminHeader'
  // import UpdatesButton from '@/components/UpdatesButton'

  export default {
    middleware: 'authenticated',
    components: {
      AdminHeader
      // UpdatesButton
    },
    computed: {
      previewUrl () {
        return  '/notsogood' // this.$store.state.user ? `/${this.$store.state.user.username}` : null
      }
    },
    created () {
      this.$api.auth.loadAuth()
      this.$api.user.myUser()
    },
    mounted () {
      window.$crisp = []
      window.CRISP_WEBSITE_ID = '899d838a-2247-49cf-99e5-a2d3a6a85ebc';
      (function (d, s) {
        d = document
        s = d.createElement('script')
        s.src = 'https://client.crisp.chat/l.js'
        s.async = 1
        d.getElementsByTagName('head')[0].appendChild(s)
      })()
    }
  }
</script>

<template>
  <div>
    <admin-header/>
    <b-container style="margin-top: 58px;">
      <b-row>
        <b-col lg="7">
          <nuxt v-if="$store.state.user" class="setting-tab"/>
        </b-col>
        <b-col lg="5" class="sticky-col">
          <div class="preview-wrapper">
            <b-embed
              ref="previewIframe"
              class="preview-iframe"
              type="iframe"
              aspect="phone"
              :src="previewUrl"/>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>

  @media (min-width: 992px) {
    .sticky-col {
      position: fixed;
      top: 80px;
      right: 0;
    }
  }

  .embed-responsive-phone::before {
    padding-top: 175%;
  }

  .preview-wrapper {
    transform: scale(0.6667) translateY(-25%) translateX(-25%);
    width: 550px;
    max-width: 150%;
    text-align: center;
    display: flex;
    padding-bottom: 56.25%;
    margin-top: 24px;
    position: relative;
  }

  .preview-iframe {
    border: 16px solid #3a3a3a;
    border-radius: 50px;
    width: 100%;
    height: 100%;
    margin: auto;
  }

  .setting-tab {
    min-height: calc(100vh - 66px);
    padding-top: 24px;
  }

  .menu-wrapper {
    padding: 15px;
    padding-top: 100px;
    flex: 1 0 255px;
    justify-content: flex-end;
    display: flex;
  }

  .settings-menu {
    width: 100%;
  }

  @media (min-width: 768px) {
    .settings-menu {
      width: 240px;
      padding-left: 15px;
    }
  }

  .esc-wrapper {
    margin-top: 8px;
    text-align: center;
  }

  @media (min-width: 768px) {

    .menu-wrapper {
      padding-top: 76px;
    }

    .settings-modal {
      justify-content: center;
      display: flex;
      height: 100%;
    }

    .esc-wrapper {
      position: fixed;
      top: 50px;
      right: 50px;
    }

    .invoice-items-wrapper {
      align-items: center;
    }
  }

  .esc-label {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.25);
  }

  .esc-btn {
    margin-top: -8px;
    margin-bottom: 4px;
    font-size: 20px;
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.25) !important;
    color: rgba(0, 0, 0, 0.5);
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  .esc-btn:hover {
    background-color: rgba(0, 0, 0, 0.03);
    color: rgba(0, 0, 0, 0.5);
  }

  .invoice-items-wrapper {
    display: flex;
    width: 100%;
    padding: 15px;
    position: relative;
    flex-direction: column;
  }

  .back-btn {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
    padding: 5px 8px 5px 23px;
    margin-top: -3px;
    margin-left: -15px;
  }

  .settings-container {
    padding: 16px 0 120px 0;
  }

  .widget-spacer {
    width: 500px;
    background-color: rgb(251, 251, 252);
    border-left: 1px solid rgba(0, 0, 0, 0.125);
  }

  .settings-wrapper {
    min-height: 100vh;
  }
</style>
