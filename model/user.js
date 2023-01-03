const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const timestamp = require('mongoose-timestamp')

class UserClass {
  get fullName () {
    return this.lastName ? `${this.firstName} ${this.lastName}` : `${this.firstName}`
  }
}

const schema = mongoose.Schema({
  object: { type: String, default: 'User', required: true },
  firstName: { type: String, required: true, default: 'New Client' },
  lastName: { type: String, default: '' },
  avatarUrl: { type: String, required: true },
  email: { type: String, required: true }
}, { toJSON: { virtuals: true } })

schema.plugin(autopopulate)
schema.plugin(timestamp)
schema.loadClass(UserClass)
module.exports = mongoose.model('User', schema)
