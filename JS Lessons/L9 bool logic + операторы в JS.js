"use strict";

console.log('arr' + " - object"); // arr - object
console.log(4 + " - object"); // 4 - object
console.log(4 + +" - object"); //NaN
console.log(4 + +"5"); //унарный плюс

let incr = 10, // присваивание значения 10
    decr = 10;


incr++; // инкремент
decr--; // декримент

console.log(incr++); // постфиксная форма выводит старое значение, затем ++
console.log(--decr); // префиксная форма изначально -- и вывод. 



console.log(5%2); // % возвращает остаток от деления

console.log(2*4 == '8'); // == сравнение по значению
console.log(2*4 === '8'); // === строгое сравнение по типу данных

// оператор && (и) только когда 2 true


const isChecked = true,
      isClose = true;
console.log(isChecked && isClose);

const ham = true;
const fri = true;

if (ham && fri){ // выполнится, т.к. выполненны оба условия
    console.log('Я сыт!');
}

// || - оператор или

const isChecked1 = true,
      isClose1 = false;
console.log(isChecked1 || isClose1); // хотя бы 1 правдив = true 
console.log(isChecked1 || !isClose1); // !isClose1 = true

console.log(2+2*4 === 8); // false

console.log(2+2*2 != 8); // не равен = true


