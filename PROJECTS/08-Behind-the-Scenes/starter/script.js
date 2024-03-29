'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
    var millenial = true;
    if (birthYear >= 1981 && birthYear <= 1996) {
      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      //Reassigning outer scope's variable
      output = 'New Output';

      const str = `Oh, and you're a millenial, ${firstName} `;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2,3)); only works without strict mode
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Eduardo';
// console.log(calcAge(1994));
// console.log(age);
// console.log(printAge);
// Primitive vs Objects  (primitive vs. Reference Types)
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Eduardo',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: ' Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica {};

//Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: ' Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
