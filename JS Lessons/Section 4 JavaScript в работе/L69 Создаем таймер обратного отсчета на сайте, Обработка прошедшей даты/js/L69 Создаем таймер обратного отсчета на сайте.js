"use strict";

window.addEventListener('DOMContentLoaded', ()=>{
    
    // < Tabs >
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent() {
        // скрываем все табы
        tabsContent.forEach(item =>{
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        // убираем класс активности
        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        });

    }

    // i = 0 - если функция вызывается без аргумента, то по умолчанию берем 0
    function showTabContent(i = 0){
        // указываем какой таб будет у нас отображаться

        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(); // показываем первый слайд

    tabsParent.addEventListener('click', (e)=>{
        // переопределяем, это делается для того, что если нам дальше придется кажыдй раз прописывать, то намного проще использовать такую конструкцию
        const target = e.target;

        // сначала проверяем просто на target есть ли он && проверяем что мы точно кликнули по tab, а не по родителю
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach( (item, i) => {
                if (target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    // < Timer >

    // определяем переменную, которая будет обозначать какой-то дедлайн
    const deadline = '2022-04-30';

    // функциця, которая будет определять разницу между нашим дедлайном и текущем временем
    function getTimeRemaining(endtime){
        // получаем кол-во миллесек, которое будет в нашем конечном времени, до которого нам нужно досчитать и отнимаем от нынешней даты. Date.parse(new Date()) можно убрать Date.parse и оставить new Date(), разницы не будет
        const t = Date.parse(endtime) - Date.parse(new Date()); 

        // дополнительно проверим дату на прошедшую дату
        let days, hours, minutes, seconds
        if (t <= 0){
            // вместо нулей можно прописать все что угодно, сформировать новый блок верстки и т.д.
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
        // Теперь эту разницу в мс нужно превратить в количество дней, часов, минут и секунд
        // округляем для ближайшего целого, во внутрь помещаем мат. выражение для высчитывания дней
            // 1000 * 60 (колличество мил. в минуте) * 60 ( в часе ) * 24 (в дне), получаем сколько в сутках мс
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            // общее количество часов делим на 24 (% делит без остатка), но так как мы делим с оператором %, то мы получим хвостик, которого не хватает до полных суток
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            // сначала получаем количество секунд / 60 и получаем количество минут % 60 чтобы получить хвастик минут от часа
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor( (t/1000) % 60 );
        }



        // возвращаем объект с нашими значениями
        return {
            'total': t,  // общее количество мс
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    
    } 

    // функция, которая будет устанавливать наши часы, наш таймер на странице (главный элемент на странице и конечное время)
    function setClock(selector, endtime){
        // сделано это так, чтобы мы могли использовать эту функцию для каких-то других таймеров
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        
        // Предусматриваем поведение, что таймер мигает и показывает изначальные значения, а затем их заменяет на правильные просто вызвав updateclock. Этот баг происходит, так как изначально у нас updateClock вызовется только через 1 сек
        updateClock();

        //функция, которая будет обновлять наш таймер каждую секунду
        function updateClock() {
            // функция будет производить у нас 3 главных действия
            // 1) расчет времени, которое у нас осталось прямо на эту секунду
            // получаем время, которое осталось
            const t = getTimeRemaining(endtime);

            // 2) рассчетные величины поместить на страницу 
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);




            // 3) запускать функцию каждую секунду и остановить ее, когда время выйдет. Прописываем timeInterval и задаем ему интервал. Берем из объекта total и пишем условие: если в t.t меньше/= 0, то очищаем интервал

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }

        // функция, которая ставит 0 перед значение, если значение < 0 
        function getZero (num){
            if (num >= 0 && num < 10){
                return `0${num}`;
            } else {
                return num;
            }
        }

    }
    // запускаем функцию и передаем ей родительский элемент и конечное время
    setClock('.timer', deadline);
});