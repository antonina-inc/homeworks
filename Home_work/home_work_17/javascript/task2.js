"use strict";
// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval)
//  програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер
//  скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно
//  декілька об’єктів-нагадувачів.
// Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
if (confirm('Почати тестування?')) {
    class Remember {
        constructor(msg, interval) {
            if (Remember.myRemember)
                return Remember.myRemember;
            this.msg = msg;
            this.interval = interval;
            return Remember.myRemember = this;
        }
        setRemember() {
            let counter = 0;
            this.intervalRemember = setInterval(() => {
                counter++;
                document.write(`${this.msg} - ${counter}<br>`);
            }, this.interval);
        }
        stopTimer() {
            clearInterval(this.intervalRemember);
        }
        changeMessage() {
            setTimeout(() => {
                this.msg = prompt('введіть нове нагадування', 'Нарада о 14.00');
            }, 5000);
        }
    }
    const remember1 = new Remember('jhhvjhv', 2000);
    remember1.setRemember();
    remember1.changeMessage();
}