'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//Distroctoring
const [x, y, z] = arr;
console.log('x,y,z = ', x, y, z);
console.log('arr = ', arr);

const [first, , second] = restaurant.categories;
console.log('The Disctroctoring', first, second);
//Distroctoring this
// console.log(restaurant.order(2, 0));
//we receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//array inside an array
//NESTED DESTRUCTURING
const nested = [2, 4, [5, 6]];
//Disctroctoring nested
// const [i, , j] = nested;
// console.log(i, j);
//Now Disctroctoring inside distroctoring
//That;s how nested disctroctoring works
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
//This could be useful when we get data from an API cuz we need a value but if isn't there we can just place a value when it's not there
//https://codingheroes.io/assignments/destructuring-arrays.html#1-1
//This is the link to the arrays assignment
