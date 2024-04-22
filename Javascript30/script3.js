let init = 5

let createCounter = function(){
     increment = function(){
      return console.log(++init);
    }

    decrement =function () {
        return --init;
    }

    reset = function(){
        return init = 0;
    
}
}

createCounter()