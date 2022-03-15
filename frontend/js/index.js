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
