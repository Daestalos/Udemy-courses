// jquery - это библиотека JS

/* // синтаксис */

// указываем селектор, можно указать как id, так и класс
$('#someid');

// после выбора селектора указываем действие, например мы хочем поменять текст
$('#someid').text("Привет");

$('.someclass').css("border", "2px solid black");

// В JS есть событие, которое отлавливает прогрузку страницы
// в данном случае мы повесили обработчик события при полной прогрузке страницы
$(document).ready(function(){
    $('.someclass').css("border", "2px solid black");
});

// с помощью parent мы можем обратиться к родителю указанного элемента
$(document).ready(function(){
    $('.someclass').parent().css("border", "2px solid black");
});
// соответственно с помоью children можно обратиться к дочернему элементу

// аналогично css мы молжем использовать фильтры
// first, last, even, eq (2) (конкретный) и т.д.
$(document).ready(function(){
    $('li:first').css("border", "2px solid black");
});

// так же можем модифицировать по содержимому
$(document).ready(function(){
    $('.row:has(.col)').css("border", "2px solid black");
});
// мы можем проверить при помощи :parent, является ли .col родителем для каких-либо элементов
// иначе говоря, есть ли в нем какой-либо элемент
$(document).ready(function(){
    $('.col:parent').css("border", "2px solid black");
});
// есть и обратный модификтор empty, который выполняет, если у элемента нету дочерних элементов
$(document).ready(function(){
    $('.col:empty').css("border", "2px solid black");
});

// так же как и в css мы можем обращаться по атрибутам
// событие сработает для тех элементов, которые содержат ссылку yandex.ru
$(document).ready(function(){
    $('a[href="https://yandex.ru]').css("border", "2px solid black");
});


/* //    СОБЫТИЯ */

// (по нажатию)
// click / dbclick
// this позволяет обращаться не ко всем элементам, а к одному определенному, можно задать для него метод find для выбора конкретного элемента
// toggleClass позволяет установить класс css, а так же при повторном действии снять его
$(document).ready(function(){
    $('.div').click(function(){
        // alert("its work");
        $(this).toggleClass("red");
    });
});

// При наведении
// hover (mousecenter/mouseleave и другие)

$(document).ready(function(){
    // при наведениее
    $('.div').mouseenter(function(){
        // alert("its work");
        $(this).toggleClass("red");
    });
    // при уводе мышки
    $('.div').mouseleave(function(){
        // alert("its work");
        $(this).toggleClass("red");
    });
});


// Фокус
// например при выборе поля input
// focus

$(document).ready(function(){
    $('input').focus(function(){
        alert("its focus");

    });
});

// Изменение
// change
// метод change работает и с select, input, a, label, со всеми возможными типами инпутов
$(document).ready(function(){
    $('input').change(function(){
       $("#asometext").text("Привет" + (this).val());

    });
});


// keypress
// отлавливает нажатие на клавишу
// лучше использовать keyup и keydown (когда отжали и когда прожали)
$(document).ready(function(){
    $('input').keyup(function(){
       $("#asometext").text("Привет" + (this).val());

    });
});



/* // Анимация */

// hide элемент пропадет через секунду
// delay элемент начнет исчезать после клика через 1 сек
// show заставляет элемент вернуться
$(document).ready(function(){
    $('p').click(function(){
        $(this).delay(1000).hide(1000).delay('slow').show(2000);
    })
});

// animate({что нужно анимаровать}, время)
$(document).ready(function(){
    $('p').click(function(){
        $(this).animate({opacity: '0.25'},1000);
    });
});

// slideup и slidedown (элемент медленно "свернется")
$(document).ready(function(){
    $('p').click(function(){
        $(this).slideUp(1000).slideDown(1000);
    });
});

// fadeout - анимация затухания




/* // Работа с атрибутами */

$(document).ready(function(){
    $('img').click(function(){
        // fadeout - анимация затухания
        $(this).fadeOut(500, function(){
            $(this).attr("src", "путь к новому изображению").fadeIn(500);
        });
      
    });
});
// мы можем работать даже со своими кастомными атрибутами
$(document).ready(function(){
    $('img').click(function(){
            $(this).attr("someattr", "123"); 
    });
});

// помимо атрибутов мы можем работать с классами
// addClass / RemoveClass (чтобы не прописывать отдельно добавление и удаление можно использовать toggleClass)
$(document).ready(function(){
    $('img').click(function(){
            $(this).addClass("Box"); 
    });
});

// помимо того, что мы при помощи .text можем работать с текстом, мы можем так же работать с html-разметкой
$(document).ready(function(){
    $('#someP').click(function(){
        // внутри тега p появится новый тек span с новым содержимым
            $(this).html("<span> some text </span>"); 
    });
});

// с помощью метода append мы можем добавить текст в конец текста, аналогично prepend в начало
$(document).ready(function(){
    $('#someP').click(function(){
            $(this).append("some text"); 
    });
});

// с помощью метода after мы можем добавить новый элемент после нашего текущего элемента, аналогично before до
$(document).ready(function(){
    $('#someP').click(function(){
            $(this).after("<span>some text</span>"); 
    });
});

// wrap - можем обернуть наш элемент в какой-то элемент, например в div
$(document).ready(function(){
    $('#someP').click(function(){
            $(this).wrap("<div class='wrapper'></div>"); 
    });
});
// для удаление соответственно unwrap, но помимо этого у нас есть методы empty, который очистит наше содержимое (но наш параграф останется), в отличии от remove, который полностью удалит все




/* ЯКОРЬ НА JQUERY */
// в навигации задаем тегу a href (например #home) и задаем такой же id нужному блоку, на который будет якорь

$('a[href^="#').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});


/* КНОПКИ МЕНЮ СТАНОВЯТСЯ АКТИВНЫМИ ПРИ СКРОЛЕ К ОПРЕДЕЛЕННОМУ БЛОКУ */
// стоит задать заглавным блокам (section класс, по которому мы будем обращаться, в данном случае section)
$(document).ready(function(){


    // если мы доскролили до начала нашего section пробегаемся по всем пунктам меню, убираем у них active и добавляем для текущего по индексу i текущий класс

$(window).scroll(() => {
    // в первую очередь получаем значение на сколько страница проскролена
    let scrollDistance = $(window).scrollTop();
    // делаем выборку всех section
    // i - индекс, el - элемент
    $(".section").each((i, el) => {
        // для каждой секции делаем проверку
        // если (offset - растояние от началы страницы до элемента), в данном случае идет скрол сверху, поэтому указываем top, получаем высоту меню навигации и проверяем, чтобы это выражение было <= скрол дистанции
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
            // пробегаемся по всем меню a
            $("nav a").each((e, el) => {
                // убираем у всех активный класс
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            // внутри меню находим элементы li, затем тег a и добавляем ему Active
            $('nav li:eq('+ i +')').find('a').addClass('active');


        }
    });
});
});


/* ОТЛОЖЕННАЯ АНИМАЦИЯ */
// [18 минута 12 урок Брауна]
// https://habr.com/ru/post/494670/
// https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API

// для начала задаем нужному элементу класс, например element-animation

/* .element-animation {
    opacity: 0;
}

.element-animation.show-animation{
    opacity: 1;
    transition: opacity 1s;
} */

$(document).ready(function(){
    // для начала зададим опции
    // threshold обозначает порог, при котором должна сработать анимация (0.5 обозначает, что как только при скролле дойдет до середины элемента, то начнет срабатывать анимация, можно установить и 1, чтобы как только элемент полностью показался она сработала)
    let options = {threshold: [0.5]};
    // создаем observer
    let observer = new IntersectionObserver(onEnrtry, options);
    // создадим еще одну переменную
    // к примеру, возьмем, что для всех наших анимаций, для всех элементов, которые мы анимируем зададим класс  .element-animation, соответственно для всех элементов с классом .element-animation у нас будет срабатывать данный скрипт
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });
});

// создадим функцию-обработчик
function onEnrtry (entry){
    //
    entry.forEach(change => {
        // если change (наш элемент) попал в наблюдатель, т.е. сработал threshold
        if (change.isIntersecting){}
        // то для нашего change, т.е. для нашего элемента добавляем класс show-animation
        change.target.classList.add('.show-animation')
    });
}

// Аналогично можно ииспользовать для изображений (например, чтобы сделать подгрузку изображений по мере скроллинга, чтобы сайт не грузился долго и сразу обрабатывая сразу все сложные элементы) [25 минута у Брауна, 12 урок]
// в данном случае мы заранее прописываем нашему изображению <img src="какая-то картинка в плохом изображении, либо ничего" dataset-src="нужная нам картинка при появлении">
change.target.src = change.target.dataset.src;



// /* МОДАЛЬНЫЕ ОКНА (ВСПЛЫВАЮЩИЕ ОКНА) */
// бустрап модальные окна
// [27 минута 12 урока Брауна]

// работа с картинками
// https://dimsemenov.com/plugins/magnific-popup/
// [35 минута 12 урока Брауна]


// /* СЛАЙДЕР */
// либо бустраповский, либо 
// https://fotorama.io 
// https://kenwheeler.github.io/slick/
// [37 минута 12 урока Брауна]