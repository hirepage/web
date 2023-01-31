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
        backgroundColor: this.$store.state.user.backgroundColor,
        bio: this.$store.state.user.bio,
        about: this.$store.state.user.about,
        avatarUrl: this.$store.state.user.avatarUrl,
        backgroundType: this.$store.state.user.backgroundType
      }
    },
    methods: {
      save (done) {
        this.$api.user.update({
          title: this.title,
          btnColor: this.color,
          backgroundColor: this.backgroundColor,
          bio: this.bio,
          about: this.about,
          avatarUrl: this.avatarUrl,
          backgroundType: this.backgroundType
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
  <div class="mb-5">
    <h2>
      Profile
    </h2>
    <b-card>
      <b-row>
        <b-col md="auto" order-md="1">
          <avatar-image-input :avatar-url.sync="avatarUrl"/>
        </b-col>
        <b-col order-md="0">
          <b-form-group label="Name">
            <b-form-input
              id="first-name-input"
              v-model="title"
              name="first-name"
              autocomplete="first-name"
              class="form-control"
              type="text"
              maxlength="64"
              autocapitalize="word"/>
          </b-form-group>

          <b-form-group label="Button Color">
            <color-input :color.sync="color"/>
          </b-form-group>

          <b-form-group label="Background Color">
            <color-input :color.sync="backgroundColor"/>
          </b-form-group>

          <b-form-group label="Background Type" v-slot="{ ariaDescribedby }">
            <b-form-radio
              v-model="backgroundType"
              :aria-describedby="ariaDescribedby"
              name="background-type"
              value="FLAT">
              Flat Color
            </b-form-radio>
            <b-form-radio
              v-model="backgroundType"
              :aria-describedby="ariaDescribedby"
              name="background-type"
              value="GRADIENT">
              Gradient
            </b-form-radio>
          </b-form-group>

          <b-form-group label="Headline">
            <b-form-textarea
              v-model="bio"
              type="text"
              autocapitalize="word"/>
          </b-form-group>
        </b-col>
      </b-row>

      <loading-button
        variant="primary"
        @click="save">
        Update
      </loading-button>
    </b-card>

    <social-links class="mt-5"/>


    <div class="form-group has-feedback">
      <h2>
        About
      </h2>
      <p class="mb-2" style="opacity: 0.7">
        Add content to your page using markdown syntax.
      </p>
      <b-form-textarea
        v-model="about"
        :rows="5"
        autocapitalize="word"/>
    </div>

    <loading-button
      variant="primary"
      @click="save">
      Update
    </loading-button>
  </div>
</template>
