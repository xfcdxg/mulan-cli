// config creator
var log   = require('../_/log')
var msg   = require('../_/msg')
var copy  = require('../_/copy')
var files = require('../_/files')
var configFiles = files.config

module.exports = function(from, to, argv) {
  copy(configFiles, from, to, argv)
  log(msg.BASE_CONFIGS_R_CREATED)
}
