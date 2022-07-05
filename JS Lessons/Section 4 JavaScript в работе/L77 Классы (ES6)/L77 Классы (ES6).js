'use strict';


// <---------------------------- Классы --------------------------->

// По простому классы - красивая обертка функций-конструкторов. Так же можно встетить такое понятие как "Синтаксический сахар"

// Классы, как и функции-конструкторы служат нам для создания новых объектов

// Направленность данного приема: у нас чаще всего на сайтах, наших веб-приложениях, будет какая-то шаблонизация, вместо того, чтобы каждый раз создавать какой-то слайдер, либо какую-то статью, ее полностью описывать, все свойства, методы и т.д., мы создаем шаблон, который говорит в общем что будет делать этот компонент. Затем от этого шаблона создаем отдельный экземпляр, отдельных потомков, которые будут помещаться на наш сайт. Таким образом используя всего один участок кода мы можем создать много компонентов на сайтах, которые будут чем-то отличаться

// пишем class, название класса (Обязательно с большой буквы)
class Rectangle {
    // конструируем класс, т.е. какие вещи у нас будут включаться в наш шаблон, что будет уметь этот класс, какие вещи и свойства будет имень изначально

    // в () записываем как и с функцией, аргументы которые будут приходить
    constructor(height, width){
        // теперь про помощи такого классы мы сможем сконструировать много различных прямоугольников

        // Когда мы передали сюда аргументы, мы должны записать их в свойства этого нового объекта

        // This обращаемся к экземпляру нового созданного объекта (в нашем случае к каждому отдельному квадратику)
        this.height = height;
        this.width = width;

        // можно вызывать методы так же и в конструкторе
        this.logAny();
    }
    // точку с запятой ставить не нужно, и между методами тоже, иначе будет ошибка

    // создадим метод
    calcArea(){
        // контекст вызова ссылается на новый объект, который будет создан
        return this.height * this.width;
    }

    logAny () {
        console.log('Меня тут можно вызвать! А еще и рассчитать аргументы!');
        // this.heightr = this.height * this.width;
    }
}

// в square помещаем объект, объект который создается при помощи класса. Прописываем new, название нашего класса и передаем аргументы
const square = new Rectangle(10, 10);
// теперь в square лежит объект, у которого есть метод и 2 свойства: height и width
const long = new Rectangle(50,50);

console.log(long.calcArea()); // = 2500
console.log(square); // = Rectangle { height: 10, width: 10 }
console.log(square.calcArea()); // = 100

// При помощи Классов мы создали 2 абсолютно разные конструкции, которые содержат разные свойства, но при этом содержат один и тот же метод caclArea


// <---------------------- Наследование Классов (extends) ---------------------->

// Принципы ООП
// 1) Абстракция - когда мы отделяем концепцию от ее экземпляра
// В нашем случае концепцией является Rectangele, а экземпляром наши square и long

// 2) Наследование - способность объекта или класса базироваться на другом объекте или классе

// Пример: создадим еще один класс ColorRectangleWithhText, который будет хранить высоту и ширину, текст и цвет нашего прямоугольника
// мы понимаем, что у нашего класса будут такой же конструктор, такие же свойства как у конструктора Rectangle. Создадим наследуемость. Class ColorRectangleWithhText будет наследоваться от Rectangle, у него будет брать те свойства, которые у него записаны и те методы, которые существуют

// Для того чтобы наследовать один класс от другого существует ключевое слово extends. Class Имя extends ОтКогоНаследуется
class ColorRectangleWithhText extends Rectangle {
    // мы знаем, что для данного класса нам так же понадобятся аргументы высоты и ширины, текста и цвета
    constructor (height, width, text, bgColor) {
        // мы понимаем, что height и width у нас прописаны уже в Rectangle, чтобы их повторно не копировать используем метод super();

        // super() - метод, который вызывает конструктор родителя (т.е. наш height и width, они автоматически передут в этот конструктор за счет наследования). в () указываем свойства, которые хотим использовать
        // !!! Super всегда должна быть на первом месте в конструкторе!
        super (height, width);
        this.text = text;
        this.bgColor = bgColor;

    }

    // calcArea() так же наследуется

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }

}

const div = new ColorRectangleWithhText(25, 10, 'Hello', 'red');
console.log(div); // = 
// ColorRectangleWithhText {
//     height: 25,
//     width: 10,
//     text: 'Hello',
//     bgColor: 'red'
//   }

div.showMyProps(); // = Текст: Hello, цвет: red
// используем метод, который
console.log(div.calcArea()); // = 250

