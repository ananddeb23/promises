const HTTP = require('q-io/http');

function httpread() {
  return HTTP.read('http://localhost:1337')
    .then(content => console.log(JSON.parse(content)));
}

httpread();
