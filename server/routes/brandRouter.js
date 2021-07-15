const router = require('express').Router()
const BrandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMIddleware')

router.route('/')
.post(checkRole('ADMIN'), BrandController.create)
.get(BrandController.getAll)

module.exports = router
