'use strict';

const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const url = 'http://verbosity.ca/rss.xml';

axios.get(url)
  .then(function (response) {

    // about the channel we are processing
    console.log(response.status);
    console.log(response.headers["content-type"]);

    if (response.status === 200) {

      // parse as XML
      const dom = new JSDOM(response.data, { contentType: response.headers["content-type"] });
      const channel = dom.window.document.querySelector("rss > channel");

      // display some of the metadata
      console.log(channel.querySelector("title").textContent);
      console.log(channel.querySelector("description").textContent);

      const items = Array.from(channel.querySelectorAll("item"));
      items.forEach(item => {
        console.log(' - ', item.querySelector("title").textContent);
      });

    }
    else {
      console.log('Unexpected response from server', response.status);
    }

  })
  .catch(function (error) {
    console.log('Something went wrong', error);
  });
