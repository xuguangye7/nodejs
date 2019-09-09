#!/usr/bin/node
console.log('hello world!')

const log = console.log;

var wd={
  'name':'wangding',
  'qq':'123456',
  'age':'42'
};

log('name:%s\t age:%d',wd.anme,wd.age);
log("wangding Info:",wd);

log('name:',wd.name);
log(`Age is ${wd.age}`);
