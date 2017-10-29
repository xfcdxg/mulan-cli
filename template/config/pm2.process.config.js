
var env = process.env.NODE_ENV || 'development'

module.exports = (
  {
    apps: [{
      name           : "@PROJECT_NAME@",
      script         : "./server/",
      watch          : true,
      interpreter    : './node_modules/.bin/babel-node',
      ignore_watch   : ['/src', '.happypack', 'static'],
      env            : { "NODE_ENV": env },
      log_date_format: 'MM-DD HH:mm:ss'
    }]
  }
)
