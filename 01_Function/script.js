"use strict";
/*
function logger() {
    console.log('My name is Aji');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 20);

//capture the value into variable appleJuice
const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);

const applesOrangesJuice = fruitProcessor(5, 3);
console.log(applesOrangesJuice);

//just running with console.log
console.log(fruitProcessor(10, 5));


//? Declarations vs expressions

//! Function Declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1992);

//! function Expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
} //  

const age2 = calcAge2(1995);
console.log(age1, age2);


//! Arrow function
const calcAge3 = birthYear => 2022 - birthYear; //one line can be return automatically
const age3 = calcAge3(2000);
console.log("Age orange ketiga " + age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(2000, 'Aji'));
console.log(yearsUntilRetirement(1983, 'Juan'));
*/

//!function calling other function
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(4, 5));

! Review

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired`;
    }
}

console.log(yearsUntilRetirement(2000, 'Aji'));
console.log(yearsUntilRetirement(1950, 'Supra'));

*/

//Challenge 1

/* 
Team only win at least DOUBLE the average score of other team, 
Otherwise no team wins
? Data 1 : Dolphins score 44, 23, 71 : Koalas score 65, 54, 49
? Data 2 : Dolphins score 85, 54, 41 : Koalas score 23, 34, 27
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log(`Score Dolphins ${avgDolphins1} and Score Koalas ${avgKoalas1}`);

function checkWinner(avgDolphins, avgKoalas) {
  // return console.log(avgDolphins, avgKoalas)
  if (avgDolphins > 2 * avgKoalas) {
    return console.log(`dolhpins Wins with score : ${avgDolphins}`);
  } else if (avgKoalas > 2 * avgDolphins) {
    return console.log(`Koalas Wins with score : ${avgKoalas}`);
  } else if (avgKoalas == avgDolphins) {
    return console.log(`Draw with both teams score ${avgKoalas}`);
  } else {
    return console.log(
      `NOBODY WINS with dolphins score: ${avgDolphins} and Koalas score: ${avgKoalas}`
    );
  }
}

const winner1 = checkWinner(avgDolphins1, avgKoalas1);

const winner2 = checkWinner(avgDolphins2, avgKoalas2);
