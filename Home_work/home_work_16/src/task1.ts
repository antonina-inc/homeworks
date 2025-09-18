
if (confirm('Почати тестування?')) {
	class TMoney {
		amountDollars: number;
		dolarRate: number;

		constructor(amountDollars: number, dolarRate: number) {
			this.amountDollars = amountDollars;
			this.dolarRate = dolarRate;
		}

		toString(): string {
			return `На вашому рахунку ${this.amountDollars}, курс долара на сьогодні - ${this.dolarRate}`;
		}

		addMoney(grn: number): number {
			return this.amountDollars += grn / this.dolarRate;
		}

		drawMoney(grn: number): number {
			const sumToDraw = grn / this.dolarRate;
			if (sumToDraw > this.amountDollars) throw new Error("Недостатньо коштів");
			return this.amountDollars -= sumToDraw;
		}

		sumIncrease100(): number {
			return (this.amountDollars * this.dolarRate + 100) / this.amountDollars;
		}
	}

	let newScore: TMoney;
	try {
		newScore = new TMoney(200, 46);
	} catch (error: any) {
		console.log(error.message);
	}
	document.write(`${newScore}<br>`);
	// document.write(`${newScore.sumIncrease100()}<br>`);
	// newScore.addMoney(1000);
	// document.write(`${newScore}<br>`);
	// newScore.drawMoney(20000);
	// document.write(`${newScore}<br>`);
}
