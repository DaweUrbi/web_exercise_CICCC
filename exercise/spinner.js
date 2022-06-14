/*
Using \r for Redrawing a Line
A problem we'll face right away when trying to "animate" on the terminal is that we'll need to draw a different character to the same part of the terminal. So far, we only know how to write characters or lines to stdout and in doing so we move the cursor forward.
We need to somehow have our cursor return to the same spot in the output in order to rewrite that part. Thankfully, there are multiple ways to accomplish this, and we'll look at a very simple and limited approach.
Note
We can use the special character \r to return our cursor back to the beginning of the line that we were on. After this, anything we write next to stdout will overwrite the line.
Let's try it out!
process.stdout.write('hello from spinner1.js... \rheyyy\n');
Output:
heyyy from spinner1.js...
The first few characters are replaced by "heyyy". This is because \r brought our cursor back to the beginning.
Leveraging \r and setTimeout for Spinner
Using this \r, we can fake an animation by replacing/rewriting characters in the same spot after a delay.
Instruction
Type out the following setTimeout statements in outside of the commented area.
*/

for (let i = 1; i < 4; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   \n'); 
  }, 700);
}

// Instruction
// Run the file to confirm that we have some of the animation working.
// Now, it is your turn to make it to spin 3 times (or more if you want) without breaking the line.
// You can use a regular loop or setInterval to make it work.
// Bonus: You can try to remove all these repetitive setTimeouts to and make a shorter and cleaner code.
