const {model, Schema, Types} = require('mongoose')

const ratingSchema = new Schema({
  rate: Number,
  userId: {
    type: Types.ObjectId,
    ref: 'user'
  },
  deviceId: {
    type: Types.ObjectId,
    ref: 'device'
  }
})
module.exports = model('rating', ratingSchema)
