// "use strict";

// never EVER do this 
// totalGlobalVariable = "My total global variable";

// let someVarToDelete = "don't hurt me";
// delete someVarToDelete;

// are objects truly immutable in Javascript? NO!
const myObject = Object.freeze({
    attribute: "value"
});
myObject.attribute = "other value";
// console.log(myObject); retains the original value because of Object.freeze

let variableA;
let variableB;

// console.log(variableA + variableB);
// console.log(variableA, variableB);

// type coercion

// always compare both value and types with === and !==

// == allows typer coercion so happen..
// === hard equality check meaning that it checks if the type is the same

{
    // this is a new scope
    let scopedVariable = "abc";
    {
        scopedVariable = 123;
        // this is a nested scope that inherits from the previous scope
    }
    // console.log(scopedVariable);
}

{
    let scopedVariable = "abc";
    {
        let scopedVariable = 123;
        console.log(scopedVariable);    
    }
    console.log(scopedVariable);    
}

/* for (let i = 0; i < 6; i++) {
    setTimeout(() => {
        // code here runs after 1 second
        console.log(i);
    }, 1000);
}
 */