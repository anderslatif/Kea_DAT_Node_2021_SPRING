// functional looping methods are prefered 
// such as map, reduce, filter, find etc. 

const fruits = ["apples", "bananas", "blueberries"];

// use map to print out each fruit
/* fruits.map(fruit => {
    console.log(fruit);
}); */

// fruits[1] = "banan";

// const copiedFruits = fruits.map(fruit => fruit);

const copiedFruits = fruits.map((fruit, index) => {
    return { id: index+1, fruit, delicious: "yes yes yes" };
});

// console.log(copiedFruits);

// Create a new server with express called 2._Data_Server or something like that... 

const people = [
    {
        name: "David Krtolica",
        age: 50
    }, 
    {
        name: "Alex Maccagnan",
        age: 20
    }, 
    {
        name: "Nicklas Bogeskov-Jensen",
        age: 30
    }, 
];

const peopleAgeSum = people.reduce((accumulator, person) => accumulator + person.age, 0);

