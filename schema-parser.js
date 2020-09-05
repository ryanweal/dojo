'use strict';

const fs = require('fs');
const fspath = require('path');
const readline = require('readline');

const filePath = fspath.join(__dirname, 'schema/mango_11_dev.out');

let types = [];
let tables = [];

async function generateNewConfig() {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  let context = null;
  let scope = null;

  await rl.on('line', (line) => {
    console.log(`Received: ${line}`);
    if (line.startsWith('CREATE TABLE')) {
      const table = line.replace(/ \(/, '').replace(/CREATE TABLE.*\./, '');
      tables[table] = [];
      context = table;
      scope = 'table';
    }
    if (line.startsWith('CREATE TYPE')) {
      const type = line.replace(/ \(/, '').replace(/CREATE TYPE.*\./, '');
      types.push(type);
      context = type;
      scope = 'type';
    }
    if (line.startsWith(')')) {
      context = null;
      scope = null;
    }
    if (scope && !line.startsWith('CREATE') && !line.startsWith(')') && !line.startsWith('    PRIMARY')) {
      console.log('line',line)
      if (scope === 'table') {
        tables[context][line] = {};
      }
    }
  });

  rl.on('close', () => {
    console.log('types', types);
    console.log('tables', tables);
  })
}

generateNewConfig();