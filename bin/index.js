#!/usr/bin/env node
require('shelljs/global')

var msg = require('./_/msg')

require('./init')(
  require('yargs')
  .alias({
    l: 'library',
    n: 'name',
    h: 'help',
    c: 'cover',
    v: 'version',
    V: 'version',
  })
  .boolean(['c'])
  .demand(['n'])
  .default({
    l: 'react'
  })
  .describe({
    n: msg.PROJECT_NAME,
    c: msg.PROJECT_RECOVER
  })
  .argv
)
