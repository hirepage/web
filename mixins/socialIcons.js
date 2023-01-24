import { find } from 'lodash'

const icons = [{
  id: 'EMAIL',
  iconSet: 'fas',
  icon: 'envelope',
  name: 'Email',
  placeholder: 'yourname@company.com'
}, {
  id: 'FACEBOOK',
  iconSet: 'fab',
  icon: 'facebook',
  name: 'Facebook',
  placeholder: 'https://www.facebook.com/yourname/'
}, {
  id: 'LINKEDIN',
  iconSet: 'fab',
  icon: 'linkedin',
  name: 'LinkedIn',
  placeholder: 'https://www.linkedin.com/in/yourname/'
}, {
  id: 'TWITTER',
  iconSet: 'fab',
  icon: 'twitter',
  name: 'Twitter',
  placeholder: 'https://twitter.com/username'
}, {
  id: 'YOUTUBE',
  iconSet: 'fab',
  icon: 'youtube',
  name: 'YouTube',
  placeholder: 'https://www.youtube.com/channel/yourchannel'
}, {
  id: 'INSTAGRAM',
  iconSet: 'fab',
  icon: 'instagram',
  name: 'Instagram',
  placeholder: 'https://www.instagram.com/username/'
}]

export default {
  computed: {
    options () {
      return [
        {
          value: null,
          text: 'Select Icon'
        },
        {
          value: 'EMAIL',
          text: 'Email'
        }, {
          value: 'FACEBOOK',
          text: 'Facebook'
        }, {
          value: 'LINKEDIN',
          text: 'LinkedIn'
        }, {
          value: 'TWITTER',
          text: 'Twitter'
        }, {
          value: 'YOUTUBE',
          text: 'YouTube'
        }, {
          value: 'INSTAGRAM',
          text: 'Instagram'
        }]
    }
  },
  methods: {
    getPlaceholder (id) {
      return id ? find(icons, { id: id }).placeholder : null
    },
    getIcon (id) {
      const icon = find(icons, { id: id })
      return icon ? [icon.iconSet, icon.icon] : null
    }
  }
}
