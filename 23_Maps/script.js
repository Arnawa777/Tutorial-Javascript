'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enchance object literal
  openingHours,

  // NEW way writing METHOD inside object
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    address,
    time = '20:00',
    starterIndex = '1',
    mainIndex = '0',
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(
      `Order Received! Pizza with ${mainIngredient} ${
        otherIngredients != 0
          ? `and with side ingridient ${otherIngredients}`
          : 'without side ingridient'
      }`
    );
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//? Maps

//! Set Maps is--- Key => Value

// create empty map and fill it later
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Jakarta, Indonesia');
// set is add and return map
console.log(rest.set(2, 'Lisbon, Portugal'));

// allow to add more set method because return the map
// because set is returning updated map so we can add more set
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Open :D')
  .set(false, 'We are Close :(');

// to read some map use get method

console.log(rest.get('name'));
console.log(rest.get(true));

// this will return true or false that set in maps before
// but not readable
const time = 24;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
// delete maps using Key
rest.delete(2);
rest.delete('categories');

// rest.set([1, 2], 'this is array'); //!this wont work
//!must declare array first
const arr = [1, 2];
rest.set(arr, 'this is array');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest);
// console.log(rest.size);

// Delete ALL
// rest.clear();

//? Maps Iteration

// Array inside Map

const question = new Map([
  ['question', 'what the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Wrong 😭, Try Again'],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Iteration

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//! const answer = Number(prompt('Your Answers'));

// readable solution
//! const isTrue = answer === question.get('correct');
//! console.log(question.get(isTrue));

// Fast Solution
//! console.log(question.get(answer === question.get('correct')));

// Convert Map to Array
// console.log(convertMap.entries());
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
