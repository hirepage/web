// index.js
const startTime = process.hrtime()
const { Nuxt } = require('nuxt-start')
const sls = require('serverless-http')
const binaryMimeTypes = require('./binaryMimeTypes')

const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)

let isReady = false

const readyPromise = nuxt.ready().then(() => {
  isReady = true
  const hrTime = process.hrtime(startTime)
  const hrTimeMs = ((hrTime[0] * 1e9) + hrTime[1]) / 1e6
  // eslint-disable-next-line no-console
  console.log(`λ Cold start took: ${hrTimeMs}ms`)
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.error('λ Error while initializing nuxt:', error)
  process.exit(1)
})

const handler = sls(nuxt.render, {
  binary: binaryMimeTypes
})

module.exports.nuxt = async function (event, context) {
  /** Immediate response for WarmUp plugin */
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUp - Lambda is warm!');
    return 'Lambda is warm!';
  }
  if (!isReady) {
    await readyPromise
  }
  return handler(event, context)
}
