			//вводимо необхідні дані 	

			const pricePen = prompt('Введіть ціну однієї ручки')		
			const numberPen = prompt('Введіть кількість ручок')
			
			const pricePencil= prompt('Введіть ціну одного олівця')		
			const numberPencil = prompt('Введіть кількість олівців')

			const priceMarker= prompt('Введіть ціну одного маркера')		
			const numberMarker = prompt('Введіть кількість маркерів')
			
			//знаходимо результат
			const costPen = pricePen * numberPen
			const costPencil = pricePencil * numberPencil
			const costMarker = priceMarker * numberMarker
			const totalСost = costPen + costPencil + costMarker
			
			//виводимо результат
			document.write(`<table>
			<thead>
				<tr>Назва товару</tr>
				<tr>Ціна</tr>
				<tr>Кількість</tr>
				<tr>Загальна вартість</tr>
			</thead>
			<tbody>
				<tr>
					<td>Ручка кулькова</td>
					<td>${pricePen} грн</td>
					<td>${numberPen} шт</td>
					<td>${costPen} грн</td>
				</tr>
					<tr>
					<td>Олівець графічний</td>
					<td>${pricePencil}грн</td>
					<td>${numberPencil}шт</td>
					<td>${costPencil}грн</td>
				</tr>
					<tr>
					<td>Маркер жовтий</td>
					<td>${priceMarker}грн</td>
					<td>${numberMarker}шт</td>
					<td>${costMarker}грн</td>
				</tr>
					<tr>
					<td>Загальна вартість</td>
					<td>-</td>
					<td>-</td>
					<td>${totalСost}грн</td>
				</tr>
			</tbody>

		</table>`) 
			