const { json } = require('express')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const User = require('../db/models/user')
const Basket = require('../db/models/basket')
const jwt = require('jsonwebtoken')

const generateJWT = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '24h',
    }
  )
}

class UserController {
	async registration(req, res, next) {
		const { email, password, role } = req.body
		if (!email || !password) {
			return next(ApiError.badRequest('Некорректный email или пароль'))
		}
		const candidate = await User.findOne({ email })
		if (candidate) {
			return next(
				ApiError.badRequest('Пользователь с таким email уже существует')
			)
		}
		const hashPassowrd = await bcrypt.hash(password, 10)
		const user = await User.create({
			email,
			role,
			password: hashPassowrd,
		})
		const basket = await Basket.create({
			userId: user._id,
		})
		const token = generateJWT(user._id, user.email, user.role)
    return res.json({token})
	}
	async login(req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (!user) {
      return next(ApiError.internal('Пользователь с таким email не найден'))
    }
    let comparePassword = await bcrypt.compare(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Неправильный пароль'))
    }
    const token = generateJWT(user._id, user.email, user.role)
    return res.json({token})
  }
	async check(req, res) {
		const token = generateJWT(req.user.id, req.user.email, req.user.role)
    return res.json({token})
	}
}

module.exports = new UserController()
