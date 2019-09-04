#!/usr/bin/node
console.log('hello world!')

console.log('dirname:',__dirname);
console.log('filename:',__filename);


var file = __dirname + '/data/db.xml';
console.log('file name',file);

var file = __dirname + '\\data\\db.xml';

console.log('file name in window',file);

console.log('111');
