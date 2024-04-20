'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDeliverly: function({starterIndex =1,mainIndex = 0,time = '20:00',adress}){
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${ this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`);
  }
};

restaurant.orderDeliverly({
  time:'22:30',
  adress:'Via del Sole,21',
  mainIndex:2,
  starterIndex:2
})

restaurant.orderDeliverly({
  adress:'Via del Sole,21',
  starterIndex:1
})

//Object Destructuring
//en los objetos no importa el orden como en los arrays
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//Se le pueden colocar o definir otro nombre  alas variables al destructurar objetos
const {
  name: restaurntName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurntName, hours, tags);
//Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
  ({ a, b } = obj);
console.log(a, b);


//Nested Objects
const {fri:{open:o,close:c}}= openingHours
console.log(o,c);

//Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//Switching Variables
//hacer lo de arriba
// [main,secondary] = [secondary,main]
//es lo mismo que lo de abajo pero creando una variable temporal par apoder hacer el cambio
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
//Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j]] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
