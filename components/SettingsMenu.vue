<script>
  import LogoutModal from '@/components/modals/LogoutModal'

  export default {
    components: { LogoutModal },
    computed: {
      user () {
        return this.$store.state.user
      }
    }
  }
</script>

<template>
  <div>
    <b-list-group horizontal="md">
      <b-list-group-item to="/settings/install">
        Install Widget
      </b-list-group-item>
      <b-list-group-item to="/settings/video">
        Intro Video
      </b-list-group-item>
      <b-list-group-item to="/settings/profile">
        Profile
      </b-list-group-item>
      <b-list-group-item to="/settings/prompt">
        Chat Prompt
      </b-list-group-item>
      <b-list-group-item to="/settings/bot">
        Onboarding Bot
      </b-list-group-item>
      <b-list-group-item to="/portal">
        Billing & Plans
      </b-list-group-item>
    </b-list-group>
    <logout-modal/>
  </div>
</template>

<style scoped>
  .list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover, .list-group .nuxt-link-active {
    border-left: 2px #549DFF solid !important;
    color: inherit;
    /*background-color: #549DFF;*/
    background-color: rgb(251, 251, 252);
    font-weight: bold;
  }

  .empty-create-btn {
    cursor: pointer;
  }

  .dashboard-workspace-name {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .dd-workspace-name {
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
