			//вводимо необхідні дані
			const number1 = parseFloat(prompt('Введіть число', 'a='))
			const number2 = parseFloat(prompt('Введіть число', 'b='))
			
			//знаходимо результат
			const resSum = number1 + number2
			const resmultiplication = number1 * number2
			const resDivision = number1 / number2
			//виводимо результат


			document.write(`<table>
			<thead>
				<tr>Операція</tr>
				<tr>Результат</tr>
			</thead>
			<tbody>
				<tr>
					<td>Сума</td>
					<td>${resSum}</td>
				</tr>
				<tr>
					<td>Добуток</td>
					<td>${resmultiplication}</td>
				</tr>
				<tr>
					<td>Частка</td>
					<td>${resDivision}</td>
				</tr>
			</tbody>
		</table>`) 
			
			