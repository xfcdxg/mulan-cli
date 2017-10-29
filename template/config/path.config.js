import { resolve } from 'path'

export const ROOT_PATH   = resolve(__dirname)
export const SRC_PATH    = resolve(ROOT_PATH, 'app')
export const CLIENT_PATH = resolve(SRC_PATH,  'client')
export const SERVER_PATH = resolve(SRC_PATH,  'server')
export const STATIC_PATH = resolve(ROOT_PATH, 'static')
export const DIST_PATH   = resolve(ROOT_PATH, 'dist')
export const ASSET_PATH  = resolve(ROOT_PATH, 'assets')
export const MODULE_PATH = resolve(ROOT_PATH, 'node_modules')
