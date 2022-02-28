"use strict";

// Методы - это вспомогательные функции
// Свойства - это вспомогательные значения


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// документация по строкам и методам
const str = 'Test'; 
const arr = [1, 2, 4];
// lenght - свойство
console.log(str.length); // =4
console.log(arr.length); // =3

console.log(str[2]); // =s
console.log(str[2] = 'd'); // не сможем изменить напрямую, это делается через методы
console.log (str); // =test

console.log(str.toUpperCase()); // = TEST
//обязательно круглые скобки в конце, т.к. метод.
// str.toUpperCase() такой код возвращает новое значение, оно напрямую не изменяет str
console.log (str); // =test

// поиск подстроки
const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); // =5, с 5 позиции начинается fruit, номерация с 0

const fruit1 = 'Some fruit';
console.log(fruit1.indexOf('q')); // =-1, не было найдено


const logg = 'Hello world';

console.log(logg.slice(6, 11)); // =world
// с 6 позиции, по 10 (10+1, т.к. нужно до той, которая не включается)
console.log(logg.slice(6)); // =world
console.log(logg.slice(-5, -1)); // =worl
// начинается с 5 справа

console.log(logg.substring(6, 11)); // =world
// не поддерживает отриц. значения

console.log(logg.substr(6, 5)); // =world
// мы на 2 позиции указываем длинну, сколько нам нужно вырезать (5)


const num = 12.2;
console.log(Math.round(num)); //= 12 (округляем)

const test = '12.2px';
console.log(parseInt(test)); //=12 (уже числовой тип данных)
// parseInt переводит число в другую систему исчисления
console.log(parseFloat(test)); // =12.2
// возвращает в 10-м варианте