<script>
  import SettingsDropdown from '@/components/SettingsDropdown'
  import LogoutModal from '@/components/modals/LogoutModal'

  export default {
    middleware: 'authenticated',
    components: {
      SettingsDropdown,
      LogoutModal
    }
  }
</script>

<template>
  <b-navbar class="admin-header">
    <logout-modal/>
    <b-container>
      <b-navbar-brand to="/admin">
        <b-img src="/favicon.png" height="28"/>
      </b-navbar-brand>

      <b-navbar-nav class="d-none d-md-flex">
        <b-nav-item to="/admin">
          Profile
        </b-nav-item>
        <b-nav-item to="/admin/info">
          Info
        </b-nav-item>
        <b-nav-item to="/admin/form">
          Contact Form
        </b-nav-item>
        <!--          <b-nav-item to="/admin/leads">-->
        <!--            Leads-->
        <!--          </b-nav-item>-->
        <b-nav-item to="/admin/settings">
          Settings
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <settings-dropdown/>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<style scoped>
  .admin-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: white;
    border-bottom: solid #ececec 1px;
    z-index: 1000;
  }

  .nav-item .nuxt-link-exact-active {
    /*border-bottom: 2px #549DFF solid;*/
    color: #3a3a3a;
  }
</style>
