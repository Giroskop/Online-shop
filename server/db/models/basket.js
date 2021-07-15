const {model, Schema, Types} = require('mongoose')

const basketSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: 'user'
  },
  deviceId: [{
    type: Types.ObjectId,
    ref: 'device'
  }]
})
module.exports = model('basket', basketSchema)
