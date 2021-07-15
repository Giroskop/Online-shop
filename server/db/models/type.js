const {model, Schema, Types} = require('mongoose')

const typeSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  brandId: [{
    type: Types.ObjectId,
    ref: 'brand'
  }]
})
module.exports = model('type', typeSchema)
