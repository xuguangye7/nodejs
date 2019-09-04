#!/usr/bin/node
console.log('hello world!')

var fn=process.argv[2];
console.log(fn,'=',eval(fn));
