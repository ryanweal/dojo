'use strict';

require('dotenv').config()

const nodeMailer = require("nodemailer");

const fs = require('fs')

let textVersion = 'text';
let htmlVersion = '<p>HTML</p>';

try {
  textVersion = fs.readFileSync('./templates/mail.txt', 'utf8')
} catch (err) {
  console.error(err)
}

try {
  htmlVersion = fs.readFileSync('./templates/mail.html', 'utf8')
} catch (err) {
  console.error(err)
}


let transporter = nodeMailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

let mailOptions = {
  from: process.env.MAIL_FROM,
  to: process.env.MAIL_DEST,
  subject: process.env.MAIL_SUBJECT,
  text: `${textVersion}`,
  html: `${htmlVersion}`,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Mail error", error);
  }
  console.log("Mail sent to", process.env.MAIL_DEST);
});