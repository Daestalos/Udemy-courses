"use strict";

// в начале мы всегда обращаемся к document, т.е. к нашей странице
// допустим у нас есть похожие элементы с одинаковыми классами, но нам нужно достать только их из их родительского класса, например:

// <div class = "child"></div>
// <div class = "parent">
//     <div class = "child"></div>
//     <div class = "child"></div>
//     <div class = "child"></div>
// </div>
// но нам нужно только те, которые в родительском классе Parrent
// для этого мы можем обратиться в таком виде
let parrent = document.querySelector('.parent'),
    child = parrent.querySelector('.child');
// в таком случае мы получим элементы только те, которые находятся внутри родителя parent

// <----------Старые способы получения элемента со страницы---------->

// ID всегда должен быть уникальным
// 1) document.getElementById - получение элемента по id

// получаем элемент, у которого id
const box = document.getElementById('box');

// 2) получение элемента по тегу (например div)

// мы получаем в переменную btns не просто элемент, а псевдомассив
// псевдомассив - массив не имеющий методов (таких как pop, push и т.д.)
const btns = document.getElementsByTagName('button');
// = HTMLCollection(5) [button, button, button, button, button]

// чтобы получить элемент из такого псевдомассива, нам нужно получить индекс элемента псевдомассива, существует 2 способа:

// 1. Допустим при обращении мы хотим получить только вторую button
const oneBtn = document.getElementsByTagName('button')[1];

// 2. Поставить такой индекс не при определении переменной, а таким способом:
console.log(btns[1]); // в таком случае мы выбираем второй элемент уже из существующего псевдомассива 

// даже если элемент с таким теггом у нас всего один, мы все-равно будем получать HTMLCollection (он же псевдомассив), но дам будет только один элемент, чтобы его получить:
console.log(btns[0]); // 0, так как он один и будет первым элементом

// 3) использование классов (получаем htmlcollection)
const circles = document.getElementsByClassName('circle');
// при чем . нам не нужно ставить перед circle, метод сразу понимает, что это класс

// <---------------------- более современные способы --------------------->

// 1) querySelectorAll
// во внутрь круглых скобок мы помещаем css selector, это может быть уникальный индитификатор (через #), это может быть уникальный класс, псевдокласс, атрибуты и т.д.
// https://learn.javascript.ru/css-selectors

// querySelectorAll так же возвращает псевдомассив (NodeList), но у него есть один метод - forEach

const hearts = document.querySelectorAll('.heart');
// получаем каждый элемент из псевдомассива
hearts.forEach(item => {
    console.log(item);
})

// 2) querySelector - аналогичен методу выше, однако через него мы получаем только первый элемент

// получаем только один элемент со страницы, только первых элемент, который подходит под наш запрос. Данный метод удобно использовать, когда у нас есть элемент с уникальным ксс селектором
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

// так же если нам требуется отработать с элементом всего один раз, нам не обязательно его передавать в переменную
document.querySelector('.heart') // и дальше какой-то метод через .