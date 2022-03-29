const bootstrap = require('bootstrap')
const login = document.querySelector('#login')
const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const pass = document.querySelector('#password')
const email = document.querySelector('#email')
const age = document.querySelector('#age')
const btnReset = document.querySelector('.btnReset')
const btnSend = document.querySelector('.btnSend')
const popup = document.querySelector('.popup')
const img = document.querySelector('.show-popup')



// -------------------

// const showError = (input, msg) => {
// 	// input przechowuje inputy
// 	// msg przechowuje placeholder

// const bookingform = input.parentElement
// console.log(input.parentElement);
// const errorMsg = bookingform.querySelector('.error-text')

// bookingform.classList.add('error-text')
// errorMsg.textContent = msg;

// }

// const cleanError = input => {
// 	const bookingform = input.parentElement
// 	bookingform.classList.remove('error-text')
// }

// const checkForm = input => {
// input.forEach(el => {
// 	if(el.value === '' ) {
// 		showError(el, el.placeholder)
// 		// console.log(el.placeholder);
// 		// console.log('error');
// 	} else {
// 		console.log('ok');
// 	}
// })
// }

// // Input z funkcji 'checkForm' przechowuje tablicę z inputami. 
// // el odnosi się do każdej zmiennej, która znajduje się w tablicy 

// btnSend.addEventListener('click', e => {
// 	e.preventDefault();
// 	checkForm([login, password, name, lastName, email, age])
	
// })



// btnReset.addEventListener('click', e => {
// 	e.preventDefault();
// 	console.log('reset');

// 	[login,password,name,lastName,email,age].forEach(el => {
// 		el.value = '';
// 	})
// })




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

function popupShow() {
	popup.style.display = 'block'
}