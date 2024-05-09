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

const lufthansa = {
    airline: 'Lufthans',
    iataCode:'LH',
    bookings:[],
    //book: function(){}
   //new syntax book(){}
    book(flightNum,name){
        console.log( `${name}  booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}` );
       this.bookings.push(({flight: ` ${this.iataCode} ${flightNum}`, name})) }
    }


lufthansa.book(239, 'Eduardo Gonzalez')
lufthansa.book(635, 'John Smith')
console.log(lufthansa);


const eurowing =  {
    airline: 'Eurowings',
    iataCode:'EW',
    bookings:[]
}

const book = lufthansa.book
//DOES not Work
// book(5454,'mike')

book.call(eurowing, 23, 'Sarah Williams')
console.log(eurowing);

book.call(lufthansa, 239, 'Mary Jane')

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings:[],

}

book.call(swiss,583,'Mary Cooper')
console.log(swiss);

//Apply method

const flightData = [583 , 'George Cooper']
book.apply(swiss,flightData)
console.log(swiss);
//INSTEAD OF USING APPLY
book.call(swiss, ...flightData)
console.log();

//BINDMETHOD/////////////////////////////////////////////////////////////////////BIND METHOD
//BIND METHOD

const bookEW = book.bind(eurowing)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(23,'Steven Williams')
bookLH(845,'Eduardo James')
bookLX(561,'yao ming')

const bookEW23 = book.bind(eurowing,23)
bookEW23('Jonas Schmedtmann')
bookEW23('Martha Cooper')


//With Event Listeners


lufthansa.planes = 300
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++
    console.log(this.planes);
}


document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa))

//partial application

const addTax = (rate,value) => value+value *rate;
console.log(addTax(.1,200));

const addVAT = addTax.bind(null,0.23)
//addVat = value => value+value *0.23

console.log(addVAT(100));

console.log(addVAT(23));

console.log(addVAT(123));

const addTaxRate = function(rate) {
    return function (value){
        return value + value * rate
    }
}
const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(100));
console.log(addVAT2(23));