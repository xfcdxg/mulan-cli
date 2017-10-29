var resolve = require('path').resolve

module.exports = function(file, from, to, argv) {

  var process = function (file) {
    var name = file.name || file
    var cb   = file.cb

    var fromFile = resolve(from, name)
    var toFile   = resolve(to, name)
    // console.log(fromFile, toFile)
    cat(fromFile).to(toFile)
    sed('-i', /@PROJECT_NAME@/g, argv.name, toFile)

    cb && cb(toFile, argv)
  }

  if (Array.isArray(file)) {
    if (file.length === 0) return
    file.forEach(process)
  } else {
    process(file)
  }
}
