#!/usr/bin/node
console.log('hello world!')

const http = require('http'),
      fs = require('fs');

http.createServer((req,res)=>{
if(req.url ==='./favicon.ico') return;

  var fileName = __dirname + req.url;
  console.log(fileName);
  //res.end(fs.readFileSync(fileName).toString('utf-8'));
  fs.createReadStream(fileName).pipe(res); 
}).listen(8080);
