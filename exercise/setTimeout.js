/*
Let's play a bit with setTimeout to get comfortable with asynchronous control flow.
Challenge #1
First let's start with a simple exercise.
Instruction
Have our file print out these three words "4311o th3r3 w0r1d" three seconds after the file is run.
All of the words can appear at the same time.
*/

//Code here...

const str = '4311o th3r3 w0r1d';

setTimeout(() => {
    console.log(str);
}, 3000);

/*
Challenge #2
Next, let's make things more interesting...
Instruction
Instead of printing the entire sentence together, have our code print out each of the three words one at a time, 1 second apart.
It's okay if each of the words appears on a separate line, due to console.log.
*/

//Code here...

const stringArray = str.split(' ');

for (let i in strArray) {
  setTimeout(() => {
    process.stdout.write(`${strArray[i]} `);
  }, 1000 * i);
}

