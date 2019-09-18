#!/usr/bin/node
console.log('hello world!')

const fs = require('fs'),
      file = process.argv[2];

fs.writeFileSync(file, '');
