# Submit a webform using puppeteer

In this dojo we will build a simple webform submitter using the puppeteer
tool for automation. The program will accept variables for knowing what form
to target and will presume some "known" fields will exist on that form:

    node index.js --url=http://example.com/contact --email=info@example.com --comments="Please reply to this email to ensure that things are working properly."

This tool will also fill out a "name" field with some dynamic content in
addition to the "email" and "comments" fields provided as URL arguments.

Reminder that if you put this into a `cron` job that you may not have node.js
installed globally if you used `nvm`. So if you use NVM, make sure to put the
full path to the node binary in your cron job. When you update `nvm` you will
need to also update this path or it will fail. Alternatively, use
nodesource's deb packages. Also worthy of note: full path to `index.js` will
be necessary as well.
