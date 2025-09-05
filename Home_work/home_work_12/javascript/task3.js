"use strict";
//задача7
// Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів).
// Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
function getRandDay() {
    return 1 + Math.floor(Math.random() * 7);
}
function getArr(row) {
    let newArr = [];
    for (let i = 0; i < row; i++) {
        let randDay = getRandDay();
        newArr.push(randDay);
    }
    return newArr;
}
function getTable(row, col) {
    let table = [];
    for (let i = 0; i < col; i++) {
        let randDayRow = getArr(row);
        table.push(randDayRow);
    }
    return table;
}
const arrDay = getTable(4, 8);
console.log(arrDay);
let sumSunday = arrDay.map((row) => row.filter((day) => day === 7));
console.log(sumSunday);
for (let i = 0; i < sumSunday.length; i++) {
    console.log(`в рядку ${i + 1} ${sumSunday[i].length} неділь`);
}
