"use strict";

window.addEventListener('DOMContentLoaded', ()=>{
    
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


});