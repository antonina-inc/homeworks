"use strict";
//Дано масив хлопців і дівчат вивести всі можливі комбінації для 
// танців з хлопців і дівчат.
if (confirm('Почати тестування?')) {
    const arrBoys = ['Igor', 'Ivan', 'Matviy', 'Sergiy'];
    const arrGirls = ['Marta', 'Olena', 'Victoria', 'Marina'];
    function getDancePartners(arr1, arr2, i = 0) {
        if (i === arr1.length)
            return;
        for (let k = 0; k < arr2.length; k++) {
            document.write(`${arr1[i]} - ${arr2[k]} <br>`);
        }
        getDancePartners(arr1, arr2, i + 1);
    }
    getDancePartners(arrBoys, arrGirls);
}
