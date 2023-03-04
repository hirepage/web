import { find } from 'lodash'

const icons = [{
  id: 'EMAIL',
  iconSet: 'fas',
  icon: 'envelope',
  name: 'Email',
  placeholder: 'yourname@company.com',
  prefix: 'mailto:'
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
}, {
  id: 'GITHUB',
  iconSet: 'fab',
  icon: 'github',
  name: 'Github',
  placeholder: 'https://github.com/username'
}, {
  id: 'PHONE',
  iconSet: 'far',
  icon: 'phone',
  name: 'Phone Number',
  prefix: 'tel:',
  placeholder: '555-666-7777'
}, {
  id: 'WEBSITE',
  iconSet: 'far',
  icon: 'link',
  name: 'Website',
  placeholder: 'https://your-site.com'
}, {
  id: 'CALENDAR',
  iconSet: 'far',
  icon: 'calendar-lines',
  name: 'Calendar',
  placeholder: 'https://calendly.com/username'
}, {
  id: 'STACKOVERFLOW',
  iconSet: 'fab',
  icon: 'stack-overflow',
  name: 'StackOverflow',
  placeholder: 'https://stackoverflow.com/users/username'
}, {
  id: 'REDDIT',
  iconSet: 'fab',
  icon: 'reddit-alien',
  name: 'Reddit',
  placeholder: 'https://www.reddit.com/user/username'
}, {
  id: 'DRIBBBLE',
  iconSet: 'fab',
  icon: 'dribbble',
  name: 'Dribbble',
  placeholder: 'https://dribbble.com/username'
}, {
  id: 'BEHANCE',
  iconSet: 'fab',
  icon: 'behance',
  name: 'Behance',
  placeholder: 'https://www.behance.net/username'
}]

export default {
  computed: {
    options () {
      return icons.map(i => {
        return {
          value: i.id,
          text: i.name
        }
      })
    }
  },
  methods: {
    getPlaceholder (id) {
      const icon = find(icons, { id: id })
      return icon ? icon.placeholder : null
    },
    getIcon (id) {
      const icon = find(icons, { id: id })
      return icon ? [icon.iconSet, icon.icon] : null
    },
    getUrl (link) {
      const icon = find(icons, { id: link.icon })
      if (!icon) {
        return '#'
      } else if (icon.prefix) {
        return `${icon.prefix}${link.url}`
      } else if (!link.url.startsWith('http://') && !link.url.startsWith('https://')) {
        return `https://${link.url}`
      } else {
        return link.url
      }
    }
  }
}
