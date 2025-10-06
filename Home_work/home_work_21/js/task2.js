"use strict";
if (confirm('Почати тестування?')) {
	class Client {
		constructor(id, name, balance) {
			this.id = id
			this.name = name
			this.balance = balance
		}
		toString() {
			return `ID: ${this.id}, ПІБ: ${this.name}, Баланс: ${this.balance} грн`
		}
		addMoney(amount) {
			if (amount > 0)
				return this.balance += amount
		}
		withdrawMoney(amount) {
			if (amount > 0 && this.balance >= amount)
				return this.balance -= amount
		}
	}
	class GoldenClient extends Client {
		constructor(id, name, balance, creditLimit, creditPercent) {
			super(id, name, balance)
			this.creditLimit = creditLimit
			this.creditPercent = creditPercent
			this.creditUsed = 0
		}
		toString() {
			return `ID: ${this.id}, ПІБ: ${this.name}, Баланс: ${this.balance} грн, 
				кредитні кошти: ${this.creditLimit}, ставка за використання кредитних коштів: ${this.creditPercent}%`
		}
		withdrawMoney(amount) {
			if (amount <= this.balance)
				return this.balance -= amount

			else if (amount > this.balance && amount < (this.balance + this.creditLimit)) {
				let balanceOfFunds = this.balance + this.creditLimit - amount
				this.creditUsed = this.creditLimit - balanceOfFunds
				return this.creditUsed
			}
		}
		getPenaltyCreditMoney() {
			return (this.creditUsed * this.creditPercent) / 100
		}
	}
	let a = new GoldenClient(454, 'Марченко Іван', 895, 200, 20)
	document.write(a)
}