"use strict";
if (confirm('Почати тестування?')) {
	function getTable() {
		const numScores = parseFloat(document.getElementById("numberScores").value)
		const table = document.createElement('table')
		for (let i = 0; i < numScores; i++) {
			const tr = document.createElement('tr')
			tr.innerHTML = ('<input type="number" class="input"  value="">')
			table.append(tr)
		}

		const myContainer = document.querySelector('.form-test__number-scores')
		myContainer.append(table)
	}

	function getAverageValue() {
		const scores = document.querySelectorAll("input")
		let sum = 0
		for (const inpElement of scores) {
			sum += parseFloat(inpElement.value)
		}
		const averageValue = sum / scores.length
		document.getElementById("res").innerText = `Середній бал -${averageValue.toFixed(2)}`
	}
	window.onload = function () {
		document.getElementById("getTable").onclick = getTable
		document.getElementById("sum").onclick = getAverageValue
	}

}