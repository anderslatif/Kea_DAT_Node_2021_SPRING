// asynchronous code why?
// to avoid blocking 
// because JS is single threaded

// asynchronous code when? 
// Request
// Database
// user input 
// Files 

// two states
// pending
// fulfilled
    // resolved, rejected

/* new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I'm so happy!");
    }, 4000);
}).then(message => {
    console.log(message);
}); */

function myPromise() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("The mitochondria is the power house of the cell.");
            }, 5000);
        } catch {
            reject("Every Promise don't work out this way.");
        }
    });
}

/* myPromise()
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage)); */

(async function myAsynchronousFunction() {
    try {
        const message = await myPromise();
        console.log(message);
    } catch (errorMessage) {
        console.log(errorMessage);
    }
})()


