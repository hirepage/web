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
      addIcon (done) {
        return this.$api.user.editLink(this.icon.id, {
          url: this.url,
          icon: this.selected
        }).then(user => {
          this.selected = null
          this.url = ''
          this.$refs.editIconModal.hide()
        }).catch(err => {
          console.error(err)
          this.$toast.error('Error adding icon')
        }).finally(done)
      }
    }
  }
</script>

<template>
  <b-modal
    id="editIconModal"
    ref="editIconModal"
    title="Edit Icon"
    :hide-footer="true">
    <form @keydown.enter.prevent="$refs.createBtn.click()">
      <b-form-group>
        <label>
          Icon
        </label>
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
      <b-form-group>
        <label>
          Url
        </label>
        <b-form-input
          v-model="url"
          :placeholder="getPlaceholder(selected)"
          type="url"/>
      </b-form-group>
    </form>
    <div class="text-right">
      <b-btn
        variant="default"
        class="btn-margin"
        @click="$bvModal.hide('editIconModal')">
        Cancel
      </b-btn>
      <loading-button
        ref="createBtn"
        class="btn-primary"
        :disabled="!url || !selected"
        @click="addIcon">
        Update Icon
      </loading-button>
    </div>
  </b-modal>
</template>
