"use strict";

//! Loop

/*
//for loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const kuroArray = [
    'Kuro',
    'Haku',
    2037 - 2000,
    'pengangguran',
    ['Ghebre', 'Adel', 'Fulsy'],
];

const types = [];

for (let i = 0; i < kuroArray.length; i++) {
    console.log(kuroArray[i], typeof kuroArray[i]);

    //filling types array
    // types[i] = typeof kuroArray[i];

    types.push(typeof kuroArray[i]);
}

console.log(types);

const years = [1991, 2000, 2005, 1980, 2010];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
}

console.log(ages);


//continue and break
console.log("--- ONLY STRING ---");
for (let i = 0; i < kuroArray.length; i++) {
    if (typeof kuroArray[i] !== 'string') continue;

    console.log(kuroArray[i], typeof kuroArray[i]);
}


console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < kuroArray.length; i++) {
    if (typeof kuroArray[i] === 'number') break;

    console.log(kuroArray[i], typeof kuroArray[i]);
}
*/

/*
? loop backwards
const kuroArray = [
    'Kuro',
    'Haku',
    2037 - 2000,
    'pengangguran',
    ['Ghebre', 'Adel', 'Fulsy'],
];

for (let i = kuroArray.length - 1; i >= 0; i--) {
    console.log(i, kuroArray[i]);

}

?loop inside of loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} `);
    }
}
*/

//while loop
// console.log('------WHILE LOOP------');
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep} `);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('rolled 6, Loop ended');
// }

//challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  // totals
  // return tip;
};

// console.log(calcTip(bills[0]));

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);
// console.log(tips);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage(totals));
