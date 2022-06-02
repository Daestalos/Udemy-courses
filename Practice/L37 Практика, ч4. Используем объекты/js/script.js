/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";



        
const personalMovieDB = {
        count: 0,
        movies: [],
        actors: [],
        genres: [],
        privat: false,
        start() {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            
            while (this.count == '' || this.count == null || isNaN(this.count)) {
                this.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
            }
        },

        writeYourGenres() {
            for (let i = 0; i < 3; i++){
                this.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
                if (this.genres[i] == '' || this.genres[i] == null) {
                    i--;
                }  else {
                    this.genres[i].trim();
                }
            }
            this.genres.forEach (function(value, key){
                console.log(`Любимый жанр ${key+1} - это ${value}`);
            });
        },
        rememberMyFilms() {
            for (let i = 0; i<2; i++){
                let questionFilm = prompt("Один из просмотренный фильмов?", '').trim();
                if (questionFilm == null || questionFilm == '' || questionFilm.length > 50) {
                    alert ('Строка не может быть пустой, либо превышать значение в 50');
                    i--;
                } else 
                {
                    let questionRating = prompt("На сколько оцените его?", '');
                    this.movies[questionFilm] = questionRating;
                }
            }   
        },
        detectPersonalLevel() {
            if (this.count < 10) {
                alert ('Просмотрено довольно мало фильмов');
            } else if (this.count > 10 || this.count < 30 ){
                alert ("Вы классический зритель");
            } else if (this.count > 30) {
                alert("Вы киноман");
            } else { alert ("Произошла ошибка"); }    
        },
        toggleVisibleMyDB(){
            if (!this.privat) {
                this.privat = true;
            } else {
                this.privat = false;
            }
        },   
        showMyDB() {
            if (!this.privat) {
                console.log(this);
            }
        }
        
};    

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

