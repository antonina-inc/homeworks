//Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.let userData = {
if (confirm('Почати тестування?')) {
	type UserData = {
		day: number;
		month: number;
		year: number;
	};
	const userData: UserData = {
		day: 23,
		month: 2,
		year: 2025,
	};

	function getYearInN({ month, year }: { month: number, year: number }, N: number): number {
		return Math.floor((month + N - 1) / 12) + year;
	}

	let yearAfterN = getYearInN(userData, 22);
	console.log(yearAfterN);
}


