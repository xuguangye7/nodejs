#!/usr/bin/node
console.log('hello world!')

const fs  = require('fs'),
      dir = process.argv[2] || __dirname;

console.log(fs.readdirSync(dir));

