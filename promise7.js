require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  // Your solution here

  fulfill('secret!');
});
const promise2 = new Promise((fulfill, reject) => {
  // Your solution here

  fulfill('second!');
});
function first() {
  return promise;
}
function second() {
  return promise2;
}
const firstprom = first();
const secondprom = firstprom.then(msg => second(msg));

secondprom.then(console.log);

module.exports = secondprom;
