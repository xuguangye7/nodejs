#!/usr/bin/node
console.log('hello world!')

const fs = require('fs'),
      uid = process.argv[2],
      gid = process.argv[3],
      file = process.argv[4];

fs.chownSync(file, Number(uid), Number(gid));
