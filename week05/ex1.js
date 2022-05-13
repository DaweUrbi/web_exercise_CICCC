/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function(data) {
let largest = data[0];
let secondLargest = data[1];

  if(largest > secondLargest) {
    largest = data[0];
    secondLargest = data[1];
  } else {
    secondLargest = data[0];
    largest = data[1];
  }

  for(let i = 1; i < data.length; i++){
    if(data[i] > largest) {
      secondLargest = largest;
      largest = data[i];
    }
  }
  return largest + secondLargest;
};
  
console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126