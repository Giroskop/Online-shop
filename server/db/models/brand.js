const {model, Schema, Types} = require('mongoose')

const brandSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  typeId: [{
    type: Types.ObjectId,
    ref: 'type'
  }]
})
module.exports = model('brand', brandSchema)
