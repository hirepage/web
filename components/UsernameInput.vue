<script>
  import validator from 'validator'
  import { debounce } from 'lodash'

  export default {
    name: 'UsernameInput',
    props: {
      username: {
        type: String,
        default: null
      },
      register: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        usernameLocal: this.username,
        usernameValid: !this.register,
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
      checkUsername: debounce(function (value) {
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
            this.$emit('update:username', data.username)
          } else {
            this.$emit('update:username', null)
          }
        }).catch(err => {
          console.error(err)
          this.takenUsername = null
          this.usernameValid = false
          this.$toast.error('Error checking username')
          this.$emit('update:username', null)
        })
      }, 500)
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
        ref="usernameInput"
        v-model="usernameLocal"
        :class="{'is-invalid': usernameLocal && !usernameValid, 'is-valid': usernameValid && register}"
        :autofocus="register"
        maxlength="64"/>
    </b-input-group>
    <p v-if="(usernameValid || !usernameLocal) && register" class="help-block with-errors">
      Choose your Hirepage username. You can always change it later.
    </p>
    <p v-else-if="takenUsername" class="help-block with-errors">
      The username "{{ takenUsername }}" is already taken.
    </p>
    <p v-else-if="!usernameValid" class="help-block with-errors">
      Usernames must be at least 3 characters and only contain letters, numbers, underscores ("_") and periods (".")
    </p>
  </b-form-group>
</template>
