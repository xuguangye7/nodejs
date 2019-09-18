#!/usr/bin/node
console.log('hello world!')

const Readable = require('stream').Readable;

var r = new Readable;
r.push('hello\n');
r.push('world!');
r.push(null);

r.pipe(process.stdout);
