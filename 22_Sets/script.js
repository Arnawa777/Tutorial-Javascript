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

//? Sets
// Set cant use duplicate value (duplicate value gone)
// unique
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet); // Set{'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Jonas')); // Set{'J','o','n','a','s'}

console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza')); //true
console.log(orderSet.has('Bread')); //false

//unique can be ignore
orderSet.add('Garlic Bread'); // add one
orderSet.add('Garlic Bread'); //add one same value !this will be ignnored
orderSet.delete('Pizza'); //delete one

//! clear all data
// orderSet.clear();

console.log(orderSet); //Set{'Pasta', 'Risotto', 'Garlic Bread'}

// No way getting value of a set
for (const order of orderSet) console.log(order);

// Main function of sets are remove duplicate value on array
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff); //array staff

// make array that unqiue
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // Set['Waiter', 'Chef', 'Manager'] !Output array because data was array

// if just want to see size
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Jonaskangwada').size);
