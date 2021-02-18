// 'use strict';

// don't EVER do this.. not allowed in strict mode
// totalGlobalVariable = 123;

var myPreciousRing = "O";
// delete myPreciousRing;
// strict mode helps us avoid coding in a bad way

let variableA;
let variableB;

// console.log(variableA + variableB); // don't ever do this
// console.log(variableA, variableB);

// type coercion
// avoid by always using === and !==


{
    // this is a new scope
    let scopedVariable = "abc";
    {
        scopedVariable = 123;
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

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

