const carriage1 = ["Veer", "Ayush", "Ravi"];
const emptyCarriage = [];

const threeEmptySeats = Array(3);
console.log(threeEmptySeats.length);

const passenger = Array("veer", "ayush", "ravi");

const singlePassenger = Array.of(3);
console.log(singlePassenger);

const trainCode = Array.from("DUST");
console.log(trainCode);

const tempTrain = ["A", "B", "C", "D", "E"];
tempTrain.length = 3;
console.log(tempTrain.length);
tempTrain.length = 5;
console.log(tempTrain);
console.log(tempTrain.length);

// push pop shift unshift splice
// concat, slice, flat, - returns new array without touching original ones

// const trainCopy = wholeTrain.slice(); // to copy

// Searching: indexOf, includes, find, findIndex

console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray("Ravi"));

// key:
// 1. []
// 2. array are 0 based
// 3. Mutating methods: push, pop, shift, unshift, splice
// 4. Non Mutating: concat, slice, flat, flatMap
// 5. Seaching: includes
// 6. Array.isArray()
