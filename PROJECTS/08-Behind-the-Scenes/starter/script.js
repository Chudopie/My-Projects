'use strict';

// function calcAge(birthYear){
//     const age = 2024 - birthYear;
    
//     function printAge(){
//         let output = `${firstName} you are ${age}, born in ${birthYear}`
//         console.log(output);
//         var millenial =true;
//         if (birthYear>= 1981 && birthYear <= 1996) {
//              //Creating NEW variable with same name as outer scope's variable
//             const firstName = "Steven"
//             //Reassigning outer scope's variable
//             output = "New Output"
            
//             const str = `Oh, and you're a millenial, ${firstName} `
//         console.log(str);
//         function add(a,b){
//             return a+b
//         }

        
//         }
//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2,3)); only works without strict mode
//         console.log(output);
//     }   

//     printAge();
//     return age;
// }

// const firstName = "Eduardo"
// console.log(calcAge(1994));
// console.log(age);
// console.log(printAge);




//This KEYWORD

// console.log(this);

// const calcAge = function (birthYear){
// console.log(2024 - birthYear);
// console.log(this);
// }

// console.log(calcAge(1994));

// const calcAgeArrow = (birthYear)=>{
//     console.log(2024-birthYear);
//     console.log(this);
// }
// console.log(calcAgeArrow(1994));

// const jonas = {
//     year: 1994,
//     calcAge: function () {
//         console.log(this);
//         console.log(2024 - this.year)
//     },
// }
// jonas.calcAge()

// const matilda = 
// {
//     year : 2017,

// }

// matilda.calcAge = jonas.calcAge
// matilda.calcAge()

// const f  = jonas.calcAge;

// REGULAR FUNCTIONS VS ARROW FUNCTIONS

// const Eduardo = {
//     firstName: "Eduardo",
//     year: 1994,
//     calcAge: function () {
//         console.log(this);
//         console.log(2024 - this.year)
//     },
//     greet :  () =>console.log(` Hey ${this.firstName}`), 
//     greet0 : function(){
//         console.log(`Hey ${this.firstName}`);

        
//     },
    
// }
// Eduardo.greet()
// Eduardo.greet0()
//al usar this con arrowfunctions aparece undefined
//this en arrow solo agarra el global scope del parent.
//Que en este caso seria globalscope (undefined)
const Eduardo = {
    firstName: "Eduardo",
    year: 1994,
    calcAge: function () {
        // console.log(this);
        console.log(2024 - this.year)
        //Solution 1
        // const self = this;//self or that  
        // const isMillenial = function (){
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);

        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // }


        // Solution 2
        const self = this;//self or that  
        const isMillenial =  () => {
            console.log(this);
            // console.log(this.year >= 1981 && this.year <= 1996);
        }        
        isMillenial()
    },
    greet:() => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
}
Eduardo.greet()
Eduardo.calcAge()

//arguments keyword solo en regular functions

const addExpr = function (a,b) {
    console.log(arguments);
    return a +b;
    
};
addExpr(2,5);
addExpr(2,5,8,12);
var addArrow = (a,b) => {
    console.log(arguments);
    return a + b}

addArrow(2,5,8)