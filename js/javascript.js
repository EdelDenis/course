"use strict";

//Классификация типов данных в JavaScript-------------------------------

let number = 4.6;

console.log(4/0);
console.log("string" * 9);

const person = "5";
console.log(typeof(person));

const bool = true;

console.log(something); //null 

let und;
console.log(und);

const obje = {
    name: "John",
    age:25,
    isMarriend: false
};

//console.log(obje.name);
console.log(obje["name"]);

let arra = ["plum.png", "orange.jpg", 6,  "apple.bmp" , {} , []];

console.log(arra[0]);

// УСЛОВИЯ ------------------------------------------
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

/* ------------ФУНКЦИИ,СТРЕЛОЧНЫЕ ФУНКЦИИ(ЕС6)------------*/

let num = 20;
// FUNCTION DECLARATION - НЕ ВАЖНО ГДЕ ВЫЗЫВАТЬ ЕЕ(МОЖНО И ДО И ПОСЛЕ ЕЕ ОБЬЯВЛЕНИЯ);
function showFirstMessage (text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num);

//function calc (a,b) {
 //   return (a + b);
//}

console.log(calc(7,5));
console.log(calc(5,5));
console.log(calc(7,9));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


//FUNCTION EXPRESSION - МОЖНО ВЫЗВАТЬ ТОЛЬКО ПОСЛЕ ОБЬЯВЛЕНИЯ ЭТОЙ ФУНКЦИИ 

const logger = function () {
   console.log("Hello");
};

logger();

//СТРЕЛОЧНАЯ ФУНКЦИЯ ----- ES6

const calc = (a,b) => { 
    console.log("1");
    return a + b;
};

calc(5,5);


/*-----------МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЛЕ------------*/

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

const numbe = 12.2;
console.log(Math.floor(numbe)); // math.round тоже

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

const options = {
    name: "test",
    width: 1024,
    height:1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest : function () {
        console.log("Test")
    }
};

//options.makeTest();

//Деструктуризация обьекта -------------------

//const {border,bg} = options.colors;
//console.log(border);

//console.log(Object.keys(options).length)

//console.log(options.name);

//delete options.name;
 
//console.log(options);

// Перебрать обьект---------------

let counter = 0;
 for(let key in options) {
     if (typeof(options[key]) === "object" ){
         for(let i in options[key]){
            console.log("Свойство " + i + "имеет значение " + options[key][i]);
            
         }
     } else {
     console.log("Свойство " + key + "имеет значение " + options[key]);
     counter++
     }
 }

 console.log(counter);
     




// -------------- МАССИВЫ И ПСЕВДОМАССИВЫ ----------------

const array = [2,3,6,8,10];

array.sort(compareNum);
function compareNum(a,b) {
    return a - b;
}
//array[99] = 0;
//console.log(array.length);
console.log(array);

// МЕТОД FOREACH позволяет гибко перебрать все элементы которые находятся внутри массива

array.forEach (function(item, i, arr){
      console.log(i + " : " + item + "внутри массива " + arr)
});

//array.pop();
//array.push(10);
console.log(array);
//перебрать массив
for (let i=0;i<array.length;i++) {
    console.log(array[i]);
}
// аналог (break и continue)
for (let value of array) {
    console.log(value);
}

//сделать из строки в массив 

const strs = prompt ("", "" );
const products = strs.split(", ");

console.log(strs)

// сделать из массива строку 

//const strs = prompt ("", "" );
//console.log(products.join(" ; "))

// Передача по ссылке или по значению, Spread оператор (ES6-ES9)

let a = 5,
    b = a;

b = a + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

function copy (mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b:5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);

// способ 2

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

//-------------------- ОСНОВЫ ООП --------------------

let stre = "some";
let streObj = new String(stre);

console.log(typeof(stre));
console.log(typeof(streObj));

console.dir([1,2,3]);


// ПРОТОТИП
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello")
    }
}; 

const john = Object.create(soldier);

/*const john = {
    health: 100
}*/

//установить прототип
// john.__proto__ = soldier - устаревшая запись

//Object.setPrototypeOf(john, soldier) -- /* установили прототип для джона от солдата */

john.sayHello();


//------------Динамическая типизация JS--------------

// To string 

// 1) 

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) Конкатинация

console.log(typeof(5 + ""));

const numb = 5;

console.log("https://vk.com/catalog/" + numb);

const fontSize = 26 + "px";

console.log(fontSize);

// to Number

// 1) 
console.log(typeof(Number("4")));

//2) 
console.log(typeof(+"5"));

// 3)
console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Hello", "");

// To boolean 

0, "", null , undefined , NaN;  /*всегда будет фолс*/
// 1)
let switcher = null;

if(switcher){
    console.log("Working")
} 


switcher = 1;

if(switcher){
    console.log("Working")
} 

// 2)

console.log(typeof(Boolean("4")));

// 3)

console.log(typeof(!!"44444"));

// ----------------------Замыкание и лексическое окружение------------------------












