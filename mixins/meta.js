import { get } from 'lodash'

export default {
  head () {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription
        },
        {
          name: 'profile:username',
          content: get(this.user, 'username')
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.metaTitle
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.metaDescription
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `${process.env.WEB_URL}${this.$route.path}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.avatarUrl
        },
        {
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          content: this.avatarUrl
        },
        {
          hid: 'twitter:title',
          name: 'og:title',
          content: this.metaTitle
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.metaDescription
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@hirepage'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.avatarUrl
        }
      ]
    }
  },
  computed: {
    metaName () {
      return get(this.user, 'title')
    },
    avatarUrl () {
      return get(this.user, 'avatarUrl')
    },
    metaDescription () {
      return get(this.user, 'bio')
    },
    metaTitle() {
      return `${get(this.user, 'title')} | Hirepage`
    }
  }
}
