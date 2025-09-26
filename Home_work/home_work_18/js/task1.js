"use strict";
if (confirm('Почати тестування?')) {
	function getNumbers() {
		const num1 = parseInt(document.getElementById("num1").value)
		const num2 = parseInt(document.getElementById("num2").value)
		return [num1, num2]
	}
	function getSum() {
		const numbers = getNumbers()
		const sum = numbers[0] + numbers[1]
		document.getElementById("res").value = sum.toFixed(2)
	}

	function getSubtract() {
		const numbers = getNumbers()
		const subtract = numbers[0] - numbers[1]
		document.getElementById("res").value = subtract.toFixed(2)
	}

	function getProduct() {
		const numbers = getNumbers()
		const product = numbers[0] * numbers[1]
		document.getElementById("res").value = product.toFixed(2)
	}

	function getDivision() {
		const numbers = getNumbers()
		const division = numbers[0] / numbers[1]
		document.getElementById("res").value = division.toFixed(2)
	}

	window.onload = function () {
		document.getElementById("calcSum").onclick = getSum
		document.getElementById("calcSubtract").onclick = getSubtract
		document.getElementById("calProduct").onclick = getProduct
		document.getElementById("calcDivision").onclick = getDivision
	}
}