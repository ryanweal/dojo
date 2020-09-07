'use strict';

const axios = require('axios');
const { argv } = require('yargs');

exports.default = async() => {

  // we don't care about the response from the axios requests, we presume both
  // come back valid, so in our then() we use ES6-style implicit return to give
  // back the argument that called the promise and we report that as the winner

  const promise1 = axios.get(argv.url1).then(() => argv.url1);
  const promise2 = axios.get(argv.url2).then(() => argv.url2);

  console.log("Let's race!");
  Promise.race([promise1, promise2]).then((value) => {
  console.log("Winner:", value);
});
}

this.default();
