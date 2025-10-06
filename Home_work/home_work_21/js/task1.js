"use strict";
if (confirm('Почати тестування?')) {
	//Задача 4. Користувач задає місяць навчання учня 
	// (перевіряти чи є числом, чи від 1 до 12, чи не канікули)
	// та оцінку (перевіряти чи є числом, чи від 1 до 100).
	// Вивести чи зможе він виправити оцінку (якщо оцінка погана
	// і це не останній місяць у семестрі) .
	// Обробку усіх помилок зробити з використанням відповідних класів.

	class NumberIncorrect extends Error {
		constructor() {
			super()
			this.message = 'Має бути число'
			this.name = 'NumberIncorrect'
		}
	}
	class MonthIncorrect extends Error {
		constructor() {
			super()
			this.message = 'Некоректно введений місяць'
			this.name = 'MonthIncorrect'
		}
	}
	class RatingIncorrect extends Error {
		constructor() {
			super()
			this.message = 'Некоректно введена оцінка'
			this.name = 'RatingIncorrect'
		}
	}
	function getPossibilityCorrect() {
		const month = parseInt(document.getElementById('monthStudy').value)
		const rating = parseInt(document.getElementById('rating').value)
		const result = document.getElementById('res')
		try {
			if (isNaN(month) || isNaN(rating)) throw new NumberIncorrect()
			if (month <= 0 || month > 12) throw new MonthIncorrect()
			if (rating < 1 || rating > 100) throw new RatingIncorrect()
			if (rating < 60 && (month === 5 || month === 12)) result.innerText = 'оцінку не можна виправити'
			else if (rating < 60) result.innerText = 'оцінку можна виправити'
			else result.innerText = 'оцінка задовільна'
		} catch (err) {
			if (err instanceof NumberIncorrect) {
				alert(err.message + 'Пишіть тільки числа');
			}
			if (err instanceof MonthIncorrect) {
				alert(err.message)
			}

			if (err instanceof RatingIncorrect) {
				alert(err.message)
			}
		}
	}
	window.onload = function () {
		document.querySelector('button').onclick = getPossibilityCorrect
	}

}