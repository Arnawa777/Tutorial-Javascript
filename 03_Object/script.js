'use strict';

//!Object

const kuroArray = [
    'Kuro',
    'Haku',
    2037 - 2000,
    'pengangguran',
    ['Ghebre', 'Adel', 'Fulsy'],
]; //array

// const kuro = {
//     firstName: 'Kuro',
//     lastName: 'Haku',
//     age: 2037 - 2000,
//     job: 'pengangguran',
//     friends: ['Ghebre', 'Adel', 'Fulsy'],
// };


// console.log(kuro);

// dot notations
// console.log(kuro.lastName);
// deep brackets notation
/* console.log(kuro['lastName']);

const nameKey = 'Name';
console.log(kuro['first' + nameKey]);
console.log(kuro['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Kuro? Choose between firstName, lastName, age, job, and friends');

//undifined because no object interestedIn in Kuro
console.log(kuro.interestedIn);
//replace the actual value

if (kuro[interestedIn]) {
    console.log(kuro[interestedIn]);
} else {
    console.log("value doesn't exist! Choose between firstName, lastName, age, job, and friends");
}

kuro.location = 'Indonesia';
kuro['twitter'] = 'kuro';


kuro.friends.bestFriend = kuro.friends[0];
console.log(kuro);

console.log(`${kuro.firstName} has ${kuro.friends.length} friends, and his best friend is called ${kuro.friends[0]}`);
*/


//object method
const aji = {
    firstName: 'Arnawa',
    lastName: 'Juan',
    birthYear: 2000,
    job: 'turu',
    friends: ['Ghebre', 'Adel', 'Fulsy'],
    hasDriverLicence: true,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function () {
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriverLicence ? 'a' : 'no'} driver licence`;
    }
};

// console.log(aji.calcAge(aji.birthYear));

//calcAge first then call age

/*
console.log(aji.calcAge());
console.log(aji);
console.log(aji.age);

console.log(aji.getSummary());
*/
// challenge 3

//BMI = mass / height ** 2 = mass / (height * height)

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
mark.calcBMI();
john.calcBMI();

// console.log(john.calcBMI());

console.log(`${mark.BMI > john.BMI ?
    `${mark.fullName}'s BMI ${mark.BMI} is heigher than ${john.fullName}'s ${john.BMI}` :
    `${john.fullName}'s BMI ${john.BMI} is heigher than ${mark.fullName}'s ${mark.BMI}`
    }`)

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI ${mark.BMI} is heigher than ${john.fullName}'s ${john.BMI}`);
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI ${john.BMI} is heigher than ${mark.fullName}'s ${mark.BMI}`);
}