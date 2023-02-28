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

//? Short Circuiting

console.log('-----OR-----');
// Use any data type, return any data type
console.log(3 || 'Juan');
// not return falsy value
console.log('' || 'Juan');
console.log(true || 0);
// if 2 or more falsy value in OR, it will use last value
console.log(undefined || null);

console.log(null || 'uwu');
// falsy value : '', 0, undefined, null

// restaurant.numbGuest = 23;
const guest1 = restaurant.numbGuest ? restaurant.numbGuest : 10;

console.log(guest1);

// alternative ternary operation
const guest2 = restaurant.numbGuest || 15;
console.log(guest2);

console.log('-----AND-----');
//if its false the operator will stop right there
console.log(0 && 'Kuro');
console.log(5 && 'Kuro');

console.log(5 && 'Kuro' && 'OWO' && null && 'SIAL');

// Practical example
//if want to check if the value is actualy exist
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'OWO');
}

restaurant.orderPizza && restaurant.orderPizza('Cokelat', 'Keju');

// Nullish Coalescing Operator
// Nullish value are null and undefined (NOT 0 or '')
restaurant.numbGuest = 0;
const guestCorrect = restaurant.numbGuest ?? 10;
console.log(guestCorrect);
