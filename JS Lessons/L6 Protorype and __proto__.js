"use strict";

// в js все является объектами и у них есть прототипы
// Прототип - определенный объект, который присутствует у родительских элементов
// с помощью него мы можем наследоваться от разных объектов и иметь доступ к более расширенным функциям
// и __proto__ и prototype это свойства объекта


let a = { value: 18};
let b = {age: a};
let c = a;
console.log(a === b.age); // true
console.log(a === c); // true
b.age.value = 21;
console.log(a.value === 21); // true
console.log(c.value === 21); // true

// объекты равны между собой только если это один и тот же объект
console.log({} != {}); // true


// __proto__ есть у всех объектов. Чтобы понимать, что это за __proto__, нужно
// ТОЧНО знать с помощью какой функции-конструктора(класса) создан данный объект( new XXX())

let promise = new Promise( ()=> {}) // new Promise(...) || promise.__proto__ === Promuse.prototype
let man = {} // new Object(...) || man.__proto__ == Object.prototype
let users = [] // new Array(...) || users.__proto__ == Array.prototype
let agee = 18; // new Number(...)
let srt = 'string' // new String(...)
function sub(){} // new Function(...)
let sub1 = function(){} // new Function(...)
let sub2 = () => {} // new Functiom(...) 
class sub3 {} // new Function(...)
let newsub = new sub3() // new sub3 || newsub.__proto__ = sub3.prototype
let ok = true // new Boolean(...)


// Каждый prototype - это независимсый объект, сам по себе, с определенным набором
// свойств и методов
// prototype есть у class, либо у function

// РАЗНИЦА!!!!
// __proto__ - у любого объекта
// prototype - у class, либо у function

// __proto__ любого объекта ссылается на prototype класса (функции-конструктора),
// с помощью которой этот объкут был создан (сконструирован)


// ЗАЧЕМ КЛАССУ НУЖЕН объект prototype
// Если мы пытаемся прочитать свой-во объекта, либо вызвать его метод, а данного
// св-ва/метода нет, то объект полезет искать его через ссылку __proto__ в
// prototyp-e класса, с помощью которого он был создан

// пример 1
let dim = {
    name:'Dima'
};
dim.toString();
// dim.__proto__ => Object.prototype = {toString(){}}

// пример 2
function Samurai(name){
    this.name = name;
}
Samurai.prototype.hello = function() {
    console.log(this.name);
};

// выше в виде class

class Samuraiex{
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log(this.name);
    }
}

let shogun = new Samuraiex('Dima');
shogun.hello(); // shogun.__proto__ => Samuraiex.prototype, и там находит hello

let shogun2 = new Samurai('Sasha');
shogun2.hello(); // shogun2.__proto__ => Samurai.prototype, и там находит hello



// <<<<!!!!!!!!! Пример использования !!!!!>>>>>>
const person = {
    name: 'Maksim',
    age: 25,
    greet(){
        console.log('greet!');
    }
};

person.sayHello(); // ошибка, т.к. person не имеет метода sayHello
//но, написав
person.toString();// выполнится, т.к. у прототипа объекта person есть метод toString

// созданим свой прототип для объекта

Object.prototype.sayHello = () =>{
    console.log('Hello!');   
};

person.sayHello(); // сработает, т.к. он стал для него доступным


// пример

const Lena = Object.create(person); // с помощью create создаем новые объекты
// в метод create мы можем передать какой-то объект, который будет являтсья
// прототипом для объекта Lena
// На данный момент Lena является пустым объектом {}
// но
Lena.greet(); // = greet!
// прототип лены имеет объект person, а у person уже его же прототипы
console.log(Lena.name); // = Maksim

//Допустим у поля Lena должно быть свое имя
Lena.name = 'Elena';
console.log(Lena.name); // = Elena

// прототип идет сверху-вниз, если он на верхнем уровне находит какое-то поле или функцию
// то сразу же ее вызывает, но если он ничего не находит, то тогда он обращается к прототипу
// и старается найти уже что-то в нем и т.д. пока не найдет, либо выдаст ошибку, если нету

Lena.sayHello(); // = Hello!








// <<<<!!! Примеры !!!>>>>
//1
console.log( ({}).prototype === ({}).__proto__); // = false
//2
function TOrF() {}
console.log(TOrF.prototype === TOrF.__proto__); // = false
//3
function TOrF() {}
function TOrF2() {}
console.log(TOrF.__proto__ === TOrF2.__proto__); // = true
console.log(TOrF.prototype === TOrF2.prototype); // = false
//4
let comp = (props) => {
    return `<div>i dnt know prototype</div>`;
};
console.log(comp.prototype === Object.prototype); // false
//5
let age = 18;
console.log(age.__proto__ === Number.__proto__); // = false
console.log(age.prototype === Number.prototype); // = false
//6
class Hacker {}
console.log(Hacker.__proto__ === Function.prototype); // = true
//7
function IT(){}
// console.log(IT.__proto__ === ??? );


var a = {
    b: 1,
    c: {
      d: 2
    }
}

var b = Object.create(a);

delete b.b;
console.log(b.b);

delete a.b;
console.log(b.b);