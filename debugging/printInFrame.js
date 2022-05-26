/*
The code in this file defines a function printInFrame that prints a string in a "frame". It also defines a few other (helper) functions and some driver code to test the code.
Expected Output
Printing the strings correctly in frames would look like the following.

node printInFrame.js
*********
* May   *
* the   *
* force *
* be    *
* with  *
* you   *
*********
***********
* Here's  *
* Johnny! *
***********
**************************************
* Supercalifragalisticexpialadocious *
**************************************
*********
* Lost, *
* like  *
* tears *
* in    *
* the   *
* rain  *
*********
Executing the code you've cloned, you'll notice it does not produce the correct output.

Instruction
Debug the code and fix any mistakes you find such that the program works correctly.
*/
const printInFrame = function(list) {
    list = list.split(' ');
    const longest = longestStr(list).length;
    const border = repeat('*', longest + 3);
  
    console.log(border);
    for (const word of list) {
      console.log(`* ${word}${repeat(' ', longest - word.length)}*`);
    }
    console.log(border);
  };
  
  const repeat = function(str, times) {
    let result = str;
  
    for (let i = 0; i < times; i++) {
      result += str;
    }
  
    return result;
  };
  
  const longestStr = function(list) {
    let longest = list[0];
  
    for (const str of list) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
  
    return longest;
  };
  
  // Test driver code, do not modify
  printInFrame('May the force be with you');
  printInFrame('Here\'s Johnny!');
  printInFrame('Supercalifragalisticexpialadocious');
  printInFrame('Lost, like tears in the rain');