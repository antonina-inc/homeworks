"use strict";
//Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.let userData = {
if (confirm('Почати тестування?')) {
    const userData = {
        day: 23,
        month: 2,
        year: 2025,
    };
    function getYearInN({ month, year }, N) {
        return Math.floor((month + N - 1) / 12) + year;
    }
    let yearAfterN = getYearInN(userData, 22);
    console.log(yearAfterN);
}
