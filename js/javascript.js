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


if (1) {
    console.log("ok");
} else {
    console.log("Error");
}



if(num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Много");
} else{
    console.log("Ок");
} 
(num === 50) ? console.log("ok") : console.log("Error");



/*const num = "50";
switch (num) {
    case "49": 
        console.log("Неверно");
        break;
    case "100": 
        console.log("Неверно");
        break;
    case "51": 
        console.log("В точку ");
        break;
    default: 
        console.log("Не в этот раз");
        break;
} */

/*const hamburger = 5;
const fries = null;

if (hamburger && fries) {
    console.log("Я сыт!");
}

console.log((hamburger && fries));*/


console.log(hamburger === 3 && cola  && fries );

console.log(1 && 0);
console.log(1 && 5);
console.log(null&& 5);
console.log(0 && "dghndj");

if (hamburger === 3 && cola === 1 && fries === 1) {
    console.log("Все сыты");
} else {
    console.log("Мы уходим");
}

/*const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2  || fries === 3 && nuggets) {
    console.log("Все довольны");
} else {
    console.log("Мы уходим");
}

console.log(hamburger === 3 && cola === 2  || fries === 3 && nuggets);

let johnReport,alexReport,samReport,mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);

console.log( NaN || 2 || undefined );

console.log( NaN && 2 && undefined );

console.log( 1 && 2 && 3 );

console.log( !1 && 2 || !3 );

console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
} 

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

console.log(hamburger && cola || fries === 3 && nuggets);
*/



/* ----------ЦИКЛЫ----------- */


/*let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

let num = 50;
do {
    console.log(num);
    num++;
}
while(num < 55);*/


let nu =50;

for (let i = 1; i < 10; i++){
    if(i === 6) {
        //break;
        continue;
    }
    console.log(i);
}


/*--------ЦИКЛ В ЦИКЛЕ----------*/

for (let i = 0;i<3;i++){
    console.log(i);
    for (let j=0;j<3;j++){
        console.log(j);
    }

}

/**
**
***
****
*****
*******/


/*let result = "";
const length = 7;

for (let i = 1;i<length;i++){
    for(let j = 0;j < i;j++){
        result+="*";
    }

    result += "\n";
}

console.log(result);*/


first: for(let i=0;i<3;i++){
    console.log("First level: ${i})");
    for(let j=0;j<3;j++) {
        console.log("Second level: ${j}");
        for(let k=0;k<3;k++){
            if(k === 2) continue first;
            console.log("Third level: [k]");
        }
    }
}



for (let i = 2; i <= 16; i++) {
       if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
     }

/* ------------ФУНКЦИИ------------*/


/*let num = 20;
function showFirstMessage (text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num);

function calc (a,b) {
    return (a + b);
}

console.log(calc(7,5));

function ret () {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();*/

const calc = (a,b) => {
    console.log("1");
    return a + b;
};

let usdCurr = 28;
const discount = 0.9;

function convert (amount,curr) {
    return amount * curr;
}

function promotion(result){
    console.log(result * discount);
}

const res = convert(500,usdCurr)
promotion(res);

function test() {
    for(let i = 0; i<5; i++){
        console.log(i);
        if(i === 3) return
    }
    console.log("Done");
}

test();

function doNothing () {};
    console.log(doNothing() === undefined);



/*-----------МЕТОДЫ СТРОК И ЧИСЛЕ------------*/

const str = "test";
const arr = [1,2,3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6,11));

console.log(logg.substring(6,11));

console.log(logg.substr(6,4));

const num = 12.2;
console.log(Math.floor(num)); // math.round тоже

const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));

/* ----------------CALL BACK ФУНКЦИИ----------------*/

function first () {
    //Do something 
    setTimeout(function(){
        console.log(1);
    },500);
}

function second () {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("Я учу : " + lang )
    callback();
}
function done () {
    console.log("Я прошел этот урок!")
}
learnJS("JavaScript", function(){
    console.log("Я прошел этот урок!")
});

learnJS("JavaScript", done);

/* -----------Объекты, деструктуризация объектов (ES6)------------*/




console.log(Object.keys(options).length);


// -------------- МАССИВЫ И ПСЕВДОМАССИВЫ ----------------




// Передача по ссылке или по значению, Spread оператор (ES6-ES9)

