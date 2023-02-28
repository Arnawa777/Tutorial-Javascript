'use strict';

//? SCOPE

/*// function scope 1
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // function scope inside function scope
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    // block scope inside function scope calcAge -> inside printAge
    if (birthYear >= 1981 && birthYear <= 2000) {
      // var not a scope
      var millenial = true;
      // Creating new variable with same name as outer scope variable
      const firstName = 'Suki';

      // reassingning outer scope variable
      output = 'New OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      //! error when call in parent printAge
      function add(a, b) {
        return a + b;
      }
    }

    //! error cant see child scope lol
    // console.log(add(2, 3));

    console.log(millenial);

    console.log(output);
  }
  // call global scope
  console.log(firstName);
  printAge();
  return age;
}

const firstName = 'Arnawa';
calcAge(2000);
*/

//?THIS Keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(2000);

// // Arrow this keyword use global scope
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1990);

// const kuro = {
//   year: 1999,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// // console.log(kuro.year);
// kuro.calcAge();

// const matilda = {
//   year: 2016,
// };

// matilda.calcAge = kuro.calcAge;

// console.log(matilda);

//?Regular Function vs Arrow Function
/*function calcAverage() {
  console.log('help me');
}

calcAverage();

const kuro = {
  firstName: 'kuro',
  year: 1999,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //! Solution 1 call this in here
    const self = this;
    const isMillenial = function () {
      // cant call this keyword with different 2
      // console.log(this.year);
      console.log(self.year);
    };
    console.log('Solution 1');
    isMillenial();

    //! Solution 2 use arrow that use this keyword in parent
    const isMillenialArrow = () => {
      // cant call this keyword with different 2
      // console.log(this.year);
      console.log(this.year);
    };

    console.log('Solution 2');
    isMillenialArrow();
  },
  // Arrow doesnt get this keyword
  // dont use arrow for this
  greet: () => console.log(`Hey ${this.firstName}`),
};

// kuro.greet();
kuro.calcAge();

// Argument Keyword just can be use in regular function
// Argument keyword not really use in modern javascript
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
*/

//?Primitive VS Object
// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';
console.log(lastName, oldLastName);

// Refrence types
const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
// will change all object in the heap
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// Copying Object
const jessica2 = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  family: ['alice', 'bob'],
};

// Copy a object in heap that can be change
// only works in first level
// cant use in object inside an object
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
// fail change object family
// need deep copy use library
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
