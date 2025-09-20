"use strict";
if (confirm('Почати тестування?')) {
    //Створити службове авто(водій, марка, номер).
    // Створити клас таким чином,
    // щоб можна було створити тільки один екземпляр цього класу.
    class Auto {
        constructor(driver, carBrand, carNumber) {
            if (Auto.car)
                return Auto.car;
            this.driver = driver;
            this.carBrand = carBrand;
            this.carNumber = carNumber;
            Auto.car = this;
        }
    }
    const myCar = new Auto('B', 'Renault', 'AH3567KB');
    document.write(`Водій - ${myCar.driver}, марка - ${myCar.carBrand}, номер - ${myCar.carNumber}`);
    const myCar1 = new Auto('K', 'Nissan', 'AH3567KB');
    document.write(`Водій - ${myCar.driver}, марка - ${myCar.carBrand}, номер - ${myCar.carNumber}`);
}