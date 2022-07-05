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



    // < Модальное окно >

    // Прописываем нашим кнопкам-триггерам дата-атрибут (которые открывают модальное окно (data-modal) и закрывают (data-close)) для того, если у них разные классы и чтобы можно было на них назначит одно и тоже действие

    const modal = document.querySelector('.modal'),
          modalTrigger = document.querySelectorAll('[data-modal]'),
          modalCloseBtn = document.querySelector('[data-close]');

    function openModal(){
        // modal.classList.add('show');
        // modal.classList.remove('hide');
        // либо через toggle
        modal.classList.toggle('show');
            
        // Зафиксируем модальное окно, чтобы не работала прокрутка когда оно открыто
        document.body.style.overflow = 'hidden';
        
        // убираем таймер, если пользователь сам открыл модальное окно
        clearInterval(modalTimerId);
    }      

    function closeModal() {
        // modal.classList.add('hide');
        // modal.classList.remove('show');
        // либо через toggle
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }


    // перебераем все  кнопки, чтобы повесить обработчик событий
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalCloseBtn.addEventListener('click', closeModal);

    // закрыть окно, если нажимаем на подложку
    modal.addEventListener('click', e => {
        if (e.target === modal){
            closeModal();
        }
        
    });

    // закрываем, если нажимаем на Esc
    document.addEventListener('keydown', (e) => {
        // выполнится если нажмем на esc и модальное окно открыто
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });



    // < Модификация модального окна >
    
    // создадим таймер, по прошествию которого для пользователя откроется модальное окно
    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll(){
        // PageYOffset - отслеживает сколько пользователь отлистил пикселей с топа страницы по оси Y
        // Возьмем свойство, которое отвечает за прокрутку сверху, свойство отображает высоту клиента и будем сравнивать со scrollHeight (с полной прокруткой и полным контентом, который есть)
        // window.pageYOffset - прокрученая часть, document.documentElement.clientHeight - видимая часть пользователя, document.documentElement.scrollHeight - вся высота страницы
        // -1 пиксель, так как существует баг, при котором может не отображаться модальное окно, когда страница полностью прокручена
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
            openModal();
            // удаляем обработчик события, если модальное окно было показано 1 раз
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // открываем модальное окно, когда пользователь дошел до конца страницы
    window.addEventListener('scroll', showModalByScroll);



    // <
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ... classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            // получаем массив, который содержит классы (например для кастомизации меню)
            this.classes = classes;

            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); 
        }

        changeToUAH() {
            this.price = this.price * this.transfer; 
        }

        render() {
            const element = document.createElement('div');

            // Зададим параметры по умолчание, если вдруг в classes ничего не передается
            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                // достаем все классы из массива и присваиваем их div
                this.classes.forEach( className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }
    
    const firstMenu = new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container",
        'menu__item',
        'big'
        )

    firstMenu.render();
    
    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container",
        'menu__item'
    ).render();



});