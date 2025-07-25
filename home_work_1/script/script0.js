	// вводимо необхідні дані
			const a = parseFloat(prompt('Введіть число', 'a='))
			const b = parseFloat(prompt('Введіть число', 'b='))
			const c = parseFloat(prompt('Введіть число', 'c='))
			//знаходимо результат
			const s1 = a + 12 + b
			const s2 = ((a+b)/2*a)**(1/2)	
			const s3 = ((a+b)*c)**(1/3)
			const s4 = Math.sin(a/(-b))
			//виводимо результат
			document.write(`<p> 1) Результат -  ${s1}</p>`) 
			document.write(`<p>2) Результат -  ${s2}</p>`)
			document.write(`<p>3) Результат -  ${s3}</p>`)
			document.write(`<p>4) Результат -  ${s4}</p>`)