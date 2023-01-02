const { resolve } = require('path')
const { Nuxt, Builder } = require('nuxt')
const test = require('ava')
const dotenv = require('dotenv')

dotenv.config()
process.env.NODE_ENV = 'test'

// Init Nuxt.js and create a server listening on localhost:4000
test.before('Init Nuxt.js', async (t) => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try {
    config = require(resolve(rootDir, 'nuxt.config.js'))
  } catch (e) {
  }
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  config.ssr = false
  const nuxt = new Nuxt(config)
  t.context.nuxt = nuxt // We keep a reference to Nuxt so we can close the server at the end of the test
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
}, 30000)

// Example of testing via dom checking
test('Landing page loads', async (t) => {
  const { nuxt } = t.context
  const { window } = await nuxt.renderAndGetWindow('http://localhost:4000')
  const mainTitle = window.document.querySelector('.main-title')
  t.not(mainTitle, null)
})

// Close server and ask nuxt to stop listening to file changes
test.after('Closing server and nuxt.js', (t) => {
  const { nuxt } = t.context
  nuxt.close()
})
