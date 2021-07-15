const router = require('express').Router()
const TypeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMIddleware')


router.route('/')
.post(checkRole('ADMIN'), TypeController.create)
.get(TypeController.getAll)

module.exports = router
