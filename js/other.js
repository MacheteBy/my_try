"use strict";

// function paperwork(n, m) {
//     if(n < 0 || m < 0){
//       return 0; 
//     }else{
//         return n*m;
//     }

//   }

//   console.log(paperwork(5, -5));


//   function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
//   }


// function hero(bullets, dragons){
//   let hpDragon = dragons*2;
//   console.log(hpDragon);
//   console.log(bullets);
//   if(hpDragon <= bullets){
//     return 'True';
//   } else{
//     return 'False';
//   }
//  }

//  console.log(hero(91, 41));


// function century(year) {
//   let century = Math.ceil(year/100);
//   return century;
// }


// console.log(century(1705));


// function findNeedle(haystack) {
//   const item = "needle";
//   let numItem = haystack.indexOf(item);
//   if(numItem >= 0){
//     return `found the needle at position ${numItem}`;
//   }else{
//     return "Your function didn't return anything";
//   }

// }

// console.log(findNeedle(['3', '123124234', undefined, 'world', 'hay', 2, '3', true, false]));
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
// console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));
// console.log(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]));




// const peoplInfo = [
//     {name: 'Владик', age: 20, height: 178, married: true, favoriteColor: 'blue', sex: 'men', budget: -1252},
//     {name: 'Ольга', age: 25, height: 185, married: false, favoriteColor: 'red', sex: 'girl', budget: 10582},
//     {name: 'Мирослава', age: 32, height: 115, married: true, favoriteColor: 'gren', sex: 'girl', budget: 10532},
//     {name: 'Костя', age: 44, height: 136, married: true, favoriteColor: 'blue', sex: 'men', budget: -1032},
//     {name: 'Владимир', age: 21, height: 188, married: false, favoriteColor: 'black', sex: 'men', budget: 8532},
//     {name: 'Алина', age: 19, height: 117, married: false, favoriteColor: 'orange', sex: 'girl', budget: 6532},
//     {name: 'Кристина', age: 15, height: 105, married: false, favoriteColor: 'yellow', sex: 'girl', budget: 4202},
//     {name: 'Карина', age: 33, height: 199, married: true, favoriteColor: 'silver', sex: 'girl', budget: 40502},
//     {name: 'Вика', age: 27, height: 205, married: true, favoriteColor: 'purple', sex: 'girl', budget: -1000}
// ];



// const oldPeople = peoplInfo.filter(peoplInfo => {
//     return `${peoplInfo.name} ${peoplInfo.age}`;
// });

// console.log(oldPeople);


// const sortPeoplForAge = peoplInfo.filter(peoplInfo => peoplInfo.age > 20).map(peoplInfo => `${peoplInfo.name} ${peoplInfo.age}`);
// const sortPeopleSexMen = peoplInfo.filter(peoplInfo => peoplInfo.sex === 'men').map(peoplInfo => `Имя: ${peoplInfo.name}, Пол: ${peoplInfo.sex}`);

// console.log(sortPeoplForAge);
// console.log(sortPeopleSexMen);



// const budgetSumResault = peoplInfo.reduce((total, person) => total + person.budget, 0);
// const budgetSumPositiv = peoplInfo.filter(peoplInfo => peoplInfo.budget > 0).reduce((firstValue, secondValue) => firstValue + secondValue.budget, 0);

// console.log(budgetSumResault);
// console.log(budgetSumPositiv);


// const personFaind = peoplInfo.find(person => person.name === 'Владимир');

// console.log(personFaind);

// const personFaindIndex =  peoplInfo.findIndex(peoplInfo => peoplInfo.sex === 'men');

// console.log(personFaindIndex);


// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
//    return films.filter(films => films.rating >= 8);
// }

// console.log(showGoodFilms());

// function showListOfFilms(arr) {
//     return films.map(films => films.name).reduce((firstValue, secondValue) => `${firstValue}, ` + `${secondValue}`);
// }

// console.log(showListOfFilms());

// function setFilmsIds(arr) {
//     return films.map((films, i) => {
//         return {
//             name: films.name,
//             rating: films.rating,
//             id: i
//         };
//     });
// }

// console.log(setFilmsIds());

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     return arr.every(arr => arr.id || arr.id === 0);
// }

// console.log(checkFilms(tranformedArray));


// const funds = [
//     {amount: -1400},
//     {amount: 2400},
//     {amount: -1000},
//     {amount: 500},
//     {amount: 10400},
//     {amount: -11400}
// ];

// const getPositiveIncomeAmount = (data) => {
//     return data.filter(funds => funds.amount > 0).reduce((first, second) => first + second.amount, 0);
// };


// console.log(getPositiveIncomeAmount(funds));

// const getTotalIncomeAmount = (data) => {
//     return data.some(funds => funds.amount < 0) ? data.reduce((first, second) => first + second.amount, 0) : getPositiveIncomeAmount(data);
// };

// console.log(getTotalIncomeAmount(funds));


// function areYouPlayingBanjo(name) {
//         const res = name.slice(0, 1);
//         if (res === 'R' || res === 'r'){
//             return `${name} plays banjo`;
//         }else{
//             return `${name} does not play banjo`;
//         }
//   }

//   console.log(areYouPlayingBanjo('Adam'));


// function smash (words) {
//     console.log(words.length);
//     let resStr = '';
//     for(let i = 0; i < words.length; i++){
//         resStr += words[i];
//         resStr += ' ';
//     }
//     return resStr.trim();
//  };

//  console.log(smash("hello", "amazing", "world"));


// function booleanToString(b){
//     let res = '';
//     if (b === true){
//         return res += b;
//     }else{
//         return res += b;
//     }
//   }

// console.log(booleanToString(true));


// function doubleChar(str) {
//     let oldRes = String(str);
//     let res = '';
//     for(let i = 0; i < oldRes.length; i++){
//         res += oldRes[i];
//         res += oldRes[i];
//     }
//     return res;
//   };


//   console.log(doubleChar("String"));


// function positiveSum(arr) {
//     const resSum = arr.filter(arr => arr > 0).reduce((first, second) => first + second, 0);
//     return resSum;
// }

// console.log(positiveSum([1,-2,3,4,5]));


// function even_or_odd(number) {
//   let res = number % 2;
//   console.log(res);
//   if (res === 1 || res === -1){
//     return "Odd";
//   } else {
//     return "Even";
//   }


// }

// console.log(even_or_odd(-7));



// function openOrSenior(data){
//   let res = [];
//   console.log(data.length);
//   const dataLen = data.length;
//   for(let i = 0; i < dataLen; i++){
//     if(data[i][0] >= 55 && data[i][1] > 7){
//       res.push('Senior');     
//     } else {
//       res.push('Open');
//     }
//   }
//   return res;
//   }


// console.log(openOrSenior([[45, 12],[55,21],[56, -2],[104, 20]]));


// localStorage.setItem('number', 5);

// localStorage.removeItem('number');
// localStorage.clear();

// console.log(localStorage.getItem('number')); 


// new RegExp('pattern', 'flags');

// /pattern/f

// const ans = prompt('Введите ваше имя');

// const reg = /n/ig;
// console.log(reg.test(ans));


// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));


// console.log('12-34-56'.replace(/-/g, ':'));

// 3 180194 M 012 PB3

// 1 - 1-6 числа
// 2-6 - дата рождения
// 7 - A B C K E M H 
// 8-10 - 002-099
// 11-12 -PB BA BI 
// 13 - 0-9




//первый символ 
// let res = [];
// let finalResult = '';
// let resFinal = [];
// const arrFirst = [1, 2, 3, 4, 5, 6];
// const arrDate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// const arrMount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const arrYear = [1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,
//     1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,
//     1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002];
// const arrCity = ['A', 'B', 'C', 'K', 'E', 'M', 'H'];
// const citizenship = ['PB', 'BA', 'BI'];
// const checkDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getRandomInt(data) {
//     let min = 0;
//     let max = data.length;
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     let rand = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
//     return data[rand];
//   }

// function serialNumber () {
//     let min = 2;
//     let max = 99;
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     let ran = Math.floor(Math.random() * (max - min)) + min;
//     if (ran < 10){
//         return `00${ran}`;
//     } else {
//         return `0${ran}`;
//     }
// }

// function glueResult (arrFirst, arrDate, arrYear, arrCity, citizenship,checkDigit) {
//     getRandomInt(arrFirst);
//         getRandomInt(arrDate);
//         getRandomInt(arrYear);
//         getRandomInt(arrCity);
//         serialNumber();
//         getRandomInt(citizenship);
//         getRandomInt(checkDigit); 
//     res.push(getRandomInt(arrFirst), getRandomInt(arrDate), getRandomInt(arrYear), getRandomInt(arrCity), serialNumber(), getRandomInt(citizenship), getRandomInt(checkDigit));
//     return res;
// }

// function idGenerator () {
//     return resFinal = glueResult(arrFirst, arrDate, arrYear, arrCity, citizenship,checkDigit).join().replace(/,/g, '');
// }

// idGenerator();
// console.log(resFinal);


// КОНЕЦ СКРИПТА

// const arr = [1, 5.2, 4, 0, -1];

// function sum (numbers) {
//     if(numbers.length > 0){
//         return numbers.reduce((first, second) => first + second, 0); 
//     }else{
//         return 0;
//     }
// };

// console.log(sum(arr));




// function descendingOrder(n) {
//     let arr = ("" + n).split("").map(Number).sort((a, b) => b - a);
//     if (arr.length == 1) {
//         return n;
//     } else {
//         let strREs = '';
//         arr.forEach(element => {
//             strREs += element;
//         });
//         return Number(strREs);
//     }

// }
// console.log(descendingOrder(111));


// const rps = (p1, p2) => { 
//     if (p1 === p2) {
//         return 'Draw!';
//     }else if (p1 === 'rock' && p2 === 'scissors'){
//         return 'Player 1 won!';
//     }else if (p1 === 'scissors' && p2 === 'paper'){
//         return 'Player 1 won!';
//     }else if (p1 === 'paper' && p2 === 'rock'){
//         return 'Player 1 won!';
//     } else{
//         return 'Player 2 won!';
//     }
// };
// console.log(rps('scissors', 'rock'));


// function basicOp(operation, value1, value2){
//   if(operation == '+'){
//     return value1 + value2;
//   }else if(operation == '-'){
//     return value1 - value2;
//   }else if (operation == '*'){
//     return value1 * value2;
//   } else if (operation == '/'){
//     return value1 / value2;
//   }
// }

// const makeUpperCase = str => str.toUpperCase();

//   console.log(makeUpperCase("hello"));

// function greet(name){
//     return `"Hello, ${name} how are you doing today?"`;
//   }

//   console.log(greet("Ryan"));



// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   };

// console.log(GetSum(479, -305));


// function nbYear(p0, percent, aug, p) {
    
//     for (var years = 0; p0 < p; years++) {
//       p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//     }
//     return years;
//   }

// console.log(nbYear(1500, 5, 100, 5000));

// function reverseWords(str) {
//     let newArr = str.split(" ");
//     let newStr = "";
//     for(let i = 0; i < newArr.length; i++){
//         let a = newArr[i] + " ";
//         newStr += a.split("").reverse().join(""); 
//     }
//     return newStr.trim(1);
//   }

// console.log(reverseWords("This is an example!"));

// function reverseWords(str) {
//     // Go for it
//     //split words into seperate arrays
//     return str.split(" ").reverse().join(" ").split("").reverse().join("");
//   }


// console.log(reverseWords("This is an example!"));


// function sortArr(array){
//     let res = [];
//     for (let i = 0; i < array.length; i++){
//         res.push(`${i+1}: ${array[i]}`);
//     }
//     return res;
//   }
//   console.log(sortArr(["a", "b", "c"]));


// function betterThanAverage(classPoints, yourPoints) {
//     let res = (classPoints.reduce((first, second) => first + second, yourPoints)) / (classPoints.length + 1); 
//     if(res < yourPoints){
//         return 'True';
//     }else{
//         return 'False';
//     }
//   }

//   console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

function updateLight(current) {
    if(current == "green"){
        return "yellow";
    } else if (current == "yellow"){
        return "red";
    } else if(current == "red"){
        return "green";
    }
  }

  console.log(updateLight("green"));