<script>
  export default {
    props: {
      fixed: {
        type: Boolean,
        default: true
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
  <b-navbar class="hirepage-header" :style="headerStyle">
    <b-container>
      <b-navbar-brand to="/" style="text-decoration: none; font-weight: 400; font-size: 20px">
        <b-row no-gutters align-v="center">
          <b-col>
            <b-img src="/favicon.png" height="26"/>
          </b-col>
          <b-col class="pl-2 pt-1">
            Hirepage
          </b-col>
        </b-row>
      </b-navbar-brand>

      <b-navbar-nav
        class="ml-auto"
        left>
        <div>
          <b-navbar-nav>
            <b-nav-item to="/login" class="d-none d-md-flex">
              Log in
            </b-nav-item>
            <b-nav-item to="/register">
              Sign up free
            </b-nav-item>
          </b-navbar-nav>
        </div>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<style scoped>

  .hirepage-header {
    margin: 12px 24px 0 24px;
    border-radius: 40px;
    padding: 0;
    z-index: 100;
    background-color: white;
    border: 1px solid #ececec;
  }

  .navbar-brand {
    padding-top: 16px !important;
    padding-left: 15px !important;
    padding-bottom: 22px !important;
    height: 66px !important;
  }

  .navbar-brand {
    padding-top: 16px !important;
    padding-bottom: 22px !important;
    height: 66px !important;
    margin-left: 0 !important;
  }

  @media (min-width: 767px) {
    .navbar-brand {
      padding-left: 16px;
    }
  }
</style>
