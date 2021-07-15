const router = require('express').Router()
const DeviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMIddleware')

router.route('/')
.post(checkRole('ADMIN'), DeviceController.create)
.get(DeviceController.getAll)

router.get('/:id', DeviceController.getOne)

module.exports = router
