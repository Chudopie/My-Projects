
// let createCounter = function (n) {

//     let count = n
//     return function () {
//         return count++ //HIDDEN STATE
//     }
// }

// class Counter{
//     constructor(n)
//     {
//         this.n = n;
//     }
//     increment(){
//         return ++this.n
//     }
// }

// const counter = Counter(10)
// counter.increment() //10


// let counter = createCounter(10)


let n = 10;

let createN = function(){
    return ++n
}

console.log(createN());
console.log(createN());
console.log(createN());
console.log(createN());
