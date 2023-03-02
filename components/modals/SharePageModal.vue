<script>
  export default {
    props: {
      user: {
        type: Object,
        default: null,
        required: true
      },
      self: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      title () {
        return this.self ? 'Share your Hirepage' : `Share this Hirepage`
      },
      subtitle () {
        if (this.self) {
          return 'Get more clients by sharing and adding your link to your profiles.'
        } else {
          return `Help ${this.user.title} get more clients by sharing their Hirepage.`
        }
      },
      body () {
        if (this.self) {
          return `I've just finished setting up my Hirepage - check it out here ${this.pageUrl}`
        } else {
          return `Check out this Hirepage! - ${this.pageUrl}`
        }
      },
      pageUrl () {
        return `https://hire.page/${this.user.username}`
      },
      platforms () {
        return [{
          name: 'Share on LinkedIn',
          image: '/socials/linkedin.svg',
          url: `https://www.linkedin.com/sharing/share-offsite/?url=${this.pageUrl}`
        }, {
          name: 'Share on Twitter',
          image: '/socials/twitter.svg',
          url: `https://twitter.com/intent/tweet?text=${this.body}`
        }, {
          name: 'Share on Facebook',
          image: '/socials/facebook.svg',
          url: `https://www.facebook.com/sharer.php?u=${this.pageUrl}`
        }, {
          name: 'Share via WhatsApp',
          image: '/socials/whatsapp.svg',
          url: `https://api.whatsapp.com/send/?text=${this.body}&type=custom_url&app_absent=0`
        }, {
          name: 'Share via Messenger',
          image: '/socials/messenger.svg',
          url: 'https://www.messenger.com/new'
        }, {
          name: 'Share via Email',
          image: '/socials/email.svg',
          url: `mailto:?subject=Check out my Hirepage!&body=${this.body}`
        }]
      },
      methods: {
        logout () {
          this.$api.auth.logout()
          this.$bvModal.hide('logoutModal')
          this.$router.push('/login')
        },
        cancel () {
          this.$bvModal.hide('logoutModal')
        }
      }
    }
  }
</script>

<template>
  <b-modal
    id="sharePageModal"
    :title="title"
    hide-footer>
    <div>
      <p>
        {{ subtitle }}
      </p>
      <b-card no-body class="mt-2">
        <b-list-group flush>
          <b-list-group-item
            v-for="platform in platforms"
            :key="platform.name"
            target="_blank"
            :href="platform.url">
            <b-row align-v="center" no-gutters class="flex-nowrap">
              <b-col cols="auto" class="pr-2 semi-bold" style="width:36px;">
                <b-img :src="platform.image"/>
              </b-col>
              <b-col>
                {{ platform.name }}
              </b-col>
              <b-col style="opacity: 0.7" cols="auto" class="">
                <font-awesome-icon
                  icon="chevron-right"
                  size="sm"
                  width="24"
                  height="24"/>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </b-modal>
</template>
