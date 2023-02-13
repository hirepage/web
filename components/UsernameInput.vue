<script>
  import validator from 'validator'

  export default {
    name: 'UsernameInput',
    props: {
      username: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        usernameLocal: this.username,
        usernameValid: false,
        takenUsername: null
      }
    },
    watch: {
      usernameLocal () {
        // TODO: debounce this
        this.checkUsername()
      }
    },
    created () {
      this.checkUsername()
    },
    methods: {
      checkUsername () {
        if (!validator.isSlug(this.usernameLocal)) {
          this.takenUsername = null
          this.usernameValid = false
          this.$emit('update:username', null)
          return
        }
        this.usernameValid = true
        this.$api.user.checkUsername(this.usernameLocal).then(data => {
          this.usernameValid = data.available
          this.takenUsername = data.available ? null : data.username
          if (data.available) {
            console.log('update:username', data.username)
            this.$emit('update:username', data.username)
          } else {
            this.$emit('update:username', null)
          }
        })
      }
    }
  }
</script>

<template>
  <b-form-group>
    <label>
      Username
    </label>

    <b-input-group
      prepend="hire.page/"
      class="username-input-group">
      <b-form-input
        :class="{'is-invalid': usernameLocal && !usernameValid, 'is-valid': usernameValid}"
        ref="usernameInput"
        v-model="usernameLocal"
        autofocus
        maxlength="64"/>
    </b-input-group>
    <p v-if="usernameValid || !usernameLocal" class="help-block with-errors">
      Choose your Hirepage username. You can always change it later.
    </p>
    <p v-else-if="takenUsername" class="help-block with-errors">
      The username "{{ takenUsername }}" is already taken.
    </p>
    <p v-else class="help-block with-errors">
      Usernames may only contain letters, numbers, underscores ("_") and periods (".")
    </p>
  </b-form-group>
</template>

<style scoped>

</style>
