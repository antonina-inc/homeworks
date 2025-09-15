if (confirm('Почати тестування?')) {
	const auto = {
		model: 'Audi',
		tankSize: 50,
		litersNumber: 20,
		seatsNumber: 5,
		passengersNumber: 3,
		fillUp(fillUpLiters: number) {  // Заправка на вказану кількість літрів
			if (this.litersNumber + fillUpLiters > this.tankSize)
				console.log(`Можна залити тільки ${this.tankSize - this.litersNumber}`);
			return this.litersNumber += fillUpLiters
		},
		setPassengersNumber() {// Виведення кількості пасажирів
			return (this.passengersNumber <= 0) ? console.log('В авто немає пасажирів') :
				console.log(this.passengersNumber);
		},
		addPassengers(addPassengersNumber: number) {// Додавання пасажирів
			if (this.passengersNumber + addPassengersNumber > this.seatsNumber)
				console.log(`Можемо взяти тільки ${this.seatsNumber - this.passengersNumber}`)
			return this.passengersNumber += addPassengersNumber

		},
		dropPassenger(dropPassengersNumber: number) {// Висадка пасажирів
			if (this.passengersNumber < dropPassengersNumber)
				console.log(`В авто лише ${this.passengersNumber} пасажирів`)
			return this.passengersNumber -= dropPassengersNumber
		}
	}
	// auto.addPassengers(3)
	// auto.dropPassenger(4)
	// auto.setPassengersNumber()
}