function head () {
  const title = 'Jeri'
  const description = 'Show your users with the content and products that they want. Developer-friendly, fully managed, and easily scalable without any hassle.'
  const socialImageUrl = 'https://images.wallpaperscraft.com/image/single/stars_sky_space_113629_1280x720.jpg'
  return {
    title: `Jeri - Personalization engine as a service`,
    script: [],
    meta: [
      {
        'charset': 'utf-8'
      },
      {
        name: 'robots',
        content: 'all'
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
        content: 'personalization engine, content personalization engine, product personalization engine, recommendation system, personalization engine solution, recommendation engine, recommendation system'
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
        content: 'CoolWallpapers'
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
        content: 'CoolWallpapers Logo'
      }
    ]
  }
}

module.exports = head
