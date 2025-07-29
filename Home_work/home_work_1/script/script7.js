			//вводимо необхідні дані 	
						
			let monthNumber = 1 + Math.floor(Math.random() * 12)		
			let dayNumber = Math.floor(Math.random() * 7)	
			
			
			//знаходимо результат
			let sumDayMomth = monthNumber + dayNumber
					
			//виводимо результат
			document.write(`<p> Cума випадкового номера місяця (${monthNumber}) та випадкового номера
			дня (${dayNumber}) становить ${sumDayMomth} </p>`) 

// 		