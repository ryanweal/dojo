require('dotenv').config();
const { argv } = require('yargs');
const {
  client,
  xml
} = require('@xmpp/client');
const debug = require('@xmpp/debug');


const xmpp = client({
  service: process.env.XMPP_HOST,
  username: process.env.XMPP_USER,
  password: process.env.XMPP_PASS,
})

//debug(xmpp, true);

xmpp.on('error', err => {
  console.error(err)
})

xmpp.on('online', async address => {

  // Show as online
  await xmpp.send(xml('presence'));

  // Connect to groupchat
  await xmpp.send(xml('presence', {
    from: `${process.env.XMPP_USER}@${process.env.XMPP_HOST}`,
    to: `${process.env.XMPP_GROUP}/${process.env.XMPP_USER}`
  }));

  // Post a message to groupchat
  const message = xml(
    'message', {
      type: 'groupchat',
      to: process.env.XMPP_GROUP
    },
    xml('body', {}, `${argv.message}`)
  );
  await xmpp.send(message)

  // Disconnect after posting
  await xmpp.send(xml('presence', {type: 'unavailable'}))
  await xmpp.stop()
})

xmpp.start().catch(console.error)