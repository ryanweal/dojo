const axios = require('axios');
const { argv } = require('yargs');

// make available for import into other applications
exports.default = async () => {

  // use command line varaibles
  // might be worth comparing function args to command line args
  const url = argv.url ? argv.url : "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

  // time the request
  let start = Date.now();
  let end = null;

  // perform a simple get request
  axios.get(url)
    .then(function (response) {

      // output different things depending on the content type
      const ct = response.headers['content-type'];
      if (ct === 'text/html') {
        console.log('HTML response');
        console.log(response.status, response.statusText);
      }
      if (ct === 'application/json') {
        console.log(response.data);
      }
      else {
        console.log(response.headers);
      }

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {

      // finish the timer and output the values
      end = Date.now();
      elapsed = end - start;
      console.log('Time elapsed', elapsed, 'ms.');

    });

   // nothing is returned officially
};

// run automatically when started
// probably shouldn't do this if you intend to pull into other projects! 
this.default();
