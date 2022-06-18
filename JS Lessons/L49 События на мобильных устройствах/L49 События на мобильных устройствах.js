
// http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya

// https://habr.com/ru/company/sibirix/blog/227175/

// <---------------- События на мобильных устройствах ---------------->

// Событий для мобильных устройств всего 6 :

// 1) touchstart - возниет при касании элемента (пальцем коснулся)

// 2) touchmove - если палец при касании начинает двигаться

// 3) touchend - как только перестали касаться элемента

// 4) touchenter - когда ведем пальцем по экрану и при этом "наскальзываем" на какой-то другой элемент, на который повешено это событие

// 5) leave - палец продолжил скользить и вышел за пределы этого элемента

// 6) touchcancel - возникает только тогда, когда точка соприкосновения больше не регистрируется на поверхности (например мы можем на мобильном устройстве что-то серфить и наш палец выйдет за пределы браузера)

window.addEventListener('DOMContentLoaded', () =>{

    const box = document.querySelector('.box');

    // 1) touchstart
    box.addEventListener('touchstart', (e)=>{
        e.preventDefault();

        console.log('Start');
    });

    // 2) touchmove
    box.addEventListener('touchmove', (e)=>{
        e.preventDefault();

        console.log('move');
    });

    // 3) touchend
    box.addEventListener('touchend', (e)=>{
        e.preventDefault();

        console.log('end');
    });

    // 4) touchenter
    box.addEventListener('touchenter', (e)=>{
        e.preventDefault();

        console.log('Enter');
    });

    // 5) leave
    box.addEventListener('leave', (e)=>{
        e.preventDefault();

        console.log('leave');
    });

    // 6) touchcancel
    box.addEventListener('touchcancel', (e)=>{
        e.preventDefault();

        console.log('Cancel');
    });

// <-------------- Свойства при работе с моб.устр. ------------->

// 1) touches - выдает список всех пальцев, которые сейчас взаимодействуют с экраном
// 2) targetTouches - если нас интересуют все пальцы, которые взаимодействуют с конкретным элементом
// 3) changedTouches - список пальцев, которые учавствуют в текущем событии (например, если это событие touchend, то список будет содержать палец, который был убран, даже если 4 пальца у нас до сих пор на экране, т.е. это именно пальцы, которые совершили определенное уже назначенное действие)
box.addEventListener('touchstart', (e)=>{
    e.preventDefault();

    console.log(e.touches); // на выходе получаем объект TouchLish {0: Touch, lenght: 1}

    console.log(e.targetTouches); 

    console.log(e.changedTouches);
});

});