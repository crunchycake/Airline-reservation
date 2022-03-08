// const { Router } = require('express')
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const User = require('./../models/User')
const { wrap } = require('module')
// const app = express()
// const port = 3000
const router = express.Router()

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

const connectionString =
	'mongodb+srv://mateusz1:fdt78n@cluster0.v52c7.mongodb.net/mySecondDatabase?retryWrites=true&w=majority'

async function run() {
	await mongoose
		.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(
			() => {
				return console.log('Połączono z bazą danych')
			},
			error => console.log(`Błąd ${error}`)
		)

	if (User.length) {
		await User.collection.drop()
	}

	await User.create([
		{ login: 'aaa@aaa.com', password: 'aaa', name: 'Mateusz', lastName: 'Cieslik', age: 34, email: 'mateusz@wrap.pl' },
		{ login: 'bbb@aaa.com', password: 'bbb', name: 'Miłosz', lastName: 'Nowak', age: 24, email: 'milosz@wp.pl' },
	])
}

run()

router.get('/', async function (req, res) {
	res.render('index')
})

router.get('/signup', async function (req, res) {
	res.render('signup')
})

// zapisywanie do bazy

router.post('/postUserData', async function (req, res) {
	const insertDoc = await new User({
		login: req.body.login,
		password: req.body.password,
		name: req.body.name,
		lastName: req.body.lastName,
		email: req.body.email,
		age: req.body.age,
	})
	console.log('insertDoc', insertDoc)
	await insertDoc.save(function (err, someVal) {
		if (err) {
			return console.error(err)
		}
		return `zapisano ${insertDoc}`
	})
	res.redirect('/signup')
})

module.exports = router
