<script>
  import OptionsEditor from '/components/OptionsEditor'

  export default {
    components: {
      OptionsEditor
    },
    props: {
      field: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
        type: 'text',
        label: '',
        isRequired: true
      }
    },
    watch: {
      field () {
        this.type = this.field.type
        this.label = this.field.label
        this.isRequired = this.field.isRequired
        this.options = this.field.options.slice()
      }
    },
    methods: {
      updateField (done) {
        return this.$api.user.editField(this.field.id, {
          type: this.type,
          label: this.label,
          isRequired: this.isRequired,
          options: this.options
        }).then(user => {
          this.type = 'text'
          this.label = ''
          this.isRequired = true
          this.options = []
          this.$refs.editFieldModal.hide()
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error updating question')
        }).finally(done)
      },
      removeField (done) {
        return this.$api.user.removeField(this.field.id).then(user => {
          this.type = 'text'
          this.label = ''
          this.isRequired = true
          this.options = []
          this.$refs.editFieldModal.hide()
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error removing question')
        }).finally(done)
      }
    }
  }
</script>

<template>
  <b-modal
    id="editFieldModal"
    ref="editFieldModal"
    title="Edit Question"
    :hide-footer="true">
    <form @keydown.enter.prevent="$refs.createBtn.click()">
      <b-row>
        <b-col cols="6">
          <b-form-group>
            <label>
              Type
            </label>
            <b-input-group>
              <b-form-select
                v-model="type"
                :options="[{ value: 'text', text: 'Short Answer' },
                           { value: 'textarea', text: 'Paragraph' },
                           { value: 'radio', text: 'Multiple Choice' },
                           { value: 'checkbox', text: 'Checkboxes' },
                           { value: 'date', text: 'Date' },
                           { value: 'email', text: 'Email' }]"/>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group>
            <label>
              Required
            </label>
            <b-form-checkbox v-model="isRequired" switch size="lg"/>
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-group>
        <label>
          Label
        </label>
        <b-form-input v-model="label" type="text"/>
      </b-form-group>
    </form>
    <options-editor v-if="type=== 'checkbox' || type === 'radio'" :options.sync="options"/>
    <b-row>
      <b-col>
        <loading-button
          variant="danger"
          @click="removeField">
          Remove
        </loading-button>
      </b-col>
      <b-col cols="auto">
        <loading-button
          ref="createBtn"
          variant="primary"
          :disabled="!label || !type"
          @click="updateField">
          Update Field
        </loading-button>
      </b-col>
    </b-row>
  </b-modal>
</template>
