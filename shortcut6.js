require('es6-promise');

const promise1 = new Promise((resolve, reject) => {
  reject(new Error('ERROR!!!!'));
});
function onreject(err) {
  console.log(err.message);
}
promise1.catch(onreject);
const promise2 = Promise.resolve('HELLO SUCCESS!');
const promise3 = Promise.reject(new Error('FAILED'));


module.exports.promise1 = promise1;
module.exports.promise2 = promise2;
module.exports.promise3 = promise3;
