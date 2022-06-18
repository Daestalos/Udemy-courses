

// <---------------------------- classList --------------------------------->

// Свойство classList содержит как методы, так и очень полезное свойство, по которому мы можем узнать количество классов у элемента

const btns = document.querySelectorAll('button');
// чтобы обрадиться к списку классов, нам необходимо прописать .classList

// в btns у нас лежит псевдомассив, у него не существует свойства classList!!! Для того, чтобы обратиться к btns нам нужно указать элемент
console.log(btns[0].classList.length); // = 2

console.log(btns[0].classList); // = 
// DOMTokenList(2) ['blue', 'some', value: 'blue some']
//  0: "blue"
//  1: "some"
//  length: 2
//  value: "blue some"

// это значит, что у нас у 1 кнопки button есть всего 2 класса (blue и some)



// <------------------------- Методы свойства classList --------------------->

// 1) item() - Метод позволяет нам получить класс, который распологается под определенным индексом
console.log(btns[0].classList.item(0)); // blue
console.log(btns[0].classList.item(1)); // some


// 2) add() - Метод добавляет класс кнопке

console.log(btns[0].classList.add('red')); 
console.log(btns[0]); // = <button class="blue some red"></button>

// мы можем передавать сразу несколько классов перечисляя их через запятую
console.log(btns[1].classList.add('red', 'some', 'custom')); 
console.log(btns[1]); // = = <button class="red some custom"></button>

// 3) remove() - Метод для удаления классов
// в скобки передается полностью имя класса

console.log(btns[0].classList.remove('blue')); 
console.log(btns[0]); // = <button class="some red"></button>

// 4) toggle() - метод позволяет "тогглить" классы. Т.е. если этот класс сейчас есть на элементе, то класс будет убран, если его наоборот нету - добавлен

// Так как мы выше удалили класс blue, то toggle его добавил. Если же он бы был, то toggle его бы удалил
console.log(btns[0].classList.toggle('blue')); // = <button class="some red blue"></button>


// 5) contains - метод, который позволяет проверять наличие класса на определенном элементе, определенного при этом класса и возвращает нам булиновое значение. Если класс есть - возвращает true, нет - false. 
// Наличие класса можно использовать и в условиях. При помощи item мы можем получить определенный класс и поместить его в условие, но проблемма в том, что мы не всегда уверены, что класс находится строго в одной позиции, для этого мы используем contains

if (btns[1].classList.contains('blue')){
    console.log('blue');
} else {
    console.log('blue missing');
} // = blue missing

console.log(btns[1].classList.add('blue')); 

if (btns[1].classList.contains('blue')){
    console.log('blue');
} else {
    console.log('blue missing');
} // = blue


// ========= Пример ==========

// для начала уберем класс, который добавили выше и вернем изначальные классы
btns[0].classList.remove('red');

btns[0].addEventListener('click', ()=>{ // если мы кликаем на 1 кнопку
    if (!btns[2].classList.contains('red')){ // то проверяем, есть ли у 3 кнопки класс red
        btns[2].classList.add('red'); // нету - добавляем
    } else {
        btns[2].classList.remove('red'); // есть - удаляем
    }
});

// c использованием toggle

btns[0].addEventListener('click', ()=>{ // если мы кликаем на 1 кнопку
    btns[3].classList.toggle('red');
    // В сложный скриптак не всегда есть возможность использовать toggle
});



// <-------------------------- Делегирование событий ---------------------------->

// Бывает так, что на странице много кнопок, мы хотим чтобы при клике на одну из них вызывалось одно и тоже событие. Мы конечно можем повесить его на каждую кнопку отдельно, но есть проблема, что если эти кнопки или какие-то другие триггеры будут добавляться без нашего ведома (динамически), то событий у них уже не будет, ведь они не обрабатываются циклом, где мы это все назначаем. В этом случае нам поможет Делегирование

// Делегирование событий - мы берем элемент, который является родителем для всех кнопок и работаем непосредственно с ним, т.е. мы назначем функцию для его потомков, если они подходят под какие-то определенные параметры

// возьмем родителя всех наших кнопок
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (e)=>{
    console.dir(e.target);
    // tagName всегда пишется капсом
    // if (e.target && e.target.tagName == 'BUTTON'){
    //     console.log('hello'); // будет выводится при нажатии на все кнопки
    // }
    if (e.target && e.target.classList.contains('red')){
        console.log('hello on red button'); // будет выводится при нажатии на все кнопки
    }

});

// e.target.matches() - какой-то элемент совпадает с чем-то

wrapper.addEventListener('click', (e)=>{
    console.dir(e.target);
    if (e.target && e.target.classList.matches('button.red')){ 
        console.log('matches'); // будет выводится при нажатии на все кнопки
    }

});