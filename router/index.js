
const user = require('./routers/user');

const readDir = require('require-directory');

const Router = require('koa-router')

const app = require('../koa')

const visitor = (obj) => {
    if (obj instanceof Router) {
        app.use(obj.routes())
    }
    console.log(obj)
}
//参数一：固定module
//参数二:要读取的目录
//参数三:可以理解为完成一个的回调
readDir(module, './routers', {visit:visitor})