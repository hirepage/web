<script>
  export default {
    data () {
      return {
        title: '',
        body: ''
      }
    },
    methods: {
      addSection (done) {
        const sections = this.$store.state.user.sections
        sections.push({
          title: this.title,
          body: this.body
        })
        return this.$api.user.update({
          sections: this.sections
        }).then(user => {
          this.title = ''
          this.body = ''
          this.$refs.addSectionModal.hide()
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error adding section')
        }).finally(done)
      }
    }
  }
</script>

<template>
  <b-modal
    id="addSectionModal"
    ref="addSectionModal"
    title="Add Info Section"
    :hide-footer="true">
    <div>
      <b-form-group>
        <label>
          Title
        </label>
        <b-form-input v-model="title" type="text" autofocus/>
      </b-form-group>

      <b-form-group>
        <label>
          Body
        </label>
        <b-form-textarea v-model="body" :rows="5" type="text"/>
      </b-form-group>
    </div>

    <div class="text-right">
      <b-btn
        variant="default"
        class="btn-margin"
        @click="$bvModal.hide('addSectionModal')">
        Cancel
      </b-btn>
      <loading-button
        ref="createBtn"
        class="btn-primary"
        :disabled="!title || !body"
        @click="addSection">
        Add Section
      </loading-button>
    </div>
  </b-modal>
</template>
