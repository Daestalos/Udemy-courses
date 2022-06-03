
// Динамическая типизация - это возможность одного типа данных превращаться в другой

"use strict";

// <----------- to string ------------>

// 1) Команда String превратила null в строковый тип данных (просто обернула в ковычки) (довольно редко пользуются)
console.log(typeof(String(null)));
console.log(typeof(String(4)));
// 2) конкатинация (сложение строки с чем-то)
console.log(typeof(5+''));

// пример
const num = 5;
console.log("https://vk.com/catalog/"+num);
// лучше использовать интерполяцию ( ` ` )

// пример использования классической динамической типизации
const fontSize = 26 + 'px';

// <---------- to number ------------->

// 1) Данный способ не используется
console.log(typeof(Number('4')));

// 2) унарный плюс
console.log(typeof(+'5')); // = number

// 3)
console.log(typeof(parseInt('15px', 10))); // = number

// реально применение (превращает строковый тип данных в число благодаря унарному плюсу)
let answ = +prompt('Hello your name', '');


// <---------- to boool ----------->

// что будет всегда превращаться в false
// 0, '' (без пробела), null, undefined, NaN
// все остальное является true

// 1)
let switcher = null;
// switcher = false
if (switcher) {
    console.log('Working...');
}
// теперь он равняется true
switcher = 1;
if (switcher) {
    console.log('Working...');
}
// точно такой же прием применяется при работе на странице

// 2) !! - два знака отрицания (превращает строку в булиноое значение)
console.log(typeof(!!'44444')); // = boolean 