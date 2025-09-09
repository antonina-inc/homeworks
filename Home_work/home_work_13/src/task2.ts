// Тренажер додавання. Кожні 10 секунд користувачу задають
// випадковий приклад з додавання двох цифр і робиться перевірка.
if (confirm('Почати тестування?')) {
	function randNum() {
		return Math.floor(Math.random() * 20)
	}
	let num1: number, num2: number

	let wrongAnswerCounter: number = 0
	let tamer1: number = setInterval(() => {
		num1 = randNum()
		num2 = randNum()
		let userAnswer: number = Number(prompt(`${num1} + ${num2} = ?`))
		if (num1 + num2 === userAnswer) alert('Правильно')
		else {
			alert('Не правильно')
			wrongAnswerCounter++
		}
		if (wrongAnswerCounter === 3) {
			alert('Тестування завершено');
			clearInterval(tamer1);
		}
	}, 3000);
}