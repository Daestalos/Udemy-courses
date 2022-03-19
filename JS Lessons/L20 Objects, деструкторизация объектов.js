"use strict";

//Функции, которые находятся в объекте в качестве его свойств, называются «методами».


//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
// console.log(options['colors']['border']);

// delete options.name;

// console.log(options);
// перебор свойств внутри объекта
for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i  in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }

}

// for of нельзя перебрать объекты, только массивы




const options1 = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

let counter = 0;
for (let key in options1) {
    if (typeof(options1[key]) === 'object'){
        for (let i  in options1[key]) {
            console.log(`Свойство ${i} имеет значение ${options1[key][i]}`);
            counter++; // =2
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options1[key]}`);
        counter++; // =3, т.к. colors имеет свои свойства и смотрится циклом выше.
    }

}

console.log(counter); // =5


let counter1 = 0;
for (let key in options1) {
   counter1++; //=4
}

console.log(counter1);



const optionss = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(optionss)); // = [ 'name', 'width', 'height', 'colors' ]

console.log(Object.keys(optionss).length); //=4




const obj = {
    name: 'test',
    a: 123,
    qwe: 435,
    width: 1024,
    height: 1024,
    colors: {
        border: 'blackewarawer',
        bg: 'red'
    }
};

for (let key in obj){
    for (let keyi in obj[key]){
        console.log(Object.keys(obj[key][keyi]).length);
    }
    
} /// мой код (такое себе)



////////!!!!!!!!!!!!!!\\\\\\\\\
/// деструктиризация объекта!!!!
const opt = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: { // вложный объект
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){ // метод объекта
        console.log('Test');
    }
};

const {border, bg} = opt.colors; // деструктиризация 
console.log(border);
opt.makeTest();






