require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});
function onRejected(err) {
  console.error(err.message);
}
promise.then(console.log, onRejected);


module.exports = promise;
