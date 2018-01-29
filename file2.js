require('es6-promise');

function printfulfilled() {
  console.log('FULFILLED!');
}
const promise = new Promise((fulfill, reject) => {
  // Your solution here
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
});

promise.then((message) => {
  console.log(message);
});

module.exports = promise;
