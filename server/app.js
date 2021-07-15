require('dotenv').config()
const express = require('express')
const { connect } = require('mongoose')
const cors = require('cors')
const path = require('path')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileupload = require('express-fileupload')
const PORT = process.env.PORT || 5000


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload({}))
app.use('/api', router)

app.use(errorHandler)

function start() {
	try {
		app.listen(PORT, () => {
			console.log(`server started, port: ${PORT}`)
			connect(
				process.env.DB_URL,
				{ useNewUrlParser: true, useUnifiedTopology: true },
				() => {
					console.log('db ok')
				}
			)
		})
	} catch (e) {
		console.log(e)
	}
}
start()
