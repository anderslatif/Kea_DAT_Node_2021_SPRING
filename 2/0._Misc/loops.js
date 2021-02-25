// We aim to use functional approaches when looping
// like map, filter, reduce, find etc.

const failures = ["mislick", "falling down", "skateboard accident", "tiktok fail"];

// loop through this array using map print out each element
// failures.map((failure, index) => console.log(failure, index));

/* const newFailures = failures.map((failure) => {
    return { failure, hilarityLevel: 5 };
}); */

// failures[1] = "Charlie Chaplin fall";

const newFailures = failures.map((failure) => failure);

console.log(newFailures);
