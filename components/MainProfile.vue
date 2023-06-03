<script>
  import meta from '@/mixins/meta'
  import socialIcons from '@/mixins/socialIcons'
  import MarkdownText from '@/components/MarkdownText'
  import SharePageModal from '@/components/modals/SharePageModal'
  import PageForm from '@/components/PageForm'
  import VueHorizontal from 'vue-horizontal'

  export default {
    components: { MarkdownText, PageForm, SharePageModal, VueHorizontal },
    mixins: [meta, socialIcons],
    props: {
      user: {
        type: Object,
        default: null,
        required: true
      }
    },
    computed: {
      backgroundStyle () {
        switch (this.user.backgroundType) {
          // case 'IMAGE':
          //   return `background-image: url(${this.user.backgroundImageUrl}); background-color: ${this.user.backgroundColor};`
          // case 'GRADIENT':
          //   return `background: linear-gradient(${this.user.backgroundColor}, ${this.user.backgroundColor2}); background-color: ${this.user.backgroundColor};`
          default:
            return `background-color: ${this.user.backgroundColor};`
        }
      },
      themeStyle () {
        return `--theme-color: ${this.user.btnColor}; --text-color: ${this.user.textColor}; --light-text-color: ${this.user.lightTextColor}; --background-color: ${this.user.backgroundColor};`
      },
      videos () {
        return [
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd'
        ]
      }
    }
  }
</script>

<template>
  <div class="profile-wrapper" :style="themeStyle">

    <div class="background-wrapper" :style="backgroundStyle">
      <!--      <div v-if="user.backgroundType === 'IMAGE'" class="darken-end"/>-->
    </div>
    <share-page-modal :user="user"/>
    <div :style="backgroundStyle" class="mobile-bg">
    </div>
    <!--    <b-row-->
    <!--      align-h="center"-->
    <!--      align-v="center"-->
    <!--      style="height: 100%;"-->
    <!--      class="profile-row"-->
    <!--      no-gutters>-->
    <!--      <b-col-->
    <!--        class="card-col" cols="auto">-->


    <!--    <b-btn-->
    <!--      v-b-modal.sharePageModal-->
    <!--      class="share-btn"-->
    <!--      variant="default"-->
    <!--      pill>-->
    <!--      <b-img src="/arrow-up-from-square-light.svg" height="12" width="12" style="margin-bottom: 2px;"/>-->
    <!--    </b-btn>-->
    <div class="setup-cell">
      <b-container class="mt-5">
        <b-row align-v="center">
          <b-col>
            <div class="logo-wrapper">
              <b-img
                ref="logoImg"
                class="logo-img"
                :src="user.avatarUrl"
                :alt="`${user.title}'s Profile Picture`"
                height="120"
                width="120"/>
            </div>
            <!--          </b-col>-->
            <!--          <b-col class="">-->
            <div class="text-left">
              <h1 class="semi-bold profile-title">
                {{ user.title }}
              </h1>
              <p class="profile-subtitle">
                {{ user.bio }}
              </p>


              <div v-if="user.links.length && false" class="form-group social-links">
                <b-btn
                  v-for="link in user.links"
                  :key="link.id"
                  class="social-link"
                  variant="default"
                  pill
                  :href="getUrl(link)"
                  target="_blank">
                  <font-awesome-icon
                    class="social-icon"
                    size="lg"
                    fixed-width
                    width="19"
                    height="15"
                    :icon="getIcon(link.icon)"/>
                </b-btn>
              </div>
            </div>
          </b-col>
          <b-col cols="auto" class="mt-5 test-right">
            <b-form-group class="mt-3">
              <b-btn variant="default" pill class="mr-2">
                View Resume
              </b-btn>
              <b-btn variant="primary" pill>
                Send Message
              </b-btn>
            </b-form-group>
          </b-col>
        </b-row>

<!--        <b-row class="mt-4">-->
          <vue-horizontal>
            <div
              md="3"
              cols="6"
              style="width: 25%;"
              v-for="video in videos"
              :key="video"
              class="my-3 mx-2">
              <div style="position: relative; padding-bottom: 62.5%; height: 0; border-radius: 12px; overflow: clip">
                <iframe :src="video" frameborder="0"
                        webkitallowfullscreen mozallowfullscreen allowfullscreen
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
              </div>
            </div>
          </vue-horizontal>
<!--        </b-row>-->
      </b-container>


      <!--          <markdown-text :text="user.about" class="mt-4"/>-->

      <!--          <page-form :user="user"/>-->


      <div class="w-100 text-center mt-5 mb-5 d-md-none">
        <a href="/" class="hirepage-link" style="color: inherit; opacity: 0.7;">
          Powered by Hirepage
        </a>
      </div>
    </div>
    <!--      </b-col>-->
    <!--    </b-row>-->
    <div class="powered-by-wrapper">
      <a href="https://hire.page" target="_blank" class="hirepage-link">
        Powered by Hirepage
      </a>
    </div>
  </div>
</template>

<style scoped>

  .profile-row {
    /*margin: 0 0.5rem;*/
  }

  .darken-end {
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 500px;
  }

  .profile-title {
    font-size: 26px;
  }

  .profile-subtitle {
    opacity: 0.7;
  }

  .form-label {
    text-transform: capitalize;
    font-size: 13px;
    font-weight: 500;
  }

  .logo-img {
    border-radius: 50%;
    background-color: white;
    border: 4px solid white;
  }

  .logo-wrapper {
    left: 0;
    right: 0;
    text-align: left;
  }

  .background-wrapper {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: none;
  }

  .setup-cell {
    border-radius: 20px;
    padding: 24px;
    padding-top: 0px;
    position: relative;
  }

  .share-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    height: 40px;
    width: 40px;
    z-index: 500;
  }

  .social-links {
    margin: auto;
    max-width: 160px;
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }

  .social-link {
    border-radius: 20px;
    border: #ccc solid 1px !important;
    margin: 0 8px;
    padding: 7px;
  }

  .social-icon {
    opacity: 0.7;
  }

  .social-link a:hover {
    opacity: 0.7;
  }

  .hirepage-link {
    color: var(--text-color);
    opacity: 0.99;
  }

  .hirepage-link:hover {
    opacity: 0.7;
  }

  .card-col {
    max-width: 100%;
    background-color: white;
    z-index: 10;
  }

  .powered-by-wrapper {
    display: none;
  }

  .mobile-bg {
    height: 150px;
    margin-bottom: -100px;
    background-repeat: no-repeat;
  //background-attachment: fixed; //background-position: center; background-size: cover;
  }

  @media (min-width: 1768px) {
    .card-col {
      width: 650px;
    }

    .share-btn {
      position: absolute;
      top: 24px;
      right: 24px;
      height: 40px;
      width: 40px;
      z-index: 500;
    }

    .setup-cell {
      padding-top: 64px;
    }

    .mobile-bg {
      display: none;
    }

    .card-col {
      margin-top: 48px;
      border-radius: 44px;
      box-shadow: rgb(0 0 0 / 25%) 0rem 1.75rem 3.125rem 0.25rem;
    }

    .powered-by-wrapper {
      display: block;
      width: 100%;
      margin-top: 4rem;
      text-align: center;
    }

    .profile-wrapper {
      padding: 0 0 48px 0;
    }

    .background-wrapper {
      display: block;
    }
  }
</style>
