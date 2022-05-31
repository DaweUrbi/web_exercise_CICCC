// let keyword
let number = 1;
if (number === 1) {
  const number2 = 2;
  number = 1 + number2;
  console.log(number); // 3
}
// console.log(number2); // Error: Cannot access 'number2' before initialization

// const keyword
const number2 = 1;
// number2 = 1 + 2; // Error: Assingment to constant variable
console.log(number2);

// Arrow functions
function sum(a, b) {
  return a + b;
}

const arrowSum = (a, b) => {
  return a + b;
};

// const arrowSum = (a,b) => a + b;

console.log(sum(1, 2) === arrowSum(1, 2)); // true

// String Literals
const firstName = 'Arthur';
const schoolName = 'Cornerstone College';
const greeting = `Hello my name is ${firstName} and I am the Web Dev Instructor at ${schoolName}.`;

// Function Expressions
// let sum = function (a, b) {
//   return a + b;
// };

// Higher Order Functions (HOF)
const calculateSum = (func) => {
  const result = func(1, 2);
  return result;
};
calculateSum(sum);

// OR returns a function

// const calculateSum = (a, b) => {
//   return function () {
//     return a + b;
//   };
// };

// calculateSum(1,2);

// Array.forEach

const numbers = [1, 2, 3, 4, 5];
const total = 0;
const result = numbers.forEach((number) => {
  console.log(number); // Prints every element of the numbers' array
  return total + number;
});
console.log(result); //result = undefined

// Array.map
// numbers = [1, 2, 3, 4, 5];
const factor = 2;
const result2 = numbers.map((number) => {
  console.log(number); // Prints every element of the numbers' array
  return number * factor;
});
console.log(result2); //result2 = [2,4,6,8,10]

const result3 = numbers.map((number) => {
  console.log(number); // Prints every element of the numbers' array
  if (number % 2 === 0) {
    return number * factor;
  }
});
console.log(result3); //result3 = [undefined,4,undefined,8,undefined]

// Array.filter

// numbers = [1, 2, 3, 4, 5];
const result4 = numbers.filter((number) => {
  console.log(number); // Prints every element of the numbers' array
  if (number % 2 === 0) {
    const newNumber = number + 1; // elements cannot be changed
    return newNumber;
    // return value will be converted to boolean, so in this case, all numbers will become true, except for 0 or NAN.
    // Element will be added to new array.
  }
  //if condition doesn't macth, return will be undefined, which is a falsey value and element will not be added to new array.
});
console.log(result4); //result4 = [2,4]

// Array.reduce

// numbers = [1, 2, 3, 4, 5];
const initialValue = 0;
//                              accumulator
const result5 = numbers.reduce((total, element) => {
  return total + element; // return value will reassign the accumulator
}, initialValue);
// initial value of total variable

console.log(result5); // result5 = 15

// Array.sort

const months = ['Mar', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ['Dec', 'Feb', 'Jan', 'Mar']

const nums = [1, 21, 1000, 4, 30];
nums.sort();
console.log(nums); // [1, 1000, 21, 30, 4]

nums.sort((a, b) => {
  if (a > b) return 1; // a will be positioned after b
  if (a < b) return -1; // a will be positioned before b
  return 0; // no changes
});

console.log(nums); // [1,4,21,30,1000]

// Array.find

const found = nums.find((number) => {
  return number > 10; // similar to filter, it will convert the value to boolean.
});
console.log(found); // found = 21

// Array.includes

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); //return true
console.log(pets.includes('at')); // return false

// Array.some

// numbers = [1, 2, 3, 4, 5];
const some = numbers.some((number) => {
  return number % 2 === 0;
});
console.log(some); // true

// Array.every

// numbers = [1, 2, 3, 4, 5];
const every = numbers.every((number) => {
  return number % 2 === 0;
});
console.log(every); // false

// Array.indexOf

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // returns 1

console.log(beasts.indexOf('bison', 2)); //returns 4
// takes second argument as the index to start searching.

console.log(beasts.indexOf('giraffe')); // returns -1

// Array.join()

console.log(beasts.join()); //ant,bison,camel,duck,bison
console.log(beasts.join(' ')); //ant bison camel duck bison

// Rest parameters

function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1)); // 1 args = [1]
console.log(sumAll(1, 2)); // 3 args = [1,2]
console.log(sumAll(1, 2, 3)); // 6 args = [1,2,3]

//                      rest parameter should always be last
function func(arg1, arg2, ...rest) {
  // do something
}
func(1, 2, 3, 4, 5, 6); // rest = [3,4,5,6]

// Spread Operator

const arr1 = [3, 5, 1];
const arr2 = [8, 9, 15];
const merged = [0, ...arr1, 2, ...arr2]; // 0,3,5,1,2,8,9,15
// in arrays, will always keep the order of elements

const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };

const newObj = { ...obj1, ...obj2, planet: 'Earth' };
console.log(newObj);
/*
{
    firstName: 'Foo',
    age:22,
    lastName: 'Bar'
    gender: 'M',
    planet: 'Earth'
}
*/

// Closures

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log('twice', twice(5)); //10

// Recursion

function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number + 2);
  }
}
countEvenToTwelve(0); //0,2,4,6,8,10,12

// Objects

const dog = { name: 'Woody', type: 'dog' };
const cat = { name: 'Buzz', type: 'cat' };
dog.breed = 'labrador';
console.log(dog); //{name: 'Woody', type:'dog', breed:'labrador'}
console.log(cat.name); //Buzz
console.log(cat.breed); //undefined
function getPetInfo(pet, info) {
  // console.log(pet.info); undefined, no "info" property in obj
  console.log(pet[info]);
}
getPetInfo(dog, 'breed'); //labrador
getPetInfo(cat, 'type'); //cat

// loop objects
for (let info in dog) {
  console.log(info); // name, type, breed
  console.log(dog[info]); // Woody, dog, labrador
}

//object methods (returns array) - keys, values, entries
console.log(Object.keys(dog)); // name, type, breed
console.log(Object.values(dog)); // Woody, dog, labrador
console.log(Object.entries(dog)); // [name,Woody], [type,dog], [breed,labrador]

//this
const greetingPet = function () {
  return `Hi, my name is ${this.name} and I am a ${this.type}`;
};

dog.greeting = greetingPet;
cat.greeting = greetingPet;

console.log(dog.greeting()); //Hi, my name is Woody and I am a dog
console.log(cat.greeting()); //Hi, my name is Buzz and I am a cat
