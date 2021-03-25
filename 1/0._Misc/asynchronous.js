// Why we need asynchronous code
// When we need it 

// Promises
// two states
// pending
// fulfilled
    // resolved rejected

/* new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Everything went well.");
    }, 4000);    
}).then(message => {
    console.log(message);
}).catch(errorMessage => {
    console.log(errorMessage);
}); */

function myPromiseFunction() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Everything went well.");
            }, 3000);    
        } catch {
            reject("Not every Promise works out this way.");
        }
    });
}

/* myPromiseFunction()
.then(message => console.log(message))
.catch(message => console.log(message));
 */

(async function asyncCall() {
    const message = await myPromiseFunction();
    console.log(message);
})()
