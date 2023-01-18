<script>
  import AdminHeader from '@/components/AdminHeader'
  // import UpdatesButton from '@/components/UpdatesButton'

  export default {
    middleware: 'authenticated',
    components: {
      AdminHeader,
      // UpdatesButton
    },
    computed: {
      workspace () {
        return this.$store.state.workspace
      }
    },
    created () {
      this.$api.auth.loadAuth()
      this.$api.user.myUser()
    }
  }
</script>

<template>
  <div>
    <admin-header/>
    <b-container>
      <b-row>
        <b-col cols="6">
          <nuxt class="setting-tab"/>
        </b-col>
        <b-col cols="6">
          <div class="preview-wrapper">
            <iframe src="/dylan" class="preview-iframe">

            </iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>

  .preview-wrapper {
    transform: scale(0.686561) translateX(-10%) translateY(-20%);
    width: 100%;
    height: 140%;
  }

  .preview-iframe {
    border: 16px solid #3a3a3a;
    border-radius: 50px;
    width: 100%;
    height: 100%;
  }

  .setting-tab {
    min-height: calc(100vh - 66px);
    max-width: 650px;
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
