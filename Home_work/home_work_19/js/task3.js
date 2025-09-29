"use strict";
if (confirm('Почати тестування?')) {

	const rowList = document.querySelectorAll('td')
	for (const element of rowList) {
		let rundNum = 1 + Math.floor(Math.random() * 100)
		element.innerText += (rundNum)
	}
	const tables = document.querySelectorAll('table')

	for (const element of tables) {
		element.addEventListener('click', function (e) {
			if (e.target.tagName === 'TD') {
				e.target.closest('.table').classList.add('red')
			}
		})

		// відображення кількості	кліків не поборола((((
		// let counter = 0
		// let res = element.getElementsByClassName('.numbers')
		// element.addEventListener('click', function () {
		// 	counter += 1
		// 	console.log(counter);
		// 	res.innerText += counter
		// }
		// )

	}



}