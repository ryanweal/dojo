'use strict';

// let's only use the promises version of fs this time
const fs = require('fs').promises;

// once we have found a mail file, parse it so we can identify specific fields
const simpleParser = require('mailparser').simpleParser;

// automatically run this function on startup
(async () => {

  // make sure errors don't crash us
  try {

    // open a maildir (a directory of email files)
    const emails = await fs.readdir('./emails');

    for (const email of emails) {

      const emailSrc = await fs.readFile('./emails/' + email);
      let parsed = await simpleParser(emailSrc);

      // print out the parts of the emails we are interested in
      console.log('----------------------------------------')
      console.log(parsed.date);
      console.log(parsed.subject);
      console.log(parsed.text.replace(/        name/, 'name').replace(/A new Contact Us inquiry has been processed:\n/, ''));
    }

  } catch (e) {
    console.log('Oops, something went wrong.', e);
  }

})();