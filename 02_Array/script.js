'use strict';

//!Arrray

//?literal syntax 0, 1, 2
/* const friends = ['Kuro', 'Sabo', 'Juan'];
console.log(friends);


const years = new Array(1991, 1995, 1998, 2006, 2012);

console.log(years);
console.log("Teman kedua: " + friends[1]);

//sum of array friends
console.log(friends.length);

//sum of array friends - 1 = 2 (Juan)
console.log(friends[friends.length - 1]);

//replace array 2
//const cant change primitive value
//ARRAY IS NOT A PRIMITIVE VALUE [can be change some value]
//ilegal to change all array with const  
friends[2] = 'Ibnu';
console.log(friends);
//friends = ["bob", "jon"]

const firstName = 'Aji';
const aji = [firstName, 'Yogyakarta', 2022 - 2000, 'teacher', friends];
console.log(aji);

const calcAge = function (birthYear) {
    return 2050 - birthYear;
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

//Add Element to Array
const friends = ['Kuro', 'Sabo', 'Ferdi'];
const newLenght = friends.push('Joseph');

console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

//Remove Element
friends.pop(); // Remove Last
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Kuro'));
console.log(friends.indexOf('Kosong'));

friends.push(23);
console.log(friends.includes('Kuro'));
console.log(friends.includes('Kosong'));
//strict cant check
console.log(friends.includes('23'));

console.log(friends);

if (friends.includes('Kuro')) {
    console.log('You have a friend called Kuro');
}

//challenge 2
// tirnary
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * 0.2;
}

// Arrow
const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * 0.2;

const bills = [125, 555, 44];
const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);
// const tips = [tip1, tip2, tip3];

//ver 2
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
]

console.log(bills, tips);

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
];
console.log(total);