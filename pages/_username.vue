<script>
  import meta from '@/mixins/meta'
  import socialIcons from '@/mixins/socialIcons'
  import MarkdownText from '@/components/MarkdownText'
  import SharePageModal from '@/components/modals/SharePageModal'
  import PageForm from '@/components/PageForm'

  export default {
    components: { MarkdownText, PageForm, SharePageModal },
    mixins: [meta, socialIcons],
    computed: {
      wrapperStyle () {
        const background = this.user.backgroundType === 'GRADIENT' ? `background: linear-gradient(${this.user.backgroundColor}, ${this.user.backgroundColor2})` : `background-color: ${this.user.backgroundColor}`
        return `${background}; --theme-color: ${this.user.btnColor}; --text-color: ${this.user.textColor}; --light-text-color: ${this.user.lightTextColor}; --background-color: ${this.user.backgroundColor};`
      }
    },
    asyncData ({ params, app, error }) {
      return app.$api.user.getUser(params.username).then(user => {
        return { user }
      }).catch(err => {
        error(err)
      })
    }
  }
</script>

<template>
  <div class="setup-wrapper" :style="wrapperStyle">
    <share-page-modal :user="user"/>
    <b-row
      align-h="center"
      align-v="center"
      style="height: 100%;"
      no-gutters>
      <b-col
        class="card-col"
        sm="10"
        md="8"
        lg="6"
        xl="5">
        <b-btn
          v-b-modal.sharePageModal
          class="share-btn"
          variant="default"
          pill>
          <font-awesome-icon
            class="concern-icon"
            height="12"
            width="12"
            :icon="['fal', 'arrow-up-from-square']"/>
        </b-btn>
        <div class="setup-cell">
          <div class="logo-wrapper">
            <b-img
              class="logo-img"
              :src="user.avatarUrl"
              :alt="`${user.title}'s Profile Picture`"
              height="120"
              width="120"/>
          </div>

          <div class="text-center">
            <h1 class="semi-bold mb-1 mt-3 profile-title">
              {{ user.title }}
            </h1>
            <p class="profile-subtitle">
              {{ user.bio }}
            </p>

            <div v-if="user.links.length" class="form-group social-icons">
              <div
                v-for="link in user.links"
                :key="link.id"
                class="social-icon">
                <a
                  :href="getUrl(link)"
                  target="_blank">
                  <font-awesome-icon
                    size="lg"
                    fixed-width
                    width="18"
                    height="18"
                    :icon="getIcon(link.icon)"/>
                </a>
              </div>
            </div>
          </div>

          <markdown-text :text="user.about" class="mt-4"/>

          <page-form :user="user"/>
        </div>
      </b-col>
    </b-row>
    <div class="text-center w-100 mt-5">
      <a href="/" :style="`color: ${user.textColor};`" class="hirepage-link">
        Powered by Hirepage
      </a>
    </div>
  </div>
</template>

<style scoped>

  .profile-title {
    font-size: 36px;
  }

  .profile-subtitle {
    opacity: 0.7;
  }

  .form-label {
    text-transform: capitalize;
    font-size: 13px;
    /*letter-spacing: 2px;*/
    font-weight: 500;
  }

  .logo-img {
    /*border: 4px solid white;*/
    border-radius: 50%;
    background-color: white;
    /*border: 1px solid rgba(0, 0, 0, 0.125);*/
  }

  .logo-wrapper {
    /*position: absolute;*/
    /*top: -48px;*/
    left: 0;
    right: 0;
    text-align: center;
  }

  .setup-wrapper {
    min-height: 100vh;
    padding: 0 0 100px 0;
    /*background-color: rgb(250, 250, 252);*/
  }

  .setup-cell {
    /*background-color: white;*/
    border-radius: 20px;
    /*border: 1px solid rgba(0, 0, 0, 0.125);*/
    padding: 24px;
    padding-top: 56px;
    position: relative;
  }

  .color-bg {
    display: none;
  }

  .setup-col {
    background-color: white;
    position: relative;
  }

  .share-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    height: 40px;
    width: 40px;
    z-index: 500;
  }

  .social-icons {
    margin: auto;
    /*width: 100%;*/
    max-width: 160px;
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }

  .social-icon {
    border-radius: 20px;
    /*border: #ccc solid 1px !important;*/
    margin: 0 8px;
    padding: 6px;
    background-color: var(--background-color);
  }

  .social-icon a {
    color: white;
    /*opacity: 0.7;*/
  }

  .social-icon a:hover {
    opacity: 0.7;
  }

  .hirepage-link {
    opacity: 0.7;
  }

  .hirepage-link:hover {
    opacity: 0.9;
  }

  .card-col {
    background-color: rgba(255, 255, 255, 1);
    /*background-color: #181818;*/
    box-shadow: rgb(0 0 0 / 19%) 0rem 1.75rem 3.125rem 0.25rem;
    border-radius: 44px;
    margin-top: 64px;
  }

</style>
