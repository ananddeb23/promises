require('es6-promise');

let msg = '';
const alwaysThrows = () => {
  const e = new Error('OH NOES');
  throw e.message;
  // throw 'OH NOES';
};

const iterate = (arg) => {
  // console.log(arg);
  msg += arg.toString();
  return arg + 1;
};
// const iterate = (arg) => {
//   // console.log(arg);
//   msg += arg;
//   return msg;
// };

function callpromise(arg) {
  return Promise.resolve(arg)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(console.log);
}
function callpromiseanother(arg) {
  return Promise.resolve(arg)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(console.log);
}
module.exports.callpromiseanother = callpromiseanother;
module.exports.callpromise = callpromise;
module.exports.iterate = iterate;
module.exports.alwaysThrows = alwaysThrows;
// callpromise(1);
