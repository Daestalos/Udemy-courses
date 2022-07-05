"use strict";

if (9 == 4){
    console.log('ok!');
} else {
    console.log('Error');
}



const num = 50;
if (num<49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log ('Ок');
}


(num === 50) ? console.log('Ok!') : console.log('Error');  
// тернарный оператор - это ?. В его работе учавствует 3 аргумента

const numm = 50;
switch (numm) {
    case 49:
        console.log('Неверно');
        break;
    case 100: 
        console.log('Неверно');
        break;
    case 50: 
        console.log('Ok!');
        break;
    default: 
        console.log('not today!');
        break;
    
}

// строгое сравнение.
const num1 = '50';
switch (num1) {
    case '49':
        console.log('Неверно');
        break;
    case '100': 
        console.log('Неверно');
        break;
    case '50': 
        console.log('Ok!');
        break;
    default: 
        console.log('not today!');
        break; 
}
