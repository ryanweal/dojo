'use strict';
const puppeteer = require('puppeteer');
const { argv } = require('yargs');

(async () => {

  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(argv.url);

  const testdate = new Date;

  await page.type('#name', 'Test Email ' + testdate.toDateString(), {delay: 100});
  await page.type('#email', argv.email, {delay: 100});
  await page.type('#comments', argv.comments, {delay: 100});
  await page.click('#submit');

  await browser.close();

})();