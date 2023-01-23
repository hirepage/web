<script>
  export default {
    data () {
      return {
        url: '',
        selected: null,
        options: [
          {
            value: null,
            text: 'Select Icon'
          },
          {
            value: {
              iconSet: 'fas',
              icon: 'envelope',
              name: 'Email',
              placeholder: 'mailto:yourname@company.com'
            },
            text: 'Email'
          }, {
            value: {
              iconSet: 'fab',
              icon: 'facebook',
              name: 'Facebook',
              placeholder: 'https://www.facebook.com/yourname/'
            },
            text: 'Facebook'
          }, {
            value: {
              iconSet: 'fab',
              icon: 'linkedin',
              name: 'LinkedIn',
              placeholder: 'https://www.linkedin.com/in/yourname/'
            },
            text: 'LinkedIn'
          }, {
            value: {
              iconSet: 'fab',
              icon: 'twitter',
              name: 'Twitter',
              placeholder: 'https://twitter.com/username'
            },
            text: 'Twitter'
          }, {
            value: {
              iconSet: 'fab',
              icon: 'youtube',
              name: 'YouTube',
              placeholder: 'https://www.youtube.com/channel/yourchannel'
            },
            text: 'YouTube'
          }, {
            value: {
              iconSet: 'fab',
              icon: 'instagram',
              name: 'Instagram',
              placeholder: 'https://www.instagram.com/username/'
            },
            text: 'Instagram'
          }]
      }
    },
    methods: {
      addIcon (done) {
        return this.$api.user.addLink({
          url: this.url,
          iconSet: this.selected.iconSet,
          icon: this.selected.icon
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
    title="Add Icon"
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
                :icon="[selected.iconSet, selected.icon]"/>
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
          :placeholder="selected ? selected.placeholder : null"
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
        Add Icon
      </loading-button>
    </div>
  </b-modal>
</template>
