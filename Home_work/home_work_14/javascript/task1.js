"use strict";
if (confirm('Почати тестування?')) {
    const sitesInfo = [
        {
            companyName: 'Web style',
            owner: 'Sirenko',
            sponsors: [
                { lastName: 'Ivanov', firstName: 'Ivan', investment: 50000 },
                { lastName: 'Petrenko', firstName: 'Petro', investment: 30000 }
            ],
            releaseYear: 2020,
            siteCost: 120050
        },
        {
            companyName: 'Modern Web',
            owner: 'Kovalchuk',
            sponsors: [
                { lastName: 'Shevchenko', firstName: 'Olena', investment: 70000 },
                { lastName: 'Bondar', firstName: 'Andriy', investment: 35000 }
            ],
            releaseYear: 2005,
            siteCost: 150000
        },
        {
            companyName: 'Digital Future',
            owner: 'Melnyk',
            sponsors: [
                { lastName: 'Tkachenko', firstName: 'Oksana', investment: 45000 },
                { lastName: 'Kravets', firstName: 'Dmytro', investment: 60000 }
            ],
            releaseYear: 2010,
            siteCost: 9000
        },
        {
            companyName: 'DFG',
            owner: 'Savchenko',
            sponsors: [
                { lastName: 'Melnik', firstName: 'Olena', investment: 55000 },
                { lastName: 'Naiko', firstName: 'Oleg', investment: 60000 }
            ],
            releaseYear: 2015,
            siteCost: 201000
        }
    ];
    console.log(sitesInfo);
    //1) загальну вартість усіх сайтів
    const totalSum = sitesInfo.reduce((prevSum, site) => prevSum + site.siteCost, 0);
    console.log(`Загальна вартість усіх сайтів - ${totalSum}`);
    //2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
    const numberSite = sitesInfo.reduce((prevSum, site) => (site.releaseYear > 2000 && site.releaseYear < 2009) ?
        prevSum + 1 : prevSum, 0);
    console.log(`кількість сайтів, що було зроблено між 2000 та 2009 рр. - ${numberSite}`);
    //3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
    const numberSiteMore100k = sitesInfo.reduce((prevNum, site) => {
        const totalSumInvest = site.sponsors.reduce((prevSum, sponsor) => prevSum + sponsor.investment, 0);
        return totalSumInvest > 100000 ? prevNum + 1 : prevNum;
    }, 0);
    console.log(`кількість сайтів, де сума спонсорських вкладень була більшою за 100000 - ${numberSiteMore100k}`);
    //4) створити загальний список усіх спонсорів (поки можуть повторюватись,
    // просто зібрати усі у масив)
    function getSponsorsList(arr) {
        let sponsorsList = [];
        for (const site of arr) {
            sponsorsList = [...sponsorsList, ...site.sponsors];
        }
        return sponsorsList;
    }
    console.log(getSponsorsList(sitesInfo));
    //5) знайти рік, коли прибуток був найбільшим
    function getBiggestProfitYear(arr) {
        let biggestProfit = 0;
        let yearBiggestProfit;
        for (const site of arr) {
            if (site.siteCost > biggestProfit) {
                biggestProfit = site.siteCost;
                yearBiggestProfit = site.releaseYear;
            }
        }
        return yearBiggestProfit;
    }
    console.log(`найбільший прибуток був у ${getBiggestProfitYear(sitesInfo)} році`);
    //6) упорядкувати список за спаданням прибутку
    sitesInfo.sort((a, b) => b.siteCost - a.siteCost);
    console.log(sitesInfo);
    //7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість
    //  до 10000 і більше 10000
    const sitesMore10000 = sitesInfo.filter((site) => site.siteCost > 10000);
    console.log(sitesMore10000);
    const sitesLess10000 = sitesInfo.filter((site) => site.siteCost < 10000);
    console.log(sitesLess10000);
}
