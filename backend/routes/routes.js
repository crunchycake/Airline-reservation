
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const User = require('./../models/User')
// const Flight = require('./../models/flight')
const { wrap } = require('module')

const router = express.Router()



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


// async function run() {
// 	await mongoose
// 		.connect(connectionString, {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		})
// 		.then(
// 			() => {
// 				return console.log('Połączono z bazą danych')
// 			},
// 			error => console.log(`Błąd ${error}`)
// 		)

// 	if (Flight.length) {
// 		await Flight.collection.drop()
// 	}

// 	await Flight.create([
// 		{ origin: 'newark', destination: 'warsaw', setTodaysDate: '31.03.2022', date: '06.04.2022', adults: 2, children: 1, travelClass: 'economy'  },
// 	])
// }

// run()





router.get('/', async function (req, res) {
	res.render('index')
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
	res.redirect('/signup')
})


// Przesyłanie danych z wyszukiwarki

// router.post('/postFlightData', async function (req, res) {
// 	const insertDocument = await new Flight({
// 		origin: req.body.origin,
// 		destination: req.body.destination,
// 		setTodaysDate: req.body.setTodaysDate,
// 		date: req.body.date,
// 		adults: req.body.adults,
// 		children: req.body.children,
// 		travelClass: req.body.travelClass,
// 	})
// 	console.log('insertDocument', insertDocument)
// 	await insertDocument.save(function(err,someVal) {
// 		if (err) {
// 			return console.error(err)
// 		}
// 		return `zapisano ${insertDocument}`
// 	})
// })

module.exports = router
