import express              from 'express'
import webpack              from 'webpack'
import reload               from 'reload'
import bodyParser           from 'body-parser'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import historyApiFallback   from 'connect-history-api-fallback'
import controllerMiddleware from './middleware/controller'
import webpackConfig        from '../../webpack.config.babel'
import { PORT }             from '../../server.config'
import { DIST_PATH }        from '../../path.config'
import { defineApi }        from './api'

const server =
defineApi(
  express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
)
.use(historyApiFallback())
.use(controllerMiddleware())

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig)
  const { publicPath } = webpackConfig.output
  server.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath }))
        .use(webpackHotMiddleware(compiler, { heartbeat: 1500 }))
} else {
  server.use(express.static(DIST_PATH));
}

reload(server)

server.listen(PORT, () => console.log('server run at ' + PORT))
