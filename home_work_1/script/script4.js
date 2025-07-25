			//вводимо необхідні дані 			
			const lengthSm = parseFloat(prompt('Введіть необхідну кількість сантиметрів'))			
			
			//знаходимо результат
			const lengthMeter = lengthSm / 100
			const lengtKilometer = lengthSm / 100000
			
			//виводимо результат
			document.write(`<p> ${lengthSm} см це - ${lengthMeter} метрів </p>`) 
			document.write(`<p> ${lengthSm} см це - ${lengtKilometer} кілометрів </p>`)