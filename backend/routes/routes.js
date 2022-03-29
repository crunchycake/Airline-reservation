
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const User = require('./../models/User')
const { wrap } = require('module')
const { appendFile } = require('fs')
const router = express.Router()




const connectionString = process.env.DB_MONGO;

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
		{ login: 'mateuszcieslik', password: '123456', name: 'Mateusz', lastName: 'Cieslik', age: 34, email: 'mateuszcieslik@gmail.com' },
		{ login: 'anetacieslik', password: '654321', name: 'Aneta', lastName: 'Cieślik', age: 31, email: 'anetacieslik@gmail.com' },
	])
}

run()

router.get('/', async function (req, res) {
	res.render('index')
})

router.get('/login', async function (req, res) {
	res.render('login')
})

router.get('/signup', async function (req, res) {
	res.render('signup')
})

router.get('/flights', async function (req, res){
	res.render('flights')
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
	res.redirect('./')
})



module.exports = router
