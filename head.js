function head () {
  const title = 'Talk to all of your clients from Slack'
  const description = 'Create channels where your clients can reply by email, create a MS Teams bridge, or join with their Slack.'
  const socialImageUrl = 'https://cdn.otechie.com/attachments/UfbU_qNsK/SocialImage.png'
  return {
    title: `ChatPass - ${title}`,
    script: [],
    meta: [
      {
        'charset': 'utf-8'
      },
      {
        name: 'slack-app-id',
        content: 'AAY68EJKB'
      },
      {
        name: 'robots',
        content: process.env.WEB_URL === 'https:///chatpass.io' ? 'all' : 'noindex'
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
        content: 'chat widget for consulting, chat widget for freelancing, live chat for consulting, live chat for freelancing, Slack chat widget, Slack live chat'
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
        content: 'https://otechie.com'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: socialImageUrl
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'ChatPass'
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
        content: '@otechie'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@dylangwight'
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
        content: 'ChatPass Logo'
      }
    ]
  }
}

module.exports = head
