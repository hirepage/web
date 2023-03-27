<script>
  import socialIcons from '/mixins/socialIcons'

  export default {
    mixins: [socialIcons],
    props: {
      icon: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
        url: '',
        selected: null
      }
    },
    watch: {
      icon () {
        this.url = this.icon.url
        this.selected = this.icon.icon
      }
    },
    methods: {
      updateIcon (done) {
        return this.$api.user.editLink(this.icon.id, {
          url: this.url,
          icon: this.selected
        }).then(user => {
          this.selected = null
          this.url = ''
          this.$refs.editIconModal.hide()
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error updating icon')
        }).finally(done)
      },
      removeIcon (done) {
        return this.$api.user.removeLink(this.icon.id).then(user => {
          this.selected = null
          this.url = ''
          this.$refs.editIconModal.hide()
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error removing icon')
        }).finally(done)
      }
    }
  }
</script>

<template>
  <b-modal
    id="editIconModal"
    ref="editIconModal"
    title="Edit Link"
    :hide-footer="true">
    <form @keydown.enter.prevent="$refs.createBtn.click()">
      <b-form-group label="Icon">
        <b-input-group>
          <b-input-group-prepend v-if="selected">
            <b-input-group-text>
              <font-awesome-icon
                size="lg"
                width="42.5"
                height="18"
                :icon="getIcon(selected)"/>
            </b-input-group-text>
          </b-input-group-prepend>
          <b-form-select v-model="selected" :options="options"/>
        </b-input-group>
      </b-form-group>
      <b-form-group :label="getLabel(selected)">
        <b-form-input
          v-model="url"
          :placeholder="getPlaceholder(selected)"
          type="url"/>
      </b-form-group>
    </form>
    <b-row>
      <b-col>
        <loading-button
          variant="danger"
          @click="removeIcon">
          Remove
        </loading-button>
      </b-col>
      <b-col cols="auto">
        <b-btn
          variant="default"
          class="btn-margin"
          @click="$bvModal.hide('editIconModal')">
          Cancel
        </b-btn>
        <loading-button
          ref="createBtn"
          variant="primary"
          :disabled="!url || !selected"
          @click="updateIcon">
          Update Link
        </loading-button>
      </b-col>
    </b-row>
  </b-modal>
</template>
