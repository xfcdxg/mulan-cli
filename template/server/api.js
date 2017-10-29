import { merge, replace } from 'ramda'
import { unescape } from 'querystring'

const g = s => `/api${ s }`

export const defineApi = server => (
  server
  // 测试
  .get(g('/test'), (req, res) => {
    res.json({ name: 'hello', val: 'world' })
  })  
)
