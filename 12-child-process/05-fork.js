#!/usr/bin/node
console.log('hello world!')


const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

var child = cp.fork('./02-child.js');

global.setTimeout(function(){
  child.send('Hello I am your father');
  console.log('father bye');
  process.exit();
},16000)

process.on('message',function(msg){
  console.log('I get it');
})
