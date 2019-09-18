#!/usr/bin/node
console.log('hello world!')


const Readable = require('stream').Readable;

var r = new Readable();

var c = 'a'.charCodeAt(0);
r._read = () => {
    r.push(String.fromCharCode(c++));
    if(c>'z'.charCodeAt(0)) r.push(null);
};

r.pipe(process.stdout);
