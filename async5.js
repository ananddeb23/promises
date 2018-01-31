require('es6-promise');

const promise = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE');
});

promise.then(console.log, null);
console.log('MAIN PROGRAM');


module.exports = promise;
