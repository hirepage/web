function head () {
  const title = 'Contact page for freelancers, consultants, and agencies | Hirepage'
  const description = 'Grow your service business with a professional contact form'
  const socialImageUrl = 'https://hire.page/landing-examples-padded.png'
  return {
    title: `Hirepage - ${title}`,
    script: [],
    meta: [
      {
        'charset': 'utf-8'
      },
      {
        name: 'robots',
        content: process.env.WEB_URL === 'https://hire.page' ? 'all' : 'noindex'
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
        content: 'hirepage, hire page, contact page consulting, contact page freelancing, contact form consulting, contact form freelancing, link in bio freelance, link in bio consultant'
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
        content: 'Hirepage'
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
        content: '@hirepage_'
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
        content: 'Hirepage Logo'
      }
    ]
  }
}

module.exports = head
