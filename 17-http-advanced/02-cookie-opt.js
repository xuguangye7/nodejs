#!/usr/bin/node
console.log('hello world!')



const http = require('http');

http.createServer((req, res) => {
    console.log(req.headers['cookie']);
    console.log(req.headers['cookie'].split(';'));

    res.setHeader('Set-cookie', ['name=wangding; max-age=1000; HttpOnly', 'age=41']);
    res.end('hello world!');

}).listen(8080);
