// create a function call myFirstFunction which returns a greeting

// hoisting
const returnValue = myFirstFunction();
// console.log(returnValue);

function myFirstFunction() {
    return "Greetings my friend";
}

const myVariableFunction = function () {
    console.log("Hello from the anonymous function");
};

const myArrowFunction = () => {
    console.log("Hello from the anonymous function which is also an arrow function");
};

// calllback functions
function sayHiLater(anyFunctionReference) {
    // simulate some code running
    // ... 5 seconds later ... 
    anyFunctionReference();
}

const sayHi = () => {
    console.log("Hi");
}
const sayHello = () => {
    console.log("Hello");
};

// call sayHiLater and pass a callback that says "Hi"
sayHiLater(sayHi);
sayHiLater(sayHello);

// do the same but this time it should say "Hello"

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => {
    return "Poke " + name;
}

interact(poke, "Sebastian");

// call interact and let it interact with a person of name
// example: "poke " + name

// call interact and in a single line make sure that the following is achieved
// example: "lick " + name
interact(name => "Lick " + name, "Biden");
