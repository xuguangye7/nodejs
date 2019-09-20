#!/usr/bin/node
console.log('hello world!')

const fs  = require('fs'),
      lnk = process.argv[2];

console.log('%s->%s',fs.readlinkSync(lnk));
