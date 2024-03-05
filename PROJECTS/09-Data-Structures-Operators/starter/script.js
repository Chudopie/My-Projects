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
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // a nice way to destructoring objects with a function, and inserting all we want of the object in the arguments of the function

  // orderDelivery: function ({
  //   starterIndex = 1,
  //   mainIndex = 0,
  //   time = '20:00',
  //   adress,
  // }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time} `
  //   );
  // },
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(
  //     `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}
  //    Ingredients`
  //   );
  // },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//SHORT CIRCUITING (&& and ||)
//OR OPERATOR
//Use any data type, return any data type, short-circuiting
console.log(3 || 'Eduardo');
console.log('' || 'Eduardo'); //''es false
console.log(true || 0);
console.log(undefined || null); //null
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('---------- AND ----------');

console.log(0 && 'Eduardo');
console.log(7 && 'Eduardo');

console.log('Hello' && 23 && null && 'Eduardo');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// en un OR|| si tneemos 0 o 10 dara de resultaod el diez 0 es falso y se va al segundo, trabaja parecido al  OR el  NULLISH  ?? son dos signos de interrogacion y trabajan de la sig manera: Si el primer valor no existe se va al siguiente y lo imprime, pero si existe aparece aunque sea 0, porque trabaja con valores falsos y los valores falsos son los siguientes:

//Nullish :null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log('nullishcoalescing operator', guestCorrect);


//LOCAL ASSIGNMENT OPERATORS

const rest1 = {
  name: 'Capri',
 // numGuests:20,
  numGuests:0, // el OR con cero escribe el 10 porque 0 es falso

}

const rest2 = {
  name: 'La Piazza',
  owner:'Giovanni Rossi',
  
}
//OR assignment Operator
// rest2.numGuests = rest2.numGuests || 10;
//Aqui retorno 20 porque rest2 ya tiene 20, osea que si no tiene le agrega
// rest1.numGuests = rest1.numGuests || 10;
//Aqui retorno 10 porque no tiene numguests
// rest2.numGuests ||= 10;
// rest1.numGuests ||= 10;
//nullish assignment operator (null or undefined)
//Null devuelve null o undefined si esa variable es null o undefined
rest1.numGuests ??=10;
rest2.numGuests ??=10;

console.log(rest1);
console.log(rest2);


//And assignment operator, si el primero es verdadero devuelve lo de la derecha y si no es verdadero no hace nada
rest2.owner = rest2.owner && "<ANONYMUS>"
rest1.owner = rest1.owner && "<ANONYMUS>"

rest2.owner &&= "<ANONYMUS>"
rest2.owner &&= "<ANONYMUS>"



console.log(rest1);
console.log(rest2);



//const arr = [7, 8, 9];
//const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
//console.log(badNewArr);
//const newArr = [1, 2, ...arr]; //SPREAD OPERATOR

//Without the ... will be the arr array inside the new arr like this const newArr = [1, 2, ...arr];
//with the ... will be added all the variables in the array it's like taking all the elements of the array and adding it manually
//console.log(newArr);
//console.log(...newArr); //now it will expand the newarray 12789

//const newMenu = [...restaurant.mainMenu, 'Gnocci'];
//it helpus to get elements out of the arrays
// console.log(newMenu);
//COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
//This syntax its easier to use

//Joining 2 arrays
// const menujoin = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menujoin);

// ITERABLES: just a comoment iterables are the arrays, strings, maps or sets but NOT objects, except objects

//in Strings
// const str = 'Eduardo';
// const letters = [...str, '', 'G.'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} Gonzalez`)

//Multiple values separated by a , are usually only expected when we pass arguments into a function or when we build a new array
//Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt(' Ingredient 2? '),
//   prompt(' Ingredient 3? '),
// ];
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// 1)DESTRUCTURING

//SPREAD, because on right side of =
//const arr1 = [1, 2, ...[3, 4]];
// REST, beacuse on left side of =
// const [a1, b1, ...others] = [1, 2, ...[3, 4]];
// console.log(a1, b1, others);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   restaurant.starterMenu,
// ];

//console.log(pizza, risotto, ...otherFood);

//OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

//2)Functions
//const add = function (...numbers) {
//REST ARGUMENTS

//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// };
// add(2, 3);
// add(2, 3, 7, 2);
// add(8, 5, 7, 9, 6, 3);

// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza('Mushrooms', 'onion', 'olives', 'spinach');

// restaurant.orderPizza('mushrooms');

//OBJECTS
//const newRestaurant ={foundedIn:1998,...restaurant, founder: 'Guiseppe'}
//console.log(newRestaurant);
//copying restaurant

//const restaurantCopy = {...restaurant}

//restaurantCopy.name='Ristorante roma'

//console.log(restaurant);
//console.log(restaurantCopy);
/////////////////////////////////////////////////////////////////
///DESTRUCTURING OBJECTS
// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Via del sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   adress: 'Via del sole,21',
//   starterIndex: 1,
// });
//Fundamentals of desctructoring objects
//AND this is how you destructor an object like the array
//pero creas 3 variables que se llamen igual que al del object

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
/*this will apply to api's
what if we want the variable name to be different of the property
names, we still have to reference the property name like we did
before, otherwise javascript don't know what we actually want
so let's write name again but specify the colon : and write a 
new name
*/
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

/*default values like in arrays, let's say we want to desctroctor menu , this is a way to setting a default value, cuz if we just print menu, will be undefined*/
//Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

//we can't do const {a,b} cuz we already declare, we cannot also do not let cuz let will create new variables that we have already, in fact we want to mutate. we cannot assign a codeblock like this on the object {a,b} = obj; we will get an error, the trick it's to grab it on a parenthesis like this:
// ({ a, b } = obj);
// console.log(a, b);
//now we overwrite the 2 initial variables a and b

//NESTED OBJECTS
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/*
const arr = [2, 3, 4];
const a = arr[0];
// const b = arr[1];
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
 */
//CODING CHALLENGE
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = { 
  team1: 'Bayern Munich', 
  team2: 'Borrussia Dortmund', 
  players: [ 
    [ 
      'Neuer', 
      'Pavard', 
      'Martinez', 
      'Alaba', 
      'Davies', 
      'Kimmich', 
      'Goretzka', 
      'Coman', 
      'Muller', 
      'Gnarby', 
      'Lewandowski', 
    ], 
    [ 
      'Burki', 
      'Schulz', 
      'Hummels', 
      'Akanji', 
      'Hakimi', 
      'Weigl', 
      'Witsel', 
      'Hazard', 
      'Brandt', 
      'Sancho', 
      'Gotze', 
    ], 
  ], 
  score: '4:0', 
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',  
  'Hummels'], 
  date: 'Nov 9th, 2037', 
  odds: { 
    team1: 1.33, 
    x: 3.25, 
    team2: 6.5, 
  }, 
};


