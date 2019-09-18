#!/usr/bin/node
console.log('hello world!')

const stdin  = process.stdin,
      stdout = process.stdout;

stdin.resume();

stdin.on('data',function(data){
    stdout.write(data.toString('utf-8').toUpperCase());
});

stdin.on('end',function(){

});
