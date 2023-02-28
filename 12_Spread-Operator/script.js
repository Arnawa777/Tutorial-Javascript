'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    address,
    time = '20:00',
    starterIndex = '1',
    mainIndex = '0',
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};

//? Spread Operator

const arr = [6, 4, 3];
// take array value individually
const newArr = [2, 11, ...arr];
console.log(newArr);
console.log(...newArr);

// Add new menu in array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//!Spread operator takes all element in array and it also doesn't create new variable
//!can only use it in writes values separated by comas

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Array and more
const MenuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(mainMenuCopy);
console.log(MenuCopy);

//! Spread operator works in all iterabels
//! most of built-in data javascript are iterables except objects
//! Iterable: array, string, maps, sets
//! ES 2016 OBJECT can use spread operator
const str = 'Kurohaku';
const letters = [...str, '', 'S.'];
console.log(letters);
//!multiple values separated by comas (array ect) is use in pass argument into a function, or when built new array
// console.log(`${...str} iwi`); //!error

// Real-World Example
// \ for escaping '

const ingredients = [
  // prompt("let's make pasta! ingredients 1?"),
  // prompt("let's make pasta! ingredients 2?"),
  // prompt("let's make pasta! ingredients 3?"),
];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]) //! Method 1 OLD ONE SAD

restaurant.orderPasta(...ingredients);

// Object
const newRestaurant = { fonduedIn: 1995, ...restaurant, founder: 'Guseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Rumah makan padang jangan';
console.log(restaurantCopy.name);
console.log(restaurant.name);
