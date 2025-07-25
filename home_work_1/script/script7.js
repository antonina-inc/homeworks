			//вводимо необхідні дані 	
			// Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера
			// дня (від 0 до 6).
			
			const monthNumber = parseFloat(prompt('Введіть номер місяця (від 0 до 12)'))
			const dayNumber = parseFloat(prompt('Введіть номер дня (від 0 до 6)')	)		
			
			//знаходимо результат
			const sumDayMomth = monthNumber + dayNumber
					
			//виводимо результат
			document.write(`<p> Cума випадкового номера місяця та випадкового номера
			дня становить ${sumDayMomth} </p>`) 
			