const {model, Schema} = require('mongoose')

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String,
    default: "USER"
  },
  created: Date
}, { autoIndex: true })
module.exports = model('user', userSchema)
