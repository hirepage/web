function head () {
  const title = 'Jeri AI'
  const description = 'Personalization engine as a service. Show your users with the content and products that they want. Developer-friendly, fully managed, and easily scalable without any hassle.'
  const socialImageUrl = 'https://cdn.otechie.com/attachments/u1sdNpVBb/image.png'
  return {
    title: 'Jeri AI - Personalization engine as a service',
    script: [],
    link: [{
      rel: 'canonical',
      href: 'https://www.jeri.ai'
    }],
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
        content: 'https://www.jeri.ai'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: socialImageUrl
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Jeri AI'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
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
        content: '@getjeri'
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
        content: 'Jeri AI Logo'
      }
    ]
  }
}

module.exports = head
