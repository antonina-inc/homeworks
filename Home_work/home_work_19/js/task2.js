"use strict";
if (confirm('Почати тестування?')) {
	document.querySelector('.container').onchange = function (e) {
		const chooseButton = e.target
		let a = parseInt(chooseButton.value)
		let b = parseInt(chooseButton.value)

		let currentElement = chooseButton.previousElementSibling
		while (currentElement) {
			a -= 1
			currentElement.value = (a)
			currentElement = currentElement.previousElementSibling
		}
		currentElement = chooseButton.nextElementSibling
		while (currentElement) {
			b += 1
			currentElement.value = (b)
			currentElement = currentElement.nextElementSibling
		}
	}
}