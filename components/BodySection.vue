<script>
  export default {
    data () {
      return {
        about: this.$store.state.user.about,
        customToolbar: [
          [{ header: '1' }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }]
        ]
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    watch: {
      user () {
        this.about = this.user.about
      }
    },
    methods: {
      save (done) {
        this.$api.user.update({ about: this.about }).then(user => {
          this.$store.dispatch('updatePreview')
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error saving info')
        }).finally(done)
      }
    }
  }
</script>

<template>
  <client-only>
    <div>
      <h2>
        Info
      </h2>
      <p class="mb-2" style="opacity: 0.7">
        Describe your services, explain your expertise, or answer common questions.
      </p>

        <vue-editor v-model="about" :editor-toolbar="customToolbar" style="height: 400px;"/>
      <loading-button @click="save" style="margin-top: 60px;" variant="primary">
        Save
      </loading-button>
    </div>
  </client-only>
</template>

<style scoped>

</style>
