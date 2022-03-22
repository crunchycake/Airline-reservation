// const sum = require('./sum').sum;
// console.log("Hello World");
// console.log(sum(2,3));
const login = document.querySelector('#login')
const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const pass = document.querySelector('#password')
const email = document.querySelector('#email')
const age = document.querySelector('#age')
const btnReset = document.querySelector('.btnReset')
const btnSend = document.querySelector('.btnSend')
const popup = document.querySelector('.popup')

// BLOKADA DATY
var today = new Date().toISOString().split('T')[0]
document.getElementsByName('setTodaysDate')[0].setAttribute('min', today)

// CENA LOTU

const totalPrice = document.querySelector('.price')
const price = ['Total Price 769 $', 'Total Price 359 $', 'Total Price 489 $', 'Total Price 299 $']
const showPrice = () => {
	const number = Math.floor(Math.random() * price.length)
	totalPrice.textContent = price[number]
}

showPrice()

btnReset.addEventListener('click', e => {
	e.preventDefault();
	[login, name, surname, password, email, age].forEach(el => el.value = '')
})

const checkLength = (input, min) => {
	if(input.value.length <min) {
		showError(input, `coś składa się z min. ${min} znaków`)
	}
}

btnSend.addEventListener('click', e => {
	e.preventDefault();

	checkLength(password, 8)
})