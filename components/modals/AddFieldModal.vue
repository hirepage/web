<script>
  import socialIcons from '/mixins/socialIcons'

  export default {
    mixins: [socialIcons],
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
          this.$toast.error('Error adding field')
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
              <b-form-select v-model="type" :options="['text', 'email', 'number', 'url', 'textarea', 'radio', 'checkbox']"/>
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

      <b-form-group v-if="type === 'radio' || type === 'checkbox'">
        <b-form-group label="Options" v-slot="{ ariaDescribedby }">
          <b-form-radio v-for="option in options" :key="option" v-model="selected" :aria-describedby="ariaDescribedby"
                        name="some-radios" value="A">
            {{ option }}
          </b-form-radio>
        </b-form-group>

        <b-input-group>
          <b-form-input placeholder="New Option" v-model="newOption"></b-form-input>
          <b-input-group-append>
            <b-btn @click="addOption">
              Add
            </b-btn>
          </b-input-group-append>
        </b-input-group>

      </b-form-group>
    </form>
    <div class="text-right">
      <b-btn
        variant="default"
        class="btn-margin"
        @click="$bvModal.hide('addFieldModal')">
        Cancel
      </b-btn>
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
