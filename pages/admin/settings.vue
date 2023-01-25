<script>
  export default {
    layout: 'admin',
    data () {
      return {
        username: this.$store.state.user.username,
        email:  this.$store.state.user.email
      }
    }
  }
</script>

<template>
  <div>
    <h2>
      Settings
    </h2>
    <b-card>
      <b-form-group>
        <label>
          Username
        </label>
        <b-input-group
          prepend="hire.page/"
          class="username-input-group">
          <b-form-input
            v-model="username"
            autofocus
            maxlength="64"/>
        </b-input-group>
      </b-form-group>

      <b-form-group>
        <label>
          Email
        </label>
        <b-form-input
          v-model="email"
          autofocus
          maxlength="64"/>
      </b-form-group>

      <loading-button variant="primary">
        Save
      </loading-button>
    </b-card>
  </div>
</template>
