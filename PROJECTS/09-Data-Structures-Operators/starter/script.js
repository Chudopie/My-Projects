'use strict';

const weekdays = ['mond','tue','wed','thur','fri','sat','sun']

const openingHours= {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
}


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 Enhanced object literals
  openingHours,
  
  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDeliverly({starterIndex =1,mainIndex = 0,time = '20:00',adress}){
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${ this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`);
  },
  //spreadoperator method
  orderPasta(ing1,ing2,ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  //Rest PAttern and Parameters
   orderPizza: function (mainIngredient, ...otherIngredients) {

      console.log(mainIngredient);
      console.log(otherIngredients);
   }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// \
//SETS AND  MAPS


//SET      ALL duplicates are gone
const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza'])
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread')); //Similar as includes
ordersSet.add('Garlic Bread')
ordersSet.delete('Risotto')
//TO ERASE EVERYTHING
// ordersSet.clear()   
console.log(ordersSet);//there are no index, u can't get values of a set

for(const order of ordersSet){
  console.log(order);
}

//Example 
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager','Chef','Waiter']

const staffUnique = [...new Set(staff)]
console.log(staffUnique);


console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager','Chef','Waiter']).size);

console.log(new Set('jonassschmedtmann').size);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//Looping Objects: Object Keys, Values, and Entries
//Property NAMES
// const properties = Object.keys(openingHours)
// console.log(properties);

// let openStr =`We are open on ${properties.length} days: `
// for (const day of Object.keys(openingHours)) {
//   openStr+= ` ${day},  `
// }
// console.log(openStr);

// //Property VALUES
// const values = Object.values(openingHours)
// console.log(values);
// //Entries Object
// const entries = Object.entries(openingHours)
// console.log(entries);
// // [key,value]
// for (const [day,{open,close}] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open)
// }
// //ES2020 with optional chaining
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['mond','tue','wed','thur','fri','sat','sun']
//   for (const day of days) {
   
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//     console.log(`On ${day}, we open at ${open}`);
// }
// //Optional Chaining on Methods
// console.log(restaurant.order?.(0,1)?? 'Method does not exist'); //this exists
// console.log(restaurant.orderRisotto?.(0,1)?? 'Method does not exist');//Orderrisotto does not exist

// //Optional Chaining on Arrays
// const users = [
//   {name:'Jonas',email:'hello@jonas.io'}
// ]
// console.log(users[0]?.name ?? 'User array empty');//users[0] exists
// console.log(users[2]?.name ?? 'User array empty');//users[2] does not exissts

// //---V     this is the same but longer
// if (users.length>0) {
//   console.log(users[0].name);
// }else{
//   console.log('users array empty');
// }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Enhanced Object Literals
//ES6 Enhanced object literals
//openingHours
//hours
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Looping Arrays: The for-of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// for (const item of menu){
//   console.log(item)}

  
// for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}, `);
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Local Asignment Operators

// const rest1 = {
//   name:'Capri',
//   numGuests:0,
// }
// const rest2 = {
//   name:'La Piazza',
//   owner:'Giovanni Rossi',
// }

//OR assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
//Same as above
// rest1.numGuests ||= 10
// rest2.numGuests ||= 10
// rest1.owner ||= 'Bonifio Bonatelli'

//The  Nullish Assignment operator (null or undefined)
//rest1.numGuests ??= 10
//rest2.numGuests ??= 10


//AND assignment operator
//rest1.owner = rest1.owner &&'<ANONYMUS>'
// rest2.owner &&= '<ANONYMUS>'
//rest2.owner = rest2.owner &&'<ANONYMUS>'
// rest2.owner &&= '<ANONYMUS>'
// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1
// const [players1,players2] = game.players
// console.log(players1,players2);
// //2
// const[gk, ...fieldPlayers] = players1
// console.log(gk,fieldPlayers);
// //3
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);
// //4
// const players1Final = [...players1,'Thiago','Coutinho' ,'Perisic']
// console.log(players1Final);
// //5
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {odds:{team1,x:draw,team2}} = game
// console.log(team1,draw,team2);
// //6 . Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// function printGoals(...playerNames) {
  
//     console.log(playerNames);
//     console.log(`${playerNames.length} Goals Where Scored`);
// }

// printGoals( 'Davies', 'Muller', 'Lewandowski','Kimmich')
// printGoals(...game.scored)
// //7
// team1>team2 && console.log(`team1 is more likely to win with ${team1}`);
// team2>team1 && console.log(`team2 is more likely to win with ${team2}`);




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//NULLISH COALESCING OPERATOR (??)

// restaurant.numGuest = 0;
// const guests = restaurant.numGuest || 10;
// console.log(guests);


///NULISH values are null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SHORT CIRCUITING

//Use ANY data type, return ANY data type
//short-circuiting 
// console.log('-------------OR----------------');
//En un OR si el primer valor es True, el resultado sera el primer valor//
// console.log(3 || 'Jonas'); //Resultado 3 
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests=23
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10
// console.log(guests2);
// console.log('-------------AND-------------------');

///////////////ANBD
// console.log(0 && 'Jonas');
// console.log(7&&'Jonas');
// console.log('Hello'&&23&&null && 'Jonas');

//Practical Example
//With an IF
// if(restaurant.orderPizza){
//   restaurant.orderPizza('Mushrooms', ' Spinach')
// }
//With Short Circuiting AND
// restaurant.orderPizza && restaurant.orderPizza('Mushrooms','Spinach')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
