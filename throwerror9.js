require('es6-promise');

function parsePromised(arg) {
  return new Promise((resolve, reject) => {
    let objjson;
    try {
      objjson = JSON.parse(arg);
    // resolve(val);
    } catch (e) {
      // console.log(e);
      reject(e);
    }
    resolve(objjson);
  });
}
parsePromised(process.argv[2]).then(console.log).catch(console.log);

module.exports.parsePromised = parsePromised;
