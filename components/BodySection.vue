<script>
  export default {
    data () {
      return {
        about: this.$store.state.user.about,
        customToolbar: [
          [{ header: '1' }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['image', 'link']
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
        About
      </h2>
      <vue-editor
        v-model="about"
        :editor-toolbar="customToolbar"
        style="height: 400px;"
        placeholder="Describe your services, explain your expertise, or answer common questions..."/>
      <loading-button style="margin-top: 60px;" variant="primary" @click="save">
        Save
      </loading-button>
    </div>
  </client-only>
</template>

<style scoped>

</style>
