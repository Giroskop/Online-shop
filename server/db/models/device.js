const { model, Schema, Types } = require('mongoose')

const deviceSchema = new Schema({
	name: String,
	price: Number,
	rating: {
		type: Number,
		default: 0,
	},
	img: String,
	typeId: {
		type: Types.ObjectId,
		ref: 'type',
	},
	brandId: {
		type: Types.ObjectId,
		ref: 'brand',
	},
  info: [{
    type: Types.ObjectId,
    ref: 'deviceInfo'
  }]
})
module.exports = model('device', deviceSchema)
