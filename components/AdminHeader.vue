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
  <b-navbar toggleable="lg" sticky class="admin-header">
    <logout-modal/>
    <b-container>
      <b-navbar-brand to="/admin">
        <b-img src="/favicon.png" height="28"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/admin">
            Appearance
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
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style scoped>
  .admin-header {
    background-color: white;
    border-bottom: solid #ececec 1px;
  }

  .nav-item .nuxt-link-exact-active {
    /*border-bottom: 2px #549DFF solid;*/
    color: #3a3a3a;
  }
</style>
