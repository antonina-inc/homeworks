			//вводимо необхідні дані 	
		
			const seconds = parseFloat(prompt('Введіть необхідну кількість секунд'))			
			
			//знаходимо результат
			const hours = parseInt(seconds / 360)
			const minutes = (((seconds % 360) / 60).toFixed(1))
			
			//виводимо результат
			document.write(`<p> Від початку доби минуло ${seconds} секунд, це - ${hours} годин та ${minutes} хвилин</p>`) 
			