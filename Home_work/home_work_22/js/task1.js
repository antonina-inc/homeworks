"use strict";
if (confirm('Почати тестування?')) {

	window.onload = function () {
		const input = document.getElementById("inpColor")
		let changeCount = 0
		function changeColor() {
			let userColor = input.value
			if (userColor) {
				document.body.style.backgroundColor = userColor
				sessionStorage.setItem("color", userColor)
				changeCount++
				document.getElementById('countChange').innerText = changeCount
			}
		}
		const savedColor = sessionStorage.getItem("color")
		if (savedColor) {
			document.body.style.backgroundColor = savedColor
			input.value = savedColor
		}
		input.onchange = changeColor
	}


}