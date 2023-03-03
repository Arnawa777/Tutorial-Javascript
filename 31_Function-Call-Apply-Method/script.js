'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(213, 'Arnawa Juan');
lufthansa.book(441, 'Saiful Ulum');

console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah'); //error because this keyword are wrong

//! 3 method fix this keyword -call, apply, bind
//call
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(swiss, '235', 'Alexander Great');

//apply must with array (OLD WAY DONT USE IT) use call with array instead
const flightData = [583, 'Gorge Uwu'];
// book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

//!BIND METHOD
// bind function to one thing
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(991, 'Amoy Sina');

//with bind we can defined all like flightNUM

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Juans santai');
bookEW23('Euxia Sewsa');

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// 'THIS' are dynamic so must set it to lufthansa
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// Partial application (can preset parameter)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// without THIS define first to NULL
const addVAT = addTax.bind(null, 0.23); // addVAT = value => value + value * 0.23;

// function in function
const newTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = newTax(0.23);
console.log(addVAT2(100));
console.log(newTax(0.5)(10));
