"use strict";
if (confirm('Почати тестування?')) {
    const auto = {
        model: 'Audi',
        tankSize: 50,
        litersNumber: 20,
        seatsNumber: 5,
        passengersNumber: 3,
        fillUp(fillUpLiters) {
            if (this.litersNumber + fillUpLiters > this.tankSize)
                console.log(`Можна залити тільки ${this.tankSize - this.litersNumber}`);
            return this.litersNumber += fillUpLiters;
        },
        setPassengersNumber() {
            return (this.passengersNumber <= 0) ? console.log('В авто немає пасажирів') :
                console.log(this.passengersNumber);
        },
        addPassengers(addPassengersNumber) {
            if (this.passengersNumber + addPassengersNumber > this.seatsNumber)
                console.log(`Можемо взяти тільки ${this.seatsNumber - this.passengersNumber}`);
            return this.passengersNumber += addPassengersNumber;
        },
        dropPassenger(dropPassengersNumber) {
            if (this.passengersNumber < dropPassengersNumber)
                console.log(`В авто лише ${this.passengersNumber} пасажирів`);
            return this.passengersNumber -= dropPassengersNumber;
        }
    };
    // auto.addPassengers(3)
    // auto.dropPassenger(4);
    // auto.setPassengersNumber();
}
