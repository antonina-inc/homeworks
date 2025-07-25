		//вводимо необхідні дані 			
			const priceProduct = parseFloat(prompt('Введіть ціну товару'))
			const numberProduct = parseFloat(prompt('Введіть кількість товару'))
			const taxRate = 5
			
			//знаходимо результат
			const totalCost = priceProduct * numberProduct
			const taxSum = (totalCost / 100) * taxRate
			
			//виводимо результат
			document.write(`<p> Загальна вартість товару - ${totalCost} грн</p>`) 
			document.write(`<p> Сума ПДВ складає - ${taxSum} грн</p>`)