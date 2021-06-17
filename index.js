const app = require('./koa')
//引入conf组件
const conf = require('./config');
//引入bodyparser中间件
const bodyParser = require('koa-bodyParser')
//引入koa-views配置中间件
//当我们配置ejs模板引擎的时候
// 配置的代码一定要放在router配置代码之前
// 这个比较容易被忽略
const views = require('koa-views');
//使用中间件
app.use(bodyParser())
//使用模板引擎
app.use(views('views', {
    map: {
    html:'ejs'
    }
}))
//引入路由器
const router = require('./router');
app.use(ctx => {
    ctx.body = 'hello Syncword';
})
//监听端口
app.listen(conf.server.PORT, () => {
    console.log(`Server run at http://localhost:${conf.server.PORT}`)
})