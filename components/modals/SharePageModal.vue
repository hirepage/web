<script>

  export default {
    computed: {
      pageUrl () {
        return `https://hire.page/${this.$store.state.user.username}`
      },
      platforms () {
        return [{
          name: 'Share on Facebook',
          image: '/socials/facebook.svg',
          url: `https://www.facebook.com/sharer.php?u=${this.pageUrl}`
        }, {
          name: 'Share on LinkedIn',
          image: '/socials/linkedin.svg',
          url: `https://www.linkedin.com/sharing/share-offsite/?url=${this.pageUrl}`
        }, {
          name: 'Share on Twitter',
          image: '/socials/twitter.svg',
          url: `https://twitter.com/intent/tweet?text=I%27ve%20just%20set%20up%20my%20Hirepage%20-%20check%20it%20out%20here!%20${this.pageUrl}`
        }, {
          name: 'Share via WhatsApp',
          image: '/socials/whatsapp.svg',
          url: `https://api.whatsapp.com/send/?text=I%27ve+just+set+up+my+Hirepage+-+check+it+out+here%21+${this.pageUrl}&type=custom_url&app_absent=0`
        }, {
          name: 'Share via Messenger',
          image: '/socials/messenger.svg',
          url: `https://www.messenger.com/new`
        }, {
          name: 'Share via Email',
          image: '/socials/email.svg',
          url: `mailto:?subject=Check out my Hirepage!&body=I've just set up my Hirepage - check it out here! ${this.pageUrl}`
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
    title="Share your Hirepage"
    hide-footer>
    <div>
      <p>
        Get more clients by sharing your Hirepage everywhere.
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
