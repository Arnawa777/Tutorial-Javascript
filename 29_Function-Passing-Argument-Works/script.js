'use strict';

const flight = 'LH1234';
const aji = {
  name: 'Arnawa Juan Ibnuaji',
  passport: 2948193921,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  if (passenger.passport === 2948193921) {
    alert('Check In');
  } else {
    alert('warning passport not defined');
  }
};

checkIn(flight, aji);
console.log(flight); //not change because primitive
console.log(aji); //change value because object (modern)

//! example why we must carefull with change value
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(aji);
checkIn(flight, aji);

// javascript ONLY passing by value
