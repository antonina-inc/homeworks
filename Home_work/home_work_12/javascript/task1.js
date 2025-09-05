"use strict";
if (confirm('Почати тестування?')) {
    //Задача 1
    //Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
    /**
     * генерує масив рандомних чисел
     * @param {number} numberElement кількість елементів в масиві
     * @param {number} min мінімальне значення
     * @param {number} max максимальне значення
     * @returns
     */
    function getRandArr(numberElement, min, max) {
        const newArr = [];
        for (let i = 0; i < numberElement; i++) {
            const randNum = getRandNum(min, max);
            newArr.push(randNum);
        }
        return newArr;
    }
    /**
     * генерує рандомні числа для масиву
     * @param {number} min мінімальне значення
     * @param {number} max максимальне значення
     * @returns
     */
    function getRandNum(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    const arr = getRandArr(30, 1, 100);
    // let change: boolean
    // let endIndex: number = arr.length
    // let chageCount: number = 0
    // do {
    // 	change = false
    // 	document.write('<table>')
    // 	for (let i = 1; i < endIndex; i++) {
    // 		document.write('<tr>')
    // 		if (arr[i - 1] > arr[i]) {
    // 			const tmp = arr[i - 1]
    // 			arr[i - 1] = arr[i]
    // 			arr[i] = tmp
    // 			change = true
    // 			chageCount++
    // 			document.write(`<td>${arr}</td>`)
    // 		}
    // 		document.write('<tr>')
    // 	}
    // 	document.write('</table>')
    // 	endIndex--
    // } while (change)
    // console.log(arr)
    // console.log(chageCount)
    //задача 2	
    // Підрахувати скільки було обмінів під час сортування змішуванням.
    // let leftIndex: number = 0
    // let rightIndex: number = arr.length - 1
    // let chageCountMix: number = 0
    // document.write('<table>')
    // while (leftIndex < rightIndex) {
    // 	let changed: boolean = false
    // 	for (let i = leftIndex + 1; i <= rightIndex; i++) {
    // 		document.write('<tr>')
    // 		if (arr[i - 1] > arr[i]) {
    // 			let temp = arr[i - 1]
    // 		arr[i - 1] = arr[i]
    // 		arr[i] = temp
    // 		changed = true
    // 		chageCountMix++
    // 		document.write(`<td>${arr}</td>`)
    // 	}
    // 	document.write('</tr>')
    // }
    // rightIndex--
    // if (!changed) break
    // changed = false
    // for (let i = rightIndex; i > leftIndex; i--) {
    // 	document.write('<tr>')
    // 	if (arr[i - 1] > arr[i]) {
    // 		let temp = arr[i - 1]
    // 			arr[i - 1] = arr[i]
    // 			arr[i] = temp
    // 			changed = true
    // 			chageCountMix++
    // 			document.write(`<td>${arr}</td>`)
    // 		}
    // 	}
    // 	leftIndex++
    // 	if (!changed) break
    // 	document.write('</tr>')
    // }
    // document.write('</table>')
    // console.log(chageCountMix);
    //задача 3	
    // Підрахувати скільки було обмінів під час сортування включеннями.
    // let num: number
    // let k: number
    // let chageCountInsert: number = 0
    // document.write('<table>')
    // for (let i: number = 0; i < arr.length; i++) {
    // 	document.write('<tr>')
    // 	num = arr[i];
    // 	k = i - 1
    // 	while (k >= 0 && arr[k] > num) {
    // 		arr[k + 1] = arr[k]
    // 		k--
    // 	}
    // 	arr[k + 1] = num
    // 	chageCountInsert++
    // 	document.write(`<td>${arr}</td>`)
    // }
    // document.write('</tr>')
    // document.write('</table>')
    // console.log(chageCountInsert);
    //задача4
    //  Для розглянутих методів сортування спробувати вивести етапи сортування
    //  шляхом виведення відповідних таблиць.
    // реалізовано разом з сортуванням
}
