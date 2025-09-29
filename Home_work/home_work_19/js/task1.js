"use strict";
if (confirm('Почати тестування?')) {
	document.querySelector('.container').onclick = function (e) {
		const chooseButton = e.target
		if (chooseButton.tagName === 'DIV') chooseButton.classList.add('red')
		let curentElement = chooseButton.nextElementSibling
		while (curentElement) {
			curentElement.classList.add('red')
			curentElement = curentElement.nextElementSibling
		}
	}

}