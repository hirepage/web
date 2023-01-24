<script>
  import AvatarImageInput from '@/components/AvatarImageInput'
  import ColorInput from '@/components/ColorInput'
  import SocialLinks from '@/components/SocialLinks'

  export default {
    layout: 'admin',
    components: {
      AvatarImageInput,
      ColorInput,
      SocialLinks
    },
    data () {
      return {
        title: this.$store.state.user.title,
        color: this.$store.state.user.btnColor,
        bio: this.$store.state.user.bio,
        avatarUrl: this.$store.state.user.avatarUrl
      }
    },
    methods: {
      save (done) {
        this.$api.user.update({
          title: this.title,
          btnColor: this.color,
          bio: this.bio,
          avatarUrl: this.avatarUrl
        }).then(user => {
          this.$store.dispatch('updatePreview')
        }).catch(err => {
          this.$toast.error('Error updating profile')
        }).finally(done)
      }
    }
  }
</script>

<template>
  <div>
    <h2>
      Profile
    </h2>
    <b-card>
      <b-row>
        <b-col md="auto" order-md="1">
          <avatar-image-input :avatar-url.sync="avatarUrl"/>
        </b-col>
        <b-col order-md="0">
          <div class="form-group has-feedback">
            <label>
              Profile Title
            </label>
            <b-form-input
              id="first-name-input"
              v-model="title"
              name="first-name"
              autocomplete="first-name"
              class="form-control"
              type="text"
              maxlength="64"
              autocapitalize="word"/>
          </div>

          <color-input :color.sync="color"/>

          <div class="form-group has-feedback">
            <label>
              Bio
            </label>
            <b-form-textarea
              v-model="bio"
              name="last-name"
              autocomplete="last-name"
              class="form-control"
              type="text"
              maxlength="64"
              autocapitalize="word"/>
          </div>

          <loading-button
            variant="primary"
            @click="save">
            Update
          </loading-button>
        </b-col>
      </b-row>
    </b-card>

    <social-links class="mt-5"/>
  </div>
</template>
