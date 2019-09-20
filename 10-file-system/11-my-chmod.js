#!/usr/bin/node
console.log('hello world!')

const fs  = require('fs'),
      mod = process.argv[2],
      src = process.argv[3];

fs.chmodSync(dst,Number(mod));
