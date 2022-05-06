"use strict";
// Переменные

let number = 4.6;
console.log(4/0);
console.log('string'*9); 

const persone = 'Alex';
const bool = true;

let und;
console.log(und); // = undefined


console.log(name); // вар нельзя вызвать до объявления переменной
var name = 'Ivan'; 

// Объект

const obj = {
    name: 'John',
    age : 25,
    isMarried: false
};
console.log(obj.name);


// Массивы и перебор их

let arr = ['plum.png', 'orange.jpg', 6, {}, [], 'apple.bmp', function(){console.log("its, work!!");}, false];
console.log(arr[1]); // = "orange.jpg"
console.log(arr[6]()); // = its, work!! (вызовет функцию)


for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    // orange.jpg
    // its, work!!
    // undefined
    // 2
    // plum.png
    // orange.jpg
    // 6
    // {}
    // []
    // apple.bmp
    // [Function (anonymous)]
    // false
}

// можно так же сделать при помощи for of
let array = [1, 2, 3, 4, 'plus', {}, [], false];
for (let arrItems of array){
    console.log(arrItems);
    // = 1
    // 2
    // 3
    // 4
    // plus
    // {}
    // []
    // false
}

// перебор через forEach
let arrayTwo = [1, 2, 3, 4, 'plus', {}, [], false];
arrayTwo.forEach(function(item, index, array){
    console.log(`item: ${item}, index: ${index}, array: ${array}`
    );
//  =  item: 1, index: 0, array: 1,2,3,4,plus,[object Object],,false
    // item: 2, index: 1, array: 1,2,3,4,plus,[object Object],,false
    // item: 3, index: 2, array: 1,2,3,4,plus,[object Object],,false
    // item: 4, index: 3, array: 1,2,3,4,plus,[object Object],,false
    // item: plus, index: 4, array: 1,2,3,4,plus,[object Object],,false
    // item: [object Object], index: 5, array: 1,2,3,4,plus,[object Object],,false
    // item: , index: 6, array: 1,2,3,4,plus,[object Object],,false
    // item: false, index: 7, array: 1,2,3,4,plus,[object Object],,false
});


// двумерный массив

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix[0][1]); // = 2

for (let i = 0; i<matrix.length; i++) {
    for(let j = 0; j<matrix[i].length; j++) {
        console.log(matrix[i][j]);
        // = 1
        // 2
        // 3
        // 4
        // 5
        // 6
        // 7
        // 8
        // 9
    }
}

// можно так же сделать при помощи for of





