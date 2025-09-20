//Створити службове авто(водій, марка, номер).
// Створити клас таким чином,
// щоб можна було створити тільки один екземпляр цього класу.
if (confirm('Почати тестування?')) {
	class Auto {
		static car: Auto
		driver
		carBrand
		carNumber
		constructor(driver: string, carBrand: string, carNumber: string) {
			if (Auto.car) return Auto.car
			this.driver = driver
			this.carBrand = carBrand
			this.carNumber = carNumber
			Auto.car = this
		}
	}
	const myCar = new Auto('B', 'Renault', 'AH3567KB')
	document.write(`Водій - ${myCar.driver}, марка - ${myCar.carBrand}, номер - ${myCar.carNumber}`)
	const myCar1 = new Auto('K', 'Nissan', 'AH3567KB')
	document.write(`Водій - ${myCar.driver}, марка - ${myCar.carBrand}, номер - ${myCar.carNumber}`)
}