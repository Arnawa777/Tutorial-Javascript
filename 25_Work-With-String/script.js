'use strict';

console.log("============ PART 1 ============");
const airline = "Bandara Adi Sucipto Yogyakarta"
const plane = "A320"

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B6210'[0]);

console.log(airline.length);
console.log('B6210'.length);

console.log("---------------------");
// Useful for slice
//first
console.log(airline.indexOf('a'));
//last
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Adi')); //8
//slice without bandara
console.log(airline.slice(8));
console.log(airline.slice(8, 19));

//slice smart one
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

//slice last string
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  //B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === "E")
  console.log('You got middle seat 😂');
  else console.log('You got Lucky 😁👍');
};

checkMiddleSeat("11B")
checkMiddleSeat("23C")
checkMiddleSeat("3E")

//? note
console.log("==========================");
// All string primitive become object and back to object again
// Modern string(object) become string again
//! example

// Object
console.log(new String ('Jonas'));
console.log(typeof new String ('Jonas'));
// become string again
console.log(typeof new String ('Jonas').slice(2));

console.log("============ PART 2 ============");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "ArNaWA";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);


// Comparing Email
const email = 'hello@jonas.io';
const loginEmail = '   hello@JoNas.IO \n';
console.log(loginEmail);
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replace
const priceJP = '288,96¥'
const priceUS = priceJP.replace('¥', '$').replace(',', '.')
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
// regular expression
console.log(announcement.replace(/door/g, 'gate'));

// console.log(announcement.replaceAll('door', 'gate')); 

// Booleans

const secondPlane = "Airbus A320neo"

console.log(secondPlane.includes('A320'));
console.log(secondPlane.includes('Boeing'));
console.log(secondPlane.startsWith('Air'));

if (secondPlane.startsWith('Airbus') && secondPlane.endsWith('neo')){
  console.log("Part of The New Airbus Family!");
}

//practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed to board');
  }else {
    console.log('Welcome Aboard!');
  }
};

checkBaggage('I have a laptop, some Food, and a pocket knife');
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and gun for protection')


console.log("============ PART 3 ============");

// Split are most powerfull string method

console.log('a+very+nice+string'.split('+'));
console.log('Arnawa Juan Ibnuaji'.split(' '));

const [firstName, lastName] = 'Arnawa Juan'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {  
  const names = name.split(' ');
  const namesUpper = []; //kosong
  console.log(namesUpper);
  for (const n of names){
    //cara 1
    //namesUpper.push(n[0].toUpperCase() + n.slice(1)); //huruf array pertama kapital diulang sampai array abis dan di push ke array namesUpper 
    //cara 2
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    console.log(namesUpper);
  }
  console.log(namesUpper.join(' ')); //join namesUpper dengan spasi
}

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
capitalizeName('arnawa juan ibnuaji');

console.log('====================');
// Padding 
// use for add something to defined length number
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(25952231));
console.log(maskCreditCard(59112391891391));
console.log(maskCreditCard('23108195108691'));

//Repeat

const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(10);

