<script>
  import InfoSidebar from '@/components/InfoSidebar'
  import FeaturesPopover from '@/components/FeaturesPopover'

  export default {
    components: { InfoSidebar, FeaturesPopover },
    props: {
      fixed: {
        type: Boolean,
        default: false
      },
      hideBorder: {
        type: Boolean,
        default: false
      },
      dark: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        scrolled: false
      }
    },
    computed: {
      headerStyle () {
        const bg = this.dark ? 'background-color: transparent; color: white;' : ''
        const border = (!this.hideBorder || this.scrolled) && !this.dark ? 'border-bottom: solid #ececec 1px;' : ''
        const position = this.fixed ? 'position: fixed; top:0; right: 0; left: 0;' : ''
        return bg + border + position
      }
    },
    created () {
      if (process.client) {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY > 1
      }
    }
  }
</script>

<template>
  <div style="height: 66px;">
    <info-sidebar/>
    <b-navbar class="otechie-header" :style="headerStyle">
      <b-container>
        <b-navbar-brand to="/">
          <b-img src="/ChatPassText.svg" height="20"/>
        </b-navbar-brand>
        <b-navbar-nav
          class="ml-auto"
          left>
          <div>
            <b-btn v-b-toggle.sidebar-1 variant="link" class="details-btn d-md-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </b-btn>
            <nuxt-link
              id="popover-target-1"
              class="header-link d-none d-md-inline"
              :to="$route.fullPath">
              <span>Features<font-awesome-icon
                icon="chevron-down"
                width="8"
                height="12"
                size="xs"
                style="font-size: 10px; margin-left: 6px; margin-bottom: 1px;"/></span>
            </nuxt-link>
            <features-popover/>

            <nuxt-link
              class="header-link d-none d-md-inline"
              to="/#pricing">
              <span>Pricing</span>
            </nuxt-link>
            <span>
              <nuxt-link
                class="header-link d-none d-md-inline"
                to="/waitlist">
                <span>Join Beta Test</span>
              </nuxt-link>
            </span>
          </div>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </div>
</template>

<style scoped>

  .otechie-header {
    padding: 0;
    z-index: 100;
    background-color: white;
  }

  .navbar {
    padding: 0;
    margin-bottom: 0;
  }

  .navbar-brand {
    padding-top: 16px !important;
    padding-left: 15px !important;
    padding-bottom: 22px !important;
    height: 66px !important;
  }

  .header-link {
    color: inherit;
    text-decoration: none;
    font-size: 16px;
    padding: 32px 16px 22px 16px;
  }

  .header-link:hover {
    text-decoration: underline;
  }

  .details-btn {
    margin-right: 15px;
    text-decoration: none;
    color: inherit !important;
    user-select: none;
    padding-bottom: 10px;
  }
</style>
