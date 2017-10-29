var resolve = require('path').resolve
var log = require('../_/log')
var msg = require('../_/msg')

var configCreator = require('./config')

module.exports = function(from, to, argv) {
  configCreator(resolve(from, 'config'), to, argv)
  log(msg.PROJECT_IS_CREATED)
}
