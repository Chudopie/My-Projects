'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a','b','c','d','e']

// console.log( arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1,-1));
// //Those are the sames
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE
// // console.log(arr.splice(2));
// //it changes, the splice, just deleted the elements they select, and saves the others in the main array

// arr.splice(-1);
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);

// arr = ['a','b','c','d','e']

// const arr2 = ['j','i','h','g','f']
// console.log(arr2);
// console.log(arr2.reverse()); //this mutate the original array //expected output :  ['f', 'g', 'h', 'i', 'j']
// console.log(arr2);

// //CONCAT

// const letters = arr.concat(arr2);//doesnt mutate the original array
// console.log(letters);
// console.log([...arr, ...arr2]);//exact result, and this not mutate


// //JOIN

// console.log(letters.join('-')); //expected output a-b-c-d-e-f-g-h-i-j

// const arr = [23,11,64]
// console.log(arr[0]);

// console.log(arr.at(0));
// //getting the last element
// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1)); //or /-2
// //also with strings
// console.log('jonas'.at(-0));
// console.log('jonas'.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
for(const[i,movement] of movements.entries()){
  if(movement>0)
    {
      console.log(`Movement ${i+1}: You deposited ${movement}`);
    }else{
      console.log(`Movement ${i+1}: You withdraw ${Math.abs(movement)}`); //Math.abs to remove the sign
    }
  }
console.log(`-------------FOREACH----------------`);

movements.forEach(function (mov,i,arr) {
  if(mov>0)
    {
      console.log(`Movement ${i+1}: You deposited ${mov}`);
    }else{
      console.log(`Movement ${i+1}: You withdraw ${Math.abs(mov)}`); //Math.abs to remove the sign
    }
})
// 0: function(200)
// 1: function(450)
// 2: function(400)
//...