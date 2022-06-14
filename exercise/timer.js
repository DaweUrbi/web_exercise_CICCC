/*
Instruction
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
PS: to access the arguments, use "process.argv". Console log this to try it out!
Example usage:
node timer1.js 10 3 5 15 9 
This will print "beep" at:
3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
Edge Cases
With every software project, developers need to think about edge cases.
Instruction
Confirm that our script can handle some common edge cases.
For this app, we can think of at least these three:
No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/

const args = process.argv.slice(2);
console.log(args);
const newArr = args.map((element) => {
    return Number(element);
});    
newArr.sort((a, b) => a - b);
newArr.forEach((element) => {
    setTimeout(() => {
        console.log('beep');
    }, element * 1000);
});