#!/usr/bin/node
console.log('hello world!')

const log = console.log,
      usr = process.argv[2],
      pwd = process.argv[3];

log('usr:%s,pwd:%s',usr,pwd);

var buffer = new Buffer(usr + ':' +pwd);
log('base64:%s',buffer.toString('base64'));
