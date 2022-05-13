/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

Warning
Use some sort of looping. Do Not use Array.prototype.filter()
*/

const conditionalSum = function(values, condition) {
  if (values.length === 0)
  return 0;

  let i = 0;
  let sum = 0;

  while(i < values.length){
    if(condition === 'even' && values[i] % 2 === 0){
      sum += values[i];
    } else if (condition === 'odd' && values[i] % 2 === 1){
      sum += values[i];
    }
    i++;
  }
  return sum; 
};
  
console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0