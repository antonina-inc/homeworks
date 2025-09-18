"use strict";
if (confirm('Почати тестування?')) {
    class TMoney {
        constructor(amountDollars, dolarRate) {
            this.amountDollars = amountDollars;
            this.dolarRate = dolarRate;
        }
        toString() {
            return `На вашому рахунку ${this.amountDollars}, курс долара на сьогодні - ${this.dolarRate}`;
        }
        addMoney(grn) {
            return this.amountDollars += grn / this.dolarRate;
        }
        drawMoney(grn) {
            const sumToDraw = grn / this.dolarRate;
            if (sumToDraw > this.amountDollars)
                throw new Error("Недостатньо коштів");
            return this.amountDollars -= sumToDraw;
        }
        sumIncrease100() {
            return (this.amountDollars * this.dolarRate + 100) / this.amountDollars;
        }
    }
    let newScore;
    try {
        newScore = new TMoney(200, 46);
    }
    catch (error) {
        console.log(error.message);
    }
    document.write(`${newScore}<br>`);
    // document.write(`${newScore.sumIncrease100()}<br>`);
    // newScore.addMoney(1000);
    // document.write(`${newScore}<br>`);
    // newScore.drawMoney(20000);
    // document.write(`${newScore}<br>`);
}