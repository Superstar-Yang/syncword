//引入koa组件库
const Koa = require('koa');
//创建Koa实例对象
const app = new Koa();
//引入conf组件
const conf = require('./config')
app.use(ctx => {
    ctx.body = 'hello Syncword';
})
//监听端口
app.listen(conf.server.PORT, () => {
    console.log(`Server run at http://localhost:${conf.server.PORT}`)
})