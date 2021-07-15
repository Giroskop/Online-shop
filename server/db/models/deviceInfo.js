const {model, Schema, Types} = require('mongoose')

const deviceInfoSchema = new Schema({
  title: String,
  description: String,
  deviceId: {
    type: Types.ObjectId,
    ref: 'device'
  }
})
module.exports = model('deviceInfo', deviceInfoSchema)
