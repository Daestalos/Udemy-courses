"use strict";

//alert("Hello");

//const result = confirm("Are you here?");

//const answer = prompt('Вам есть 18?', '18');
// string
//console.log(typeof(answer));

//const answerr = +prompt('Вам есть 18?', '18'); 
// преобразовали в number

// ВСЯ ИНФОРМАЦИЯ ОТ ПОЛЬЗОВАТЕЛЯ STRING!!!!!!!!!!!!!!!



const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);

console.log(typeof(answers));