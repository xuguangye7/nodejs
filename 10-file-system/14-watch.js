#!/usr/bin/node
console.log('hello world!')


const fs = require('fs'),
      dst = process.argv[2];

fs.watch(dst.function(evt,file) {
  console.log('%s happed with file:%s',evt,file);
});
