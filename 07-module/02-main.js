#!/usr/bin/node


const p = require('./02-export-var');

console.dir(module);
console.log(p);


const circle = require('./02-export-function');

console.log('r=10,circle area:%d',circle(10).area());
console.log('r=10,circle circumference:%d',circle(10).circumference());
