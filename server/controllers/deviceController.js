const Device = require('../db/models/device')
const DeviceInfo = require('../db/models/deviceInfo')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const { JsonWebTokenError } = require('jsonwebtoken')

class DeviceController {
	async create(req, res, next) {
		try {
			let { name, price, brandId, typeId, info } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))
			// console.log(info)

			const device = await Device.create({
        name,
				price : Number(price),
				img: fileName,
				brandId,
				typeId,
			})
      
			if (info) {
        info = JSON.parse(info)
        console.log('crete-------')
				info.forEach(item => {
					DeviceInfo.create({
						title: item.title,
						description: item.description,
						deviceId: device._id,
					})
				})
			}
			return res.json(device)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}
	async getAll(req, res) {
		let { brandId, typeId, limit, page } = req.query
		page = Number(page) || 1
		limit = Number(limit) || 9
		let offset = page * limit - limit
		let devices
		if (!brandId && !typeId) {
			const countDevices = await Device.count()
			const devices = await Device.find().skip(offset).limit(limit)
			return res.json({ count: countDevices, devices: devices })
		}
		if (brandId && !typeId) {
			const countDevices = await Device.count()
			const devices = await Device.find({ brandId }).skip(offset).limit(limit)
			return res.json({ count: countDevices, devices: devices })
		}
		if (!brandId && typeId) {
			const countDevices = await Device.count()
			const devices = await Device.find({ typeId }).skip(offset).limit(limit)
			return res.json({ count: countDevices, devices: devices })
		}
		if (brandId && typeId) {
			const countDevices = await Device.count()
			const devices = await Device.find({ brandId, typeId })
				.skip(offset)
				.limit(limit)
			return res.json({ count: countDevices, devices: devices })
		}
	}
	async getOne(req, res) {
		const { id } = req.params
		const device = await Device.findById(id)
		const deviceInfo = await DeviceInfo.find({ deviceId: id })
    console.log(deviceInfo, ',<<<<<<<<')
		return res.json({ ...device, info: [...deviceInfo] })
	}
}

module.exports = new DeviceController()
