"use strict";
if (confirm('Почати тестування?')) {
	function convert() {
		const userMoney = parseFloat(document.getElementById("grn").value)
		document.getElementById("euro").value = (userMoney / 49).toFixed(2)
		document.getElementById("dollar").value = (userMoney / 42).toFixed(2)
	}

	window.onload = function () {
		document.getElementById("res").onclick = convert
	}
}