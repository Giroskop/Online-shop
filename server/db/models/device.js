const { model, Schema, Types } = require('mongoose')

const deviceSchema = new Schema({
	name: {
		type: String,
		unique: true,
	},
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
  deviceInfo: [{
    type: Types.ObjectId,
    ref: 'deviceInfo'
  }]
})
module.exports = model('device', deviceSchema)
