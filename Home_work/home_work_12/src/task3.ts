//задача7
// Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів).
// Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.

type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | number;
function getRandDay(): Day {
	return 1 + Math.floor(Math.random() * 7)
}
function getArr(row: number): Day[] {
	let newArr: Day[] = []
	for (let i = 0; i < row; i++) {
		let randDay: Day = getRandDay()
		newArr.push(randDay)
	}
	return newArr
}
function getTable(row: number, col: number): Day[][] {
	let table: Day[][] = []
	for (let i = 0; i < col; i++) {
		let randDayRow = getArr(row)
		table.push(randDayRow)
	}
	return table
}
const arrDay: Day[][] = getTable(4, 8)
console.log(arrDay);


let sumSunday: number[][] = arrDay.map((row) => row.filter((day) => day === 7))

console.log(sumSunday);

for (let i = 0; i < sumSunday.length; i++) {
	console.log(`в рядку ${i + 1} ${sumSunday[i].length} неділь`);
}
