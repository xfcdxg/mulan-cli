var creator = require('./creator')
var msg = require('./_/msg')
var log = require('./_/log')

var init = function(argv) {
  var projectPath = `./${ argv.name }`

  if (test('-e', projectPath)) {
    if (argv.cover) {
      log(msg.PROJECT_IS_REMOVED)
      rm('-rf', projectPath)
    } else {
      log(msg.PROJECT_IS_EXISTS)
      return
    }
  }
  mkdir(projectPath)
  cd(projectPath)
  mkdir(['./app', './app/client', './app/server', './webpack'])
  creator(require('../template')(), pwd().toString(), argv)
}


module.exports = init
