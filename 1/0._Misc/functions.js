// create a function called myFirstFunction that returns a greeting of sorts

function myFirstFunction() {
    return "Hello there, General Alex.";
}

const myVariableFunction = function () {
    console.log("Hello there from the anonymous function.");
    function within() {

    }
};

// arrow functions declare the "this" keyword differently, binds it to the scope of the function
const myArrowFunction = () => {
    console.log("Hello there from the anonymous function that's also an arrow function.");
};

// callbacks

function sayHiLater(anyFunctionReference) {
    // simulate some code running
    // takes some time...
    // and more time...
    anyFunctionReference();
}

const sayHi = () => {
    console.log("Hi");
};

// call sayHiLater so that it says "Hi" 
sayHiLater(sayHi);

// hoisting

const sayHello = () => {
    console.log("Hello");
};

sayHiLater(sayHello);

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => "Poke " + name;

interact(poke, "Thomas");
interact(poke, "Christian-Valentin");

// Call interact
// interact should call a poke function and the poke function should say something like: "Poke " + name

// hug someone by calling interact and do it all in one line 
// example: "Hug " + name  where name is Napster for instance
interact((name) => "Hug " + name, "Napster");

