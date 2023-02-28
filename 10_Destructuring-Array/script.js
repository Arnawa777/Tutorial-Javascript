'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//? Destructuring Arrays
const arr = [2, 3, 4];
// before like this
const a = arr[0];
const b = arr[1];
const c = arr[2]; //to boring

// use this destructuring
const [x, y, z] = arr;
console.log(x, y, z);
// array still same
console.log(arr);

// can skip one item with null
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// old way to switch variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// new way to switch variable [EASY]
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
// destructuring inside destructuring
const nested = [2, 5, [2, 3]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Value
// give default value if array shorter than destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
