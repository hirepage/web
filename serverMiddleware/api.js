const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const RateLimit = require('express-rate-limit')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const http = require('http')
const helmet = require('helmet')
const User = require('../model/user')

const app = express()

app.use(helmet())
app.enable('trust proxy')
app.use(new RateLimit({
  windowMs: 60 * 1000,
  max: 1000,
  delayMs: 0
}))

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(morgan('common'))
app.use(cookieParser())

app.use(async (req, res, next) => {
  const authorization = req.headers.authorization
  if (!authorization) return next()
  try {
    const token = authorization.replace(/^bearer /gi, '')
    req.uid = jwt.verify(token, process.env.SESSION_SECRET)
    next()
  } catch (err) {
    console.error(err)
    res.clearCookie('auth')
    res.status(401).send('Invalid Token...')
  }
})

app.get('/user', (req, res, next) => {
  (async () => {
    var user = await User.findOne({ email: 'dylan@otechie.com' })
    if (!user) {
      user = await User.create({
        firstName: 'Dylan',
        lastName: 'Wight',
        bio: 'Technical Consultant',
        avatarUrl: 'https://cdn.otechie.com/attachments/0cWnI9rYN/profile.png',
        email: 'dylan@otechie.com',
        username: 'dylan'
      })
    }
    res.json(user)
  })().catch(next)
})


app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message })
})

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  sslValidate: false
})

module.exports = app
