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

//?Optional Chaining

// Old Ways checking if property is exist
if (restaurant && restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With Optional Chaining ES 2020
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  // use [] for dynamic value
  const open = restaurant.openingHours[day]?.open ?? 'another day'; //optional chaining & nullishing operator work together
  console.log(`At ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(1, 0) ?? "Method doesn't Exist!");
// /?. mengeluarkan output undifined lalu oper ke kanan
console.log(restaurant.orderUWU?.(1, 0) ?? "Method doesn't Exist!");

// Array
const users = [{ name: 'kuro', email: 'kuro@gmail.com' }];

console.log(users[0]?.name ?? "name doesn't exist");

if (users[0].name) console.log(users[0].name);
else console.log("name doesn't exist");
