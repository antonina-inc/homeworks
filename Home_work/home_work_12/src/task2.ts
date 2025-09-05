
if (confirm('Почати тестування?')) {
	// задача 5
	// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
	//  чи є у масиві ім’я «Olga» і під яким індексом.
	let names: string[] = [
		'John',
		'Paul',
		'Andrew',
		'Abrams',
		'Abba',
		'Peter',
		'Tina',
		'Olga',
		'Jack',
		'Peter',
	]
	names.sort()
	// function searchName(arr: string[], serchEl: string): number {
	// 	let start: number = 0
	// 	let end: number = arr.length - 1
	// 	while (start <= end) {
	// 		let middle: number = Math.floor((start + end) / 2)
	// 		if (arr[middle] === serchEl) return middle
	// 		if (arr[middle] < serchEl) start = middle + 1
	// 		if (arr[middle] > serchEl) end = middle - 1
	// 	} return -1
	// }
	// console.log(names);

	// const serchOlga: number = searchName(names, 'Olga')
	// console.log(`Імя 'Olga' знайдено в індексі ${serchOlga}`);

	// задача 6
	// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
	//  чи є у масиві ім’я довжиною 5 символів і під яким індексом.

	// function searchlength(arr: string[], serchEl: number): number {
	// 	let start: number = 0
	// 	let end: number = arr.length - 1
	// 	while (start <= end) {
	// 		let middle: number = Math.floor((start + end) / 2)
	// 		if (arr[middle].length === serchEl) return middle
	// 		if (arr[middle].length < serchEl) start = middle + 1
	// 		if (arr[middle].length > serchEl) end = middle - 1
	// 	} return -1
	// }
	// console.log(names);

	// const serchlength5: number = searchlength(names, 5)
	// console.log(`ім’я довжиною 5 символів знайдено в індексі ${serchlength5}`);
	// /////////////////////
	// const nameLength5: number = names.findIndex((name) => name.length === 5)
	// console.log(nameLength5);
}