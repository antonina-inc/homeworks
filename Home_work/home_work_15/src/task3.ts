
if (confirm('Почати тестування?')) {
	class HeadOfDances {
		boysList: string[];
		girlsList: string[];
		constructor(arrBoysNames: string[], arrGirlsNames: string[]) {
			this.boysList = arrBoysNames
			this.girlsList = arrGirlsNames
		}
		getRandomBoy() {
			const randomBoy = Math.floor(Math.random() * this.boysList.length)
			return this.boysList[randomBoy]
		}
		getRandomGirl() {
			const randomGirl = Math.floor(Math.random() * this.girlsList.length)
			return this.girlsList[randomGirl]
		}
		getCoupleForDancing() {
			return alert(`Пара для танців ${this.getRandomBoy()} та ${this.getRandomGirl()}`)
		}
		run() {
			setInterval(() => {
				this.getCoupleForDancing()
			}, 5000);
		}
	}
	const boysDancers = ['Микола', 'Дід Степан', 'Ігор', 'Максим'];
	const girlsDancers = ['Юлія', 'Марія', 'Катерина', 'Баба Галя'];
	const dancEnsemble = new HeadOfDances(boysDancers, girlsDancers);
	dancEnsemble.run();
}