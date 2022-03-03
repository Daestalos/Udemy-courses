"use strict";

// FUNCTION DECLARATION
function foo(){
    // код
}
// FUNCTION EXPRESSION
let fooo = function(){
    // код
};
// СТРЕЛОЧНАЯ ФУНКЦИЯ 
 //    () =>

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\\
///// FUNCTION DECLARATION

// в круглые скобки передается аргумент функции, их может быть несколько.
function showFirstMessage (text) { 
    console.log(text);
}
// имя должно быть глаголом с припиской того над чем выполн. действие
showFirstMessage('Hello World!');


// переменная внутри функции снаружи недоступна.
function showFirstMessage (text) { 
    console.log(text);
    let num = 20; // локальная переменная
}
showFirstMessage('Hello World!');
console.log(num); // ошибка

//**\\

let num = 20; // глобальная переменная

function showFirstMessage (text) { 
    console.log(text);
    num = 10; // функция может использовать глоб пер. внутри себя
}
showFirstMessage('Hello World!');
console.log(num); // выведет 10


//**\\ 

let num1 = 20; // глобальная переменная

function showFirstMessage (text) { 
    console.log(text);
    let num1 = 10; // в данном случае это уже локальная переменная
}
showFirstMessage('Hello World!');
console.log(num1); // выведет 20, ибо обращается к глобальной переменной
// локальная пеменная существует только внутри функции.

//*\\


function f3(val) {
    return val + 1;
}

function f2(f_1) { // f3
    return f_1(1) * 2; // 4
}

function f1(f_1, f_2) { // f_1 = f2, f_2 f3
    return f_1(f_2) * 3; // 12
}

f1(f2, f3);

//*\\


// замыкание функций.

let numm = 20; 

function showFirstMessage (text) { 
    console.log(text);
    let numm = 10; 
    console.log(numm); // 10, использует локальную
}
showFirstMessage('Hello World!');
console.log(numm); // 20


let numm1 = 20; 

function showFirstMessage (text) { 
    console.log(text);
    console.log(numm1); // 20, использует глобальную пер.
}
showFirstMessage('Hello World!');
console.log(numm1); // 20


//*\\

function cacl(a, b) {
    return (a+b); //return позволяет вернуть 
   // console.log ('dwed'); //не можем получить,
   // return останавливает функцию.
}

console.log (cacl(4, 3));
console.log (cacl(5, 6));
console.log (cacl(10, 6));


function ret() {
    let numt = 50;
    return numt; // передает во "внешний мир"
}

const anotherNum = ret();
console.log(anotherNum); // 50


// Функция работает еще до того, как она была объявлена!!!!!
console.log (cacl1(4, 3));
console.log (cacl1(5, 6));
console.log (cacl1(10, 6));

function cacl1(a, b) {
    return (a+b); 
  
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\\
///// FUNCTION EXPRESSION

// она создается только тогда, когда до нее доходит поток кода
// можно вызвать только после объявления.
const logger = function() {
    console.log('hello!');
};
logger();

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\\
///// Стрелочная функция

// функция не имеет контекста вызова

const calcc = (a, b) => a+b;
calcc(1,2);
// создаем переменную, в которую помещаем функцию
// если функция в одну строчку, можно не писать скобки и return
// а писать как выше
const calccc = (a, b) => { return a + b} ;

const calcd = a => a^2;

// если функция разрастается, то ставим фигурные скобки

const calct = (a, b) => {
    console.log('1');
    return a + b;
};

// Параметры по умолчанию

function sumAll(...all){ // позволяет хранить внутри все передаваемые значения в виде массива 
    let result = 0;
    for (let num of all){
        result += num
    }
    console.log(all); 
    return result;
}

const res = sumAll(1,2,3,4,5)
console.log(res);


//*\\


// function f3(val) {
//     return val + 1;
// }

// function f2(f_1) { // f3
//     return f_1(1) * 2; // 4
// }

// function f1(f_1, f_2) { // f_1 = f2, f_2 f3
//     return f_1(f_2) * 3; // 12
// }

let result = ((f_1, f_2) => f_1(f_2) * 3) ((f_2) => f_2(1)*2, (val) => val + 1);
console.log(result);





// <<<<<<<<<<<<<!!!!!!!!!!!!! ЗАМЫКАНИЯ !!!!!!!!!!!!!>>>>>>>>>>>>>>

const createCount = (counter=0) => {
    let count = counter;
    return () => {
        count++;
        console.log(count);
    };
};


const logcount = createCount(5);
logcount();
logcount();
logcount();
logcount();


const sumsomesum = (a, b, c) =>{
    let suma = a, sumb = b, sumc = c, sumall = 0;
    return () =>{
        sumall += suma + sumb + sumc;
        console.log(sumall);
    }
    
};
const sum = sumsomesum(2,3,4);
sum();


function createMember(name){ // замыкается параметр name
    return function(lastName){ // ластнейм варьируется
        console.log(name+lastName)
    }
}

const logWithLastName = createMember('Sasha')
logWithLastName(' Minin');
logWithLastName(' Alexandrov');

// приватные переменные, для защиты данных,
// т.к. в JS нету нативного механизма, 
//позволяющего делать приватные переменные
 


// <<<<<<<!!!!!!!!!!!!!!!!!!!!!!THIS!!!!!!!!!!!!!!!>>>>>>>>>
// в нестрогом режиме всегда является ссылкой на объект
// а в строгом режиме может иметь любое значение.
// Значение this – это объект «перед точкой», который использовался для вызова метода.
//Стрелочные функции особенные: у них нет своего «собственного» this. (при передачи в него какого-то аргумента, он забьет на него)
// пример

let a = () => { return this; }
a(); // window

a.call(car); // window

// Если мы используем this внутри стрелочной функции то его значение берётся из внешней «нормальной» функции.
// 

let calculator = {
    a: 2,
    b: 3,
    read (a = this.a, b = this.b) {
        this.a = a;
        this.b = b;
    },
    sum (){
        let sum = 0;
        sum = this.a + this.b;
        console.log(sum);
    },
    mul(){
        let mul = 0;
        mul = this.a * this.b;
        console.log(mul);
    }
  };
  
  calculator.read(10, 22);
  calculator.sum();
  calculator.mul();



  let ladder = {
    step: 0,
    up() {
    this.step++;
    return this;
    },
    down() {
     this.step--;
     return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this;
    }
  };

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.up().down().showStep();


const tea = {
    name: 'Чай',
    price: 120,
    getNameAndPrice
};

const coffe = {
    name: 'Якобс',
    price: 200
}

function getNameAndPrice() {
    console.log(`Имя товара: ${this.name} и его цена ${this.price} $`);
    return this;
};

function getPrice(currency = ''){
    console.log(this.price + currency);
    return this
}

tea.getNameAndPrice(); // Имя товара: Чай и его цена 120 $
getPrice.apply(coffe, ['руб']); // 200руб
getPrice.call(tea, '$'); // = 120$





function createCar(name, ser) {
    let self = {};

    self.name = name;
    self.ser = ser;

    return self;
}

function printCar() {
    console.log(this.name + " " + this.ser); // undefined.

} // THIS будет ссылаться на глобальный объект!!!!!!!!!!!!!!!!!!!!!!1 
// чтобы этого избежать print_car.call(car), чтобы передать в this car  == BMW X5

// альтернатива
function printCar(carr) {
    console.log(carr.name + " " + carr.ser); // = "BMW", "X5" 

}


let car = createCar("BMW", "X5");

printCar(car);