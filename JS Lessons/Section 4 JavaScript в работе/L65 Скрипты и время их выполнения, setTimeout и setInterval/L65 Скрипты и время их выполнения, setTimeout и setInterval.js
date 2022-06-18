
// <------------------------- setTimeout -------------------------------->

// setTimeout - позволяет запустить кострукцию спустя какое-либо время

const timerId = setTimeout(function(){
    console.log('Hello спустя 2 секунды'); // Hello спустя 2 секунды
}, 2000); // время в мс

// 1) Данная конструкция может принимать аргументы, который будут аргументами для функции внутри

const timerIdTwo = setTimeout(function(text){
    console.log(text); // Hello спустя 2 секунды
}, 2000, 'Hello спустя 2 секунды'); // Hello перейдет как text

// 2) Мы можем передавать уже готовую фунцию

const timerIdThree = setTimeout(logger, 2000); // = Hello спустя 2 секунды

function logger (){
    console.log('Hello спустя 2 секунды');
}

// Не обязательно setTimeout приспаивать переменной, ее можно вызвать и так. Дело в том, что когда мы передаем setTimeout переменной, мы записываем числовой индитификатор этого таймера
setTimeout(logger, 2000); // = Hello спустя 2 секунды


// 3) Сбросить setTimeout

clearInterval(timerId); // timerId не выведится

// <---------------------- Рекурсивный setTimeout --------------------->

// !!! ВАЖНО !!!
// Чем рекурсивный setTimeout лучше чем setInterval
// Когда таймер с интервалом работает, он не учитывает как долго функция будет работать внутри него. Для тяжелых функций используют рекурсивный setTimeout

let id = setTimeout(function log(){
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);


// <-------------------------- setInterval ------------------------------->

// setInterval - повторение через определенный промежуток времени
// выглядит она точно так же, как и setTimeout, принимает аргументы точно так же и отменяется точно так же

// setInterval без разницы сколько будет выполняться функция логгер, по истечению времени она выполнит ее еще раз

const btn = document.querySelector('.btn');
let timerIdd,
    i = 0;

btn.addEventListener('click', ()=>{
    timerIdd = setInterval(logg, 500); // после клика в timeIdd записывается уникальный идентивикатор 
});



function logg (){
    console.log('Интервал спустя 2 секунды');
    i++;
    if (i === 3){
        clearInterval(timerIdd); // теперь мы его можем очистить
    }
}



// < --------------------- Практика ------------------------ >

// Анимация перемещения синего квадрата в нижний правый угол (простейшая самая базовая анимация)

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 50);

    function frame(){
        if (pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px'; 
        }
    }

}

btn.addEventListener('dblclick', myAnimation);
