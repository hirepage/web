<script>
  import socialIcons from '/mixins/socialIcons'

  export default {
    mixins: [socialIcons],
    data () {
      return {
        url: '',
        selected: null
      }
    },
    methods: {
      addIcon (done) {
        return this.$api.user.addLink({
          url: this.url,
          icon: this.selected
        }).then(user => {
          this.selected = null
          this.url = ''
          this.$refs.addIconModal.hide()
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
    id="addIconModal"
    ref="addIconModal"
    title="Add Link"
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
    <div class="text-right">
      <b-btn
        variant="default"
        class="btn-margin"
        @click="$bvModal.hide('addIconModal')">
        Cancel
      </b-btn>
      <loading-button
        ref="createBtn"
        class="btn-primary"
        :disabled="!url || !selected"
        @click="addIcon">
        Add Link
      </loading-button>
    </div>
  </b-modal>
</template>
