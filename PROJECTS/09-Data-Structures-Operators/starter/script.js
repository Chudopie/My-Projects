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
  },
  //spreadoperator method
  orderPasta: function(ing1,ing2,ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  //Rest PAttern and Parameters
   orderPizza: function (mainIngredient, ...otherIngredients) {

      console.log(mainIngredient);
      console.log(otherIngredients);
   }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Rest Pattern and Parameters
// 1) Destructuring
//SPREAD, because on RIGHT side of  = 

// const arr = [1,2, ...[3,4]] //El spreadoperator se usa del lado derecho para desempacar 

// //REST,because on LEFT side of = 
// const [a,b, ...others ] = [1,2,3,4,5]
// console.log(a,b,others); // restpattern los collecta en otro arrayaparte

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu] 
// console.log(pizza,risotto,otherFood);

// //Objects
// const {sat, ...weekdays} = restaurant.openingHours //solo almaceno lo que hay aparte  de lo de saturday, fri and thursday
// console.log(weekdays);

// //2) Functions
// const add = function ( ...numeros) {
// let sum = 0  
// for (let i = 0; i < numeros.length; i++) {
//    sum+=numeros[i] 
  
// }
// console.log(sum);
// }
// add(2,3)
// add(5,3,7,2)
// add(8,2,4,8,4,1)

// const x = [23,5,7];

// add(...x)


// restaurant.orderPizza('mushrooms','Onions','Olives','Spinach')
// restaurant.orderPizza('mushrooms')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Spread Operator
//bad Example, but same as below
// const arr = [7,8,9]
// const badNewarr = [1,2, arr[0],arr[1],arr[2]]
// console.log(badNewarr);
// //SPREAD OPERATOR ...arr
// const newArr = [1,2, ...arr]
// console.log(newArr);
// //This is
// console.log(...newArr);
// //The same as 
// console.log(1,2,7,8,9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu);
// //copy Array

// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays or more
// const menu = [...restaurant.mainMenu,...restaurant.starterMenu]


// //Iterables: arrays,strings,maps,sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, '', ' S.']
// console.log(letters);
// console.log(...str);
// console.log('j','o','n'); //etc
// //console.log(`${...str}`); //DOESN't WORK
// //IMPORTANT multiple values separated by a comma, are usually only expected when we pass arguments into a function or when we build a new array

// //Real world Example
// const ingredients = [
//   // prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'),prompt('Let\'s make pasta! Ingredient 3?')
// ]
// console.log(ingredients);
// // restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]) //OLD SYNTAX
// restaurant.orderPasta(...ingredients) //mordern ES6 SYNTAx


// //Example
// const newRestaurant = {foundedIn:1998, ...restaurant,founder:'Guiseppe'}
// console.log(newRestaurant);


// const restaurantCopy = {...restaurant}
// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurantCopy.name)
// console.log(restaurant.name);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Destructuring Objects

// restaurant.orderDeliverly({
//   time:'22:30',
//   adress:'Via del Sole,21',
//   mainIndex:2,
//   starterIndex:2
// })

// restaurant.orderDeliverly({
//   adress:'Via del Sole,21',
//   starterIndex:1
// })


//en los objetos no importa el orden como en los arrays
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
//Se le pueden colocar o definir otro nombre  alas variables al destructurar objetos
// const {
//   name: restaurntName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurntName, hours, tags);
//Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
//   ({ a, b } = obj);
// console.log(a, b);


//Nested Objects
// const {fri:{open:o,close:c}}= openingHours
// console.log(o,c);

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
