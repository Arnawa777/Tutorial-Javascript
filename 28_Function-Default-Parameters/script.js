'use strict';

const bookings = [];
//? ES6 default
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //? old default parameters (ES5)
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 23, 800);
createBooking('LH123', 5);
createBooking('LH123', 10);
// skipp one
createBooking('LH123', undefined, '3000');
