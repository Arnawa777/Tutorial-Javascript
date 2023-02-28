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

  orderPizza: function (mainIngredient, ...otherIngredients) {
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

//? Rest Pattern

//!Destructuring
// Spread, Because on the RIGHT side of =
const arr = [1, 3, ...[5, 10]];

// Rest, Because on the LEFT side of =
const [a, b, ...others] = [5, 3, 9, 7, 8];
console.log('a:', a, 'b:', b, 'other:', others);

//must be in the last element
const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rissoto, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//! Function

const add = function (
  ...numbers // Rest Parameters
) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(5, 4);
add(5, 4, 5, 1, 3);
add(5, 4, 6, 7, 91, 23, 2, 5);

const x = [5, 4, 10];
add(...x);

restaurant.orderPizza('Mushroom', 'Onion', 'Olives');
restaurant.orderPizza('Mushroom');
