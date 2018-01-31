require('es6-promise');

function all(promise1, promise2) {
  const promise = new Promise((resolve, reject) => {
    let counter = 0;
    const res = [];
    promise1.then((msg) => {
      res[0] = msg;
      counter += 1;
      if (counter === 2) {
        resolve(res);
      }
    });
    promise2.then((msg) => {
      res[1] = msg;
      counter += 1;
      if (counter === 2) {
        resolve(res);
      }
    });
  });
  return promise;
}

all(getPromise1(), getPromise2()).then(console.log);
module.exports.all = all;
