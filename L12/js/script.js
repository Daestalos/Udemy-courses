"use strict";

let numberOfFilms = +prompt("Сколько вы уже посмотрели?", ''),
    objActors = {},
    objMovies = {},
    dataEmpty = [],
    questionFilm = prompt("Один из просмотренный фильмов?", ''),
    questionRating = prompt("На сколько оцените его?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: objMovies,
    actors: objActors,
    genres: dataEmpty,
    privat: false
};
personalMovieDB.movies[questionFilm] = questionRating;
console.log(personalMovieDB);
console.log(personalMovieDB.count);