require('es6-promise');

const attachTitle = arg => `DR. ${arg}`;

const promise = new Promise((fulfill, reject) => {
  fulfill('MANHATTAN');
});

promise.then(attachTitle).then(console.log);


module.exports = promise;
module.exports = attachTitle;
