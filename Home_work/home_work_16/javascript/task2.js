"use strict";
if (confirm('Почати тестування?')) {
    class TDate {
        constructor(day, month, year) {
            this.day = day;
            this.month = month;
            this.year = year;
        }
        toString() {
            return `${this.day}.${this.month}.${this.year}`;
        }
        addDays(days) {
            if (this.day + days > 30) {
                this.day = (this.day + days) % 30;
                this.month += Math.floor((this.day + days) / 30);
            }
            else
                this.day += days;
        }
        reducetDays(days) {
            if (this.day - days < 1) {
                this.day = (days + this.day) % 30;
                this.month -= Math.floor((this.day + days) / 30);
            }
            else
                this.day -= days;
        }
        addMonths(months) {
            if (this.month + months > 12) {
                this.month = (this.month - 1 + months) % 12 + 1;
                this.year += Math.floor((this.month + months - 1) / 12);
            }
            else
                this.month += months;
        }
        reduceMonths(months) {
            if (this.month - months < 1) {
                this.month = 12 - (Math.abs(this.month - months));
                this.year -= Math.floor((this.month + months - 1) / 12);
            }
            else
                this.month -= months;
        }
        addYears(years) {
            this.year += years;
        }
        reduceYears(years) {
            this.year -= years;
        }
    }
    const myDate = new TDate(18, 9, 2025);
    myDate.addDays(60);
    myDate.reducetDays(90);
    myDate.addMonths(18);
    myDate.reduceMonths(10);
    myDate.addYears(2);
    document.write(`${myDate}<br>`);
}
