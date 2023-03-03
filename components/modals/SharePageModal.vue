<script>
  import ClipboardJS from 'clipboard'

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
    data () {
      return {
        clipboard: null,
        copied: false
      }
    },
    beforeDestroy () {
      if (this.clipboard) {
        this.clipboard.destroy()
      }
    },
    methods: {
      shown () {
        this.clipboard = new ClipboardJS('.copy-btn', {
          container: document.getElementById('sharePageBody')
        })
        const self = this
        this.clipboard.on('success', function (e) {
          self.copied = true
          setTimeout(function () {
            self.copied = false
          }, 2000)
          e.clearSelection()
        })
        this.clipboard.on('error', function (e) {
          console.log('error', e)
        })
      },
      hidden () {
        if (this.clipboard) {
          this.clipboard.destroy()
        }
      }
    },
    computed: {
      title () {
        return this.self ? 'Share your Hirepage' : 'Share this Hirepage'
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
        return `${process.env.WEB_URL}/${this.user.username}`
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
      }
    }
  }
</script>

<template>
  <b-modal
    @shown="shown"
    @hidden="hidden"
    id="sharePageModal"
    ref="sharePageModal"
    :title="title"
    hide-footer>
    <div id="sharePageBody">
      <p>
        {{ subtitle }}
      </p>
      <b-card no-body class="mt-3">
        <b-list-group flush>
          <b-list-group-item
            class="copy-btn"
            data-clipboard-action="copy"
            :data-clipboard-text="pageUrl">
            <b-row align-v="center" no-gutters class="flex-nowrap">
              <b-col cols="auto" class="pr-2 semi-bold" style="width:36px;">
                <b-img src="/favicon.png" width="24" height="24"/>
              </b-col>
              <b-col>
                hire.page/{{ user.username }}
              </b-col>
              <b-col style="" cols="auto">
                <span v-if="copied" class="success-text">
                  Copied!
                </span>
                <span v-else>
                  Copy
                </span>
              </b-col>
            </b-row>
          </b-list-group-item>
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
