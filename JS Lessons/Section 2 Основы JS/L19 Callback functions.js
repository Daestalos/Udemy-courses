"use strict";
// 

// callback - это функция, которая передается в другую функцию в качестве аргумента
// и которая потом вызывается по завершению какого-либо действия


function first() {
    // do simething
    setTimeout(function() {
                console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

// переписываем под callback

function first1(callback) {
    // do simething
    setTimeout(function() {
                console.log(1);
    }, 500);
    callback();
}
function second2() {
    console.log(2);
}
first1(second2);




function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done (){
    console.log('Я прошел этот урок');
}

learnJS(`JavaScript`, done); // без (), т.к. мы ее не вызываем, а передаем

// пример callback
const arr1 = [7,4,5,6,8];
function f1(arr, callback){
    arr[3] *= 2;
    callback(arr);
}

function showArr(arr){
    let out = '';
    for(let i = 0; i<arr1.length; i++){
        out+=arr[i] + '_';
    }
    console.log(out); // 7_4_5_12_8_
}

function showArr2(arr){
    let out = '';
    for(let i = 0; i<arr1.length; i++){
        out+=arr[i] + '*'; // 7*4*5*24*8*
    }
    console.log(out);
}

f1(arr1, showArr); // [ 7, 4, 5, 24, 8 ]
f1(arr1, showArr2); // [ 7, 4, 5, 24, 8 ]

function squad(item){
    return item**2;
}

const arr2 = arr1.map(squad);
const arr3 = arr1.map(item => item*2);
showArr(arr2); // 49_16_25_576_64_
showArr(arr3); // 14_8_10_48_16_

/// <<<<<<!!!!!! Синхронный callback !!!!>>>>>>>
// Пример с input
document.querySelector('.b-4').addEventListener('click', () =>{
    getUserName(fixUserName);
});

function getUserName(fixFunc){
    const userName = document.querySelector('.i-4').value;
    console.log(fixFunc(userName));
}

function fixUserName(str){
    return str.trim().toLowerCase(); // trim удаляет пробелы в начале и в конце, но не в середине
}

/// <<<<<<!!!!!! Асинхронный callback !!!!>>>>>>>
// 

async function pageLoader(callback){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // feth производит запрос на сервер
    callback(data); // вызывается callback функция с переданными ей данными data
}
// await заставляет дождаться ответа от сервера и только после этого передает data в callback

// перепишем pageLoader чуть по-другому

function pageLoader2(callback){
    fetch('https://jsonplaceholder.typicode.com/todos/1') // feth производит запрос на сервер
    .then(response => response.json()) // преобразуем ответ
    .then(json => callback(json)); // посылаем в callback
}

function getAJAX(data) {
    console.log('Послал запрос');
    console.log('Ответ с сервера');
    console.log(data);
    
}
pageLoader(getAJAX);
pageLoader2(getAJAX);



// <<<<<!!!!!!!!!!!!!!!!!!! АД КОЛЛБЕКОВ !!!!!!!!!!>>>>>>>

// из-за множества вложенностей трудно контролировать, писать, читать и 
// поддерживать код и т.д.

function pageLoader3(){
    fetch('https://jsonplaceholder.typicode.com/todos/1') // feth производит запрос на сервер
    .then(response => response.json()) // преобразуем ответ
    .then(json => {
        console.log('Послал запрос');
        console.log('Ответ с сервера');
        console.log(json);
        fetch(`https://jsonplaceholder.typicode.com/users/${json.userId}`)
            .then(response => {
               return response.json();
            })
            .then(json => {     
                console.log('Послал запрос');
                console.log('Ответ с сервера');
                console.log(json);
            });
        }
    ); // посылаем в callback
}

pageLoader3();

// Избавиться от ада коллбеков можно с помощью Async await, promise, но можно по-другому
// пример избавления от ада коллбека одним из способов

function pageLoader5(url, callback){
    fetch(url) 
    .then(response => response.json())
    .then(json => callback(json));
}

function getAJAX(data) {
    console.log('Послал запрос');
    console.log('Ответ с сервера');
    console.log(data);
    pageLoader5(`https://jsonplaceholder.typicode.com/users/${data.userId}`, showUser);
}

function showUser(user){
    console.log(user);
    
}

pageLoader5('https://jsonplaceholder.typicode.com/todos/1', getAJAX); // запуск функции


