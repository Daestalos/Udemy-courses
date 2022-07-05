
let num = 50,
    a = 50;
  

// while
while (num <= 55)
{
    console.log(num);
    num++;
}

//do while
do {
    console.log(a);
    a++;
} 
while (a <= 55);

// for
let   b = 50;
for (let i = 1; i < 8; i++) {
    console.log(b);
    b++;
}

// for with continue/break
for (let i = 1; i < 10; i++) {
    if (i === 6){
       // break;
       continue; // позволяет пропустить шаг, но не прерывает цикл
    }
    console.log(i);
}


// перебор массива чере цикл

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



// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 0; i < length; i++){
    result += '*';
    console.log(result);
}


// от ивана


let resultt = '';
const lengthh = 7;

for (let i = 0; i < lengthh; i++){

    for (let j = 0; j< i; j++){
        resultt += '*';
    }
    resultt += '\n';
}

console.log(result);

//      *
//     ***
//    *****
//   *******
//  *********
const lines = 5;
let res = '';
// Проверяется именно переменная result, формируйте строку в ней

for(let i = 0; i < lines ;i++){
    for (let j = 0; j < lines - i; j++){
        res += ' ';
    }
    for(let j = 0; j < 2 * i + 1; j++){
        res +='*';
    }
    res += '\n';
}
console.log(res);
