require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
});

promise.then(console.log, null);
console.log('MAIN PROGRAM');


module.exports = promise;
