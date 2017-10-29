module.exports = {
  // 基础配置文件
  config: [
    '.gitignore',
    'package.json',
    'path.config.js',
    'pm2.process.config.js',
    {
      name: '.babelrc',
      cb: function(file, argv) {
        return sed(
          '-i',
          /@LIBRARY@/g,
          argv.l === 'react' ? ', "react"' : '',
          file
        )
      }
    },
  ],
}
