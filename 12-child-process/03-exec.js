#!/usr/bin/node
console.log('hello world!')


const cp = require('child_process');

cp.exec('cat 03-exec.js',function(err,out,error){
  if(err){
    console.error(error);
    process.exit(1);
  }
  console.log(out);
})
