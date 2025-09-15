if (confirm('Почати тестування?')) {
	const obj1 = {
		arrNumber: [5, 41, 23, 8, 4, 12],
		getSum(): number {
			return this.arrNumber.reduce((prevSum: number, num: number) => prevSum + num)
		},
	}
	console.log(obj1.getSum());

	const obj2 = {
		arrNumber: [8, 12, 5, 4, 6, 3, 16, 24],
		getProduct(min?: number, max?: number): number {
			min = parseInt(prompt('Вкажіть мінімальне значення', '3') || '3')
			max = parseInt(prompt('Вкажіть максимальне значення (до 100)', '35') || '35')
			return this.arrNumber.reduce((prevProduct: number, num: number) => (num >= min && num <= max) ? prevProduct * num : prevProduct, 1)
		},
	}
	// console.log(obj1.getSum.apply(obj2));
	// console.log(obj2.getProduct());
	// console.log(obj2.getProduct.apply(obj1));
}