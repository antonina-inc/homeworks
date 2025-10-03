"use strict";
if (confirm('Почати тестування?')) {
	class Tanks {
		constructor(imagesObg, maxStep, maxspeed, cssObj) {
			this.imagesObg = imagesObg
			this.maxStep = maxStep
			this.maxspeed = maxspeed
			this.cssObj = cssObj
		}
		getRandomValue(minValue, maxvalue) {
			return minValue + Math.floor(Math.random() * (maxvalue - minValue + 1))
		}
		startingPosition() {
			this.top = 0
			this.left = this.getRandomValue(0, 100)
		}
		setInitDirection() {
			this.vy = this.getRandomValue(0, this.maxStep)
		}
		updateCoordinates() {
			this.top += this.vy
			if (this.top > 100) this.top = 0
		}
		move() {
			this.updateCoordinates()
			this.setPosition()
		}

		setPosition() {
			this.tanks.style.top = this.top + '%'
			this.tanks.style.left = this.left + '%'
		}
		tanksPosition() {
			this.startingPosition()
			this.setPosition()
		}

		onTap() {
			clearInterval(this.interval)
			this.tanks.src = this.imagesObg.hit
			setTimeout(() => {
				this.tanks.style.width = 250 + 'px';
			}, 100);
			setTimeout(() => {
				this.tanks.src = ''
			}, 500);
		}
		render(containerSelector) {
			const img = document.createElement('img')
			img.src = this.imagesObg.mobile
			img.className = this.cssObj.containerClass
			this.tanks = img
			this.tanks.onclick = this.onTap.bind(this)
			this.tanksPosition()
			this.setInitDirection()
			this.interval = setInterval(() => this.move(), this.maxspeed)
			if (containerSelector) {
				document.querySelector(containerSelector).append(img)
			}
		}
	}
	const imagesObg = {
		mobile: './tank.jpg',
		hit: './boom.jpg',
	}
	for (let i = 0; i < 10; i++) {
		const tank = new Tanks(
			imagesObg,
			Math.random() * 3,
			Math.random() * 1000,
			{
				containerClass: 'insect',
			}
		)
		tank.render('body')
	}

}