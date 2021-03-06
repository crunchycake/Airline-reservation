const express = require('express')
const app = express()
const port = 7000
const path = require('path')
require('dotenv').config({path: 'variables.env'});




app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.set('views', path.join(__dirname,'./../frontend/views'))
app.set("view engine", "ejs")

app.use("/js", express.static(path.join(__dirname,"./../frontend/js")))
app.use("/dist", express.static(path.join(__dirname,"./../frontend/dist")))

app.use('/', require('./routes/routes'))

// app.get("/frontend/views/login.ejs", (req, res) => {
// 	res.render("login")
// });

app.listen(port, err => {
	if (err) {
		return console.log(`Wystąpił błąd ${err}`)
	}
	return console.log(`Apka działa na porcie ${port}`)
})