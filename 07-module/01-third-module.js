#!/usr/bin/node
console.log('hello world!')

const chalk = require('chalk'),
  log = console.log;

log('This is'+ chalk.red('red.'));
log('This is'+ chalk.green('green'));

