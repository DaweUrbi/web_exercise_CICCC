const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;

const promise = returnPromise('first promise', 3338);
console.log('promise:', promise);

console.log('first');

// Not the best way to do this

// setTimeout(()=>{
//   console.log('promise 6 seconds later:',promise);
// },6000);

//
// The RIGHT way to do this
//

// promise
//   .then((promiseResolveValue) => {
//     console.log('third');
//     // const newData = 'another thing';
//     // console.log("newData:",newData);
//     console.log('promiseResolveValue:', promiseResolveValue);
//   });

// <--- that is just a function call. no magic there!
//   .then(() => {
//     console.log('it is alive!');
//   });

console.log('second');
