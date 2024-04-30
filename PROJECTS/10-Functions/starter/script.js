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

const flight = 'LH234'
const eduardo={
    name: 'Eduardo Gonzalez',
    passport: 24739479284
}

const checkIn= function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

        if (passenger.passport === 24739479284) {
            alert('Check in')
        }else{
            alert('Wrong Passport!')
        }

}
checkIn(flight,eduardo)
console.log(flight);
console.log(eduardo);


//Is the same as doing
// flightNum = flight
const flightNum = flight