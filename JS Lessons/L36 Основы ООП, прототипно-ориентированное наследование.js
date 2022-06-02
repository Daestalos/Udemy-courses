"use strict";

let str = 'some';
let strObj = new String(str);

console.log(typeof(str)); //строка
console.log(typeof(strObj)); // объект

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
};

///!!!!!!!!\\\\
////Object.create
const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

////!!!!!!\\\
///// Object.setPrototypeOf

// jonh.__proto__ = soldier; // устаревший формат

Object.setPrototypeOf(jonh, soldier); //идентична записи выше

console.log(jonh.armor); // = 100
jonh.sayHello(); // = hello


