const helloWorldfunct = () => console.log("Hello World");
helloWorldfunct()

const createWorld = function() {
    return function(...args){
        return "Hello World";
    } ;
}   
 createWorld()();