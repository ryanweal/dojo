# 09 - xmpp.js post message to groupchat

Before you begin remember to `npm install` in this folder to get the
dependencies.

To start using this repo you will need to create a `.env` file in this folder
with the follwoign contents:

    XMPP_HOST=example.com
    XMPP_USER=me
    XMPP_PASS=password
    XMPP_GROUP=wall@conference.example.com

The XMPP_USER value will also be used as the "nickname" when you connect to
the group chat (XMPP protocol does not require you to use XMPP_USER as the
nickname, however, we are using it out of laziness, but technically we could
add a nickname field and use that as part of the "to" address of the message
going to the groupchat).

Once you have input the details into the `.env` file you can start this
script:

    node index.js --message="Bot says what?"

Once the message has been posted this script will immediately exit.
