function head () {
  const title = 'CoolWall'
  const description = 'Never get bored of your wallpaper again'
  const socialImageUrl = 'https://images.wallpaperscraft.com/image/single/stars_sky_space_113629_1280x720.jpg'
  return {
    title: `CoolWall - ${description}`,
    script: [],
    meta: [
      {
        'charset': 'utf-8'
      },
      {
        name: 'robots',
        content: process.env.WEB_URL === 'https://coolwallpapers.app' ? 'all' : 'noindex'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'chill wallpapers, cool wallpapers, chill backgrounds, cute wallpapers for teens, cute wallpapers for computer, cute wallpapers for girls aesthetic, cute wallpapers, cute backgrounds'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://hire.page'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: socialImageUrl
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'CoolWall'
      },
      {
        hid: 'twitter:title',
        name: 'og:title',
        content: title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@coolwallapp'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: socialImageUrl
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'CoolWall Logo'
      }
    ]
  }
}

module.exports = head
