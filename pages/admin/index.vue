<script>
  import AvatarImageInput from '@/components/AvatarImageInput'
  import ColorInput from '@/components/ColorInput'
  import SocialLinks from '@/components/SocialLinks'
  import WelcomeAlert from '@/components/WelcomeAlert'
  import BodySection from '@/components/BodySection'
  import ThemeSelector from '@/components/ThemeSelector'


  export default {
    layout: 'admin',
    components: {
      AvatarImageInput,
      ColorInput,
      SocialLinks,
      WelcomeAlert,
      BodySection,
      ThemeSelector
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
    mounted () {
      this.confirmEmail()
    },
    methods: {
      confirmEmail () {
        if (this.$route.query.confirmEmail) {
          this.$api.user.confirmEmail({ token: this.$route.query.confirmEmail }).then(data => {
            this.$toast.success(data.message)
            this.$router.replace(this.$route.path)
          }).catch(err => {
            this.$toast.error('Error confirming email')
          })
        }
      },
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
    <welcome-alert/>

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
              v-model="title"
              name="full-name"
              autocomplete="full-name"
              type="text"
              maxlength="64"
              autocapitalize="word"/>
          </b-form-group>

          <b-form-group label="Headline">
            <b-form-input
              v-model="bio"
              type="text"
              autocapitalize="word"/>
          </b-form-group>

          <theme-selector/>

          <b-row>
            <b-col md="6">
              <b-form-group label="Background Color">
                <color-input :color.sync="backgroundColor"/>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label="Button Color">
                <color-input :color.sync="color"/>
              </b-form-group>
            </b-col>
          </b-row>

          <b-form-group v-slot="{ ariaDescribedby }" label="Background Type">
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
        </b-col>
      </b-row>

      <loading-button
        variant="primary"
        @click="save">
        Update
      </loading-button>
    </b-card>

    <social-links class="mt-5"/>

    <body-section/>
  </div>
</template>

<style scoped>

</style>
