<script>
  export default {
    methods: {
      logout () {
        this.$analytics.track('Logout')
        this.$api.auth.logout()
        this.$bvModal.hide('logoutModal')
        this.$router.push('/')
      },
      cancel () {
        this.$bvModal.hide('logoutModal')
      }
    }
  }
</script>

<template>
  <b-modal
    id="logoutModal"
    title="Log Out"
    hide-footer>
    <div class="mb-5">
      <p>
        Are you sure you want to log out?
      </p>
    </div>

    <div class="text-right">
      <b-btn
        variant="default"
        @click="cancel">
        Cancel
      </b-btn>
      <loading-button
        ref="updateBtn"
        class="btn btn-danger btn-margin"
        @click="logout">
        Log Out
      </loading-button>
    </div>
  </b-modal>
</template>
