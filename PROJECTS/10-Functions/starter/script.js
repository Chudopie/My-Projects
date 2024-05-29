'use strict';

// const bookings = []
// const createBooking = function (flightNum, numPassengers = 1, price = 199*numPassengers) {
    

//     // ES5  old way to default parameters

//     // numPassengers = numPassengers || 1
//     // price = price || 199
//     //enhanced object literal syntax
//     const booking = {
//         flightNum,//whithout doing this: flightNum:flightNum
//         numPassengers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH123')
// createBooking('LH123',2,800)
// createBooking('LH123',5)

// createBooking('LH123', undefined, 1000)

// const flight = 'LH234'
// const eduardo={
//     name: 'Eduardo Gonzalez',
//     passport: 24739479284
// }

// const checkIn= function(flightNum,passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//         if (passenger.passport === 24739479284) {
//             alert('Check in')
//         }else{
//             alert('Wrong Passport!')
//         }

//     }
// checkIn(flight,eduardo)
// console.log(flight);
// console.log(eduardo);


//Is the same as doing
//  flightNum = flight
// const flightNum = flight
// const passenger = eduardo

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random()*10000000)
// }
// newPassport(eduardo)
// checkIn(flight,eduardo)


// const oneWord = function(str){ 
//     return str.replace(/ /g, '').toLowerCase()   

// }


// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(), ...others].join(' ')
// }



// const transformer = function(str,fn){
//     console.log(`Original string; ${str}`);
// console.log(`Transformed string: ${fn(str)}`);

// console.log(`Transofmed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!',upperFirstWord)

// transformer('JavaScript is the best!',oneWord)

// // JS uses callbacks all the time
// const high5 = function () {
//     console.log('👋');
// }
// document.body.addEventListener('click',high5) 

// ['Jonas','Martha','Adam'].forEach(high5)


// const greet = function (greeting){
//     return function (name){
//         console.log(`${greeting}  ${name}`);
//     }
// }
// const greeterHey = greet('Hey')

// greeterHey('Jonas')
// greeterHey('Steven')

// greet('Hello')('Jonas')

// //CHALLENGE
// const greet2 =  (greeting) =>  (name) => console.log(`${greeting}   ${name}`);  

// greet2('Hola')('EDUARDO')

// const lufthansa = {
//     airline: 'Lufthans',
//     iataCode:'LH',
//     bookings:[],
//     //book: function(){}
//    //new syntax book(){}
//     book(flightNum,name){
//         console.log( `${name}  booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}` );
//        this.bookings.push(({flight: ` ${this.iataCode} ${flightNum}`, name})) }
//     }


// lufthansa.book(239, 'Eduardo Gonzalez')
// lufthansa.book(635, 'John Smith')
// console.log(lufthansa);


// const eurowing =  {
//     airline: 'Eurowings',
//     iataCode:'EW',
//     bookings:[]
// }

// const book = lufthansa.book
// //DOES not Work
// // book(5454,'mike')

// book.call(eurowing, 23, 'Sarah Williams')
// console.log(eurowing);

// book.call(lufthansa, 239, 'Mary Jane')

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings:[],

// }

// book.call(swiss,583,'Mary Cooper')
// console.log(swiss);

// //Apply method

// const flightData = [583 , 'George Cooper']
// book.apply(swiss,flightData)
// console.log(swiss);
// //INSTEAD OF USING APPLY
// book.call(swiss, ...flightData)
// console.log();

// //BINDMETHOD/////////////////////////////////////////////////////////////////////BIND METHOD
// //BIND METHOD

// const bookEW = book.bind(eurowing)
// const bookLH = book.bind(lufthansa)
// const bookLX = book.bind(swiss)

// bookEW(23,'Steven Williams')
// bookLH(845,'Eduardo James')
// bookLX(561,'yao ming')

// const bookEW23 = book.bind(eurowing,23)
// bookEW23('Jonas Schmedtmann')
// bookEW23('Martha Cooper')


// //With Event Listeners


// lufthansa.planes = 300
// lufthansa.buyPlane = function () {
//     console.log(this);
//     this.planes++
//     console.log(this.planes);
// }


// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa))

// //partial application

// const addTax = (rate,value) => value+value *rate;
// console.log(addTax(.1,200));

// const addVAT = addTax.bind(null,0.23)
// //addVat = value => value+value *0.23

// console.log(addVAT(100));

// console.log(addVAT(23));

// console.log(addVAT(123));

// const addTaxRate = function(rate) {
//     return function (value){
//         return value + value * rate
//     }
// }
// const addVAT2 = addTaxRate(0.23)
// console.log(addVAT2(100));
// console.log(addVAT2(23));


///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         // Get answer
//         const answer = Number( prompt(`${this.question} \n ${this.options.join('\n')} \n (Write option number)`))

//         console.log(answer);
//         //Register answer
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

//         this.displayResults()
//         this.displayResults('string')
//     },
//     displayResults(type = 'array'){
//         if (type === 'array') {
//             console.log(this.answers);
//         }else if(type === 'string'){
//                 console.log(`Poll results are  ${this.answers.join(',')}`);
//         }
//     }
// }

// // poll.registerNewAnswer()

// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({answers: [5, 2, 3]})
// poll.displayResults.apply({answers:[1,2,3,4,9,6,1]})

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]


///////////////////////////////////////////////////////////////////////////
//Immediately Invoked Function Expression (IIFE)
// const runOnce = function () {
//     console.log("Este se puede repetir");
// }
// runOnce();

// // IIFE
// (function()
// {
//     console.log("Este codigo no se correra de nuevo");
//     // const isPrivate = 23;
// })();

// // console.log(isPrivate);
// (()=> console.log('This will ALSO never run again'))
// ();


// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// };
// //console.log(isPrivate);
// console.log(notPrivate);


//////////////////////////////////////////////////////////////////////////
//Closures

// const secureBooking = function() {
//   let passengerCount = 0;

//   return function(){
//     passengerCount++
//     console.log(`${passengerCount} passengers`);
//   }

// }
// const booker = secureBooking();

// booker();
// booker();
// booker();
// console.dir(booker);


//More Closure Examples

let f;

const g = function() {
  const a  =23;
  f = function(){
    console.log(a*2);
  }
}

const h = function(){
  const b = 777;
  f =function(){
    console.log(b*2);
  }
}

g();
f();

//  Re-assigning f funcion
h();
f();