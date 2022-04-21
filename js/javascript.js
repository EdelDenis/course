"use strict";

/*let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
      
    },
    actors: {},
    genres: [],
    privat: false
};
let lastSeenMovie1 = prompt("Один из последних просмотреных фильмов?", "");
let movieAward1 = prompt("На сколько оцените его?", "");
let lastSeenMovie2 = prompt("Один из последних просмотреных фильмов?", "");
let movieAward2= prompt("На сколько оцените его?", "");


personalMovieDB.movies[lastSeenMovie1] = movieAward1;
personalMovieDB.movies[lastSeenMovie2] = movieAward2;

console.log(personalMovieDB);*/



/*if(num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Много");
} else{
    console.log("ok!");
}

(num === 50) ? console.log("ok!") : console.log("Error");

const num = 50;
switch (num) {
    case 49:
        console.log("Неверно");
        break;
    case 100: 
        console.log("Неверно");
        break;
    case 51 : 
        console.log("Верно");
        break;
    default: 
        console.log("Не в этот раз")
        break;
}*/

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3  && cola === 2  || fries === 3 && nuggets ) {
    console.log("Все довольны");
} else {
    console.log("Уходим");
}

console.log(hamburger === 3  && cola === 2  || fries === 3 && nuggets);

let johnReport , alexReport , samReport , mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);


 
