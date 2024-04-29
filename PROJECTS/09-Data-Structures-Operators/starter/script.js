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



///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'))
document.body.append(document.createElement('button'))

document.querySelector('button').addEventListener('click',function () {
  const text = document.querySelector('textarea').value
  const rows = text.split('\n')


for (const [i,row] of rows.entries()) {
  const [first,second] = row.toLowerCase().trim().split('_');

  const output = ` ${first}${second.replace(second[0],second[0].toUpperCase())}`
  console.log(`${output.padEnd(20)} ${'✅'.repeat(i+1)}`);  
  
} 

})


/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Working with Strings Part 3
// //Split() and Join()
// console.log('a+very+nice+string'.split('+'));
// console.log('Eduardo Gonzalez'.split(" "));
// const [firstName, lastName] = 'Eduardo Gonzalez'.split(" ")
// const newName=['Mr.', firstName,lastName.toUpperCase()].join(' ')
// console.log(newName);



// const capitalizeName = function (name) {
// const names = name.split(' ') 
// const namesUpper = []
// for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase()+n.slice(1))
//     namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
// }
// console.log(namesUpper.join(' '));
// }
// capitalizeName('jessica ann smith davis')
// capitalizeName('eduardo gonzalez')


// //Padding
// const message = 'go to gate 23!'
// console.log(message.padStart(20,'+').padEnd(30,'+'));
// console.log('Jonas'.padStart(20,'+').padEnd(30,'+'));

// const maskCreditCard = function (number) {
//   const str = String(number)
//   // const str = number  + ' '//Same as above
//   const last = str.slice(-4)
//   return last.padStart(str.length,'*')
// }
// console.log(maskCreditCard('23948234'));
// console.log( maskCreditCard(389478293525))
// console.log( maskCreditCard('23984928342'))

// //Repeat
// const message2 ='Bad weather... All Departues Delayed... '
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// }

// planesInLine(5)
// planesInLine(3)
// planesInLine(12)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Working with Strings Part 2
// const airline = 'TAP Air Portugal'
// console.log(airline.toLowerCase(), '  This is on LowerCase'); //don't require arguments at all
// console.log(airline.toUpperCase(), '  This is on Upper Case')
// const passenger = 'jOnAS' // Jonas
// const passengerLower = passenger.toLowerCase()
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect);
// //Extra bonus practice
// const passengersName = function (name) 
// {
//     let wrongname = name.toLowerCase()
//     let correctName = wrongname[0].toUpperCase()+wrongname.slice(1)
//     console.log(correctName);
// }
// passengersName('EdUaRdO')

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io  \n'

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim()// trim quita los espacios

// console.log(trimmedEmail);
// console.log(trimmedEmail === email);
// //replacing
// const priceGB= '288,97%'
// const priceUS = priceGB.replace('%','$').replace(',','.')
// console.log(priceUS);
// const announcement = 'All passengers come to barding door 23. Boarding door 23!'
// console.log(announcement.replace('door','gate'));
// console.log(announcement.replaceAll('door','gate'));


// console.log(announcement.replace(/door/g,'gate'));
// //g of global, the replace is case sensitive, all string methods are

// //3 simple methods to Booleans
// //include,startwith, and endwith

// const plane = 'Airbus A320neo'
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus Family');
// }

// //Practice Excercise 
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   }else{
//     console.log('Welcome aboard!');
//   }
// }
// checkBaggage('I have a laptop, some Food and a pocket Knife')
// checkBaggage('Socks and a camera')
// checkBaggage('Got some snacks and a gun for protection')
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Working with Strings Part 3


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Working with Strings Part1
// const airline = 'TAP Air Portugal'
// const plane = 'A320'
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737',[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4,7));

// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));
// //agarra desde el final con negativos, o parte desde el final y hace una nueva variable como todos los demas slices o indexo lastindexof
// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

// const checkMiddleSeat = function(seat){
//   //B and E are middle seats
//   const s = seat.slice(-1)
//   if (s==='B' || s==='E') {
//     console.log('You got the middle seat 🙄');
//   }else{
//     console.log('You Got Lucky😎');
//   }
// }
// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));



//////////////////////////////////////////////C
//CODING CHALLENGE #3
/**
 * Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
 * 
 * 1.Create an array 'events' of the different game events that happened(no duplicates)
 * 2.- After the game has finished,is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log
 * 3.- Print the following string to the console: "An event happened, on average , every 9 minutes" (keep in mind that a game has 90 minutes)
 * 4.- Loop over the events and log them to the console marking whether it's in the first half or second half (after 45 min) of the gmae, like this: [FIRST HALF] 17: GOAL
 */

// const gameEvents = new Map([
//   [17,'GOAL'],
//   [36,'Substitution'],
//   [47,'GOAL'],
//   [61,'Substitution'],
//   [64,'Yellow Card'],
//   [69,'Red Card'],
//   [70,'Substitution'],
//   [72,'Substitution'],
//   [76,'GOAL'],
//   [80,'GOAL'],
//   [92,'Yellow Card']
// ])
// //1
// const events = [...new Set (gameEvents.values())]
// console.log(events);
// //2
// gameEvents.delete(64)
// console.log(...gameEvents);
// //3
// console.log(`An event happened, on average, every ${90/gameEvents.size}} minutes`);
// //3 bonus
// const time = [...gameEvents.keys()].pop()
// console.log(time);
// console.log(`An event happened, on average, every ${time/gameEvents.size}} minutes`);
// //4

// for (const [keys,values] of gameEvents) {
//   keys<45 && console.log(`[First HALF]: at minute ${keys}: ${values}`);
//   keys>45 && console.log(`[Second HALF]: at minute ${keys}: ${values}`);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// \||||||||||\\\\\\\\\\\\\\\\\\
//MAPS: ITERATION
// const question = new Map([[
//   'question','What is the best programming language in the world?'],
// [1,'C'],
// [2,'Java'],
// [3,'JavaScript'],
// ['correct',3],
// [true,'Correct🎉'],
// [false,'Try Again']
// ]);
// console.log(question);
//Convert object to map NOICE TRICK
// console.log(Object.entries(openingHours)); //This is the object
// const hoursMap = new Map(Object.entries(openingHours)) //Converting to Maps
// console.log(hoursMap);//


//Quiz app
// console.log(question.get('question'));
// for (const [key,value] of question) {
//       if (typeof key === 'number') {
//        console.log( ` Answer ${key}:  ${value}`);
//       }
// }
// const answer = Number(prompt('Your answer'))
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer))

//Convert Map again to an array

// console.log([...question]);
// // console.log(question.entries());
// console.log(...[question.keys()]);
// console.log(...[question.values()]);



//
// for (const [key,value] of question) {
//     if (key === 3) {
//       console.log(value);
//       console.log(question.get(true));
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// \||||||||||\\\\\\\\\\\\\\\\\\
//MAPS fundamental
//data structure to map values to keys

// const rest = new Map();
// rest.set('name','Classico Italiano')
// rest.set(1,'Firenze, Italy')
// console.log(rest.set(2,'Lisbon, Portugal')); 

// rest
// .set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open',11)
// .set('close',23)
// .set(true,'We are open :D')
// .set(false,'We are closed :(')

// console.log(rest.get('name'))
// console.log(rest.get(true))
// console.log(rest.get(1));

// const time = 8;
// console.log( rest.get(time > rest.get('open') && time< rest.get('close')))
// console.log(rest.has('categories'));
// rest.delete(2)
// // rest.clear()  ////ERASE 
// const arr = [1,2]
// rest.set(arr,'Test')
// rest.set(document.querySelector('h1'),'Heading')

// console.log(rest);
// console.log(rest.size);

// console.log( rest.get(arr))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// \
//SETS AND  MAPS


//SET      ALL duplicates are gone
// const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza'])
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread')); //Similar as includes
// ordersSet.add('Garlic Bread')
// ordersSet.delete('Risotto')
// //TO ERASE EVERYTHING
// // ordersSet.clear()   
// console.log(ordersSet);//there are no index, u can't get values of a set

// for(const order of ordersSet){
//   console.log(order);
// }

// //Example 
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager','Chef','Waiter']

// const staffUnique = [...new Set(staff)]
// console.log(staffUnique);


// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager','Chef','Waiter']).size);

// console.log(new Set('jonassschmedtmann').size);

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
