'use strict';

//! Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is The Best Language', upperFirstWord);
transformer('JavaScript is Language', oneWord);

//? JS use Callback all the time
const high5 = function () {
  console.log('🖐');
};

document.body.addEventListener('click', high5);

['jonas', 'arnawa', 'aji'].forEach(high5);

//! Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Arnawa');
greeterHey('Aji');

// Langsung
greet('Hello')('Juan');

// Arrow Function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('FUCK U')('Ibnu');
