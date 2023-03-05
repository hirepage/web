<script>
  import OptionsEditor from '/components/OptionsEditor'

  export default {
    components: {
      OptionsEditor
    },
    data () {
      return {
        type: 'text',
        label: '',
        isRequired: true,
        options: [],
        newOption: ''
      }
    },
    methods: {
      addIcon (done) {
        return this.$api.user.addField({
          type: this.type,
          label: this.label,
          options: this.options,
          isRequired: this.isRequired
        }).then(user => {
          this.type = 'text'
          this.label = ''
          this.options = []
          this.isRequired = true
          this.$refs.addFieldModal.hide()
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error adding question')
        }).finally(done)
      },
      addOption () {
        this.options.push(this.newOption)
        this.newOption = ''
      }
    }
  }
</script>

<template>
  <b-modal
    id="addFieldModal"
    ref="addFieldModal"
    title="Add Question"
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

      <options-editor v-if="type=== 'checkbox' || type === 'radio'" :options.sync="options"/>

    </form>
    <div class="text-right">
      <loading-button
        ref="createBtn"
        class="btn-primary"
        :disabled="!type || !label"
        @click="addIcon">
        Add Question
      </loading-button>
    </div>
  </b-modal>
</template>
