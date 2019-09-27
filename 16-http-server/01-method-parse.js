#!/usr/bin/node
console.log('hello world!')

const http = require('http'),
      addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

http.get(addr,function(res){
  console.log(res.headers);
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} {res.statusMessage}`);
  res.pipe(process.stdout);
})
