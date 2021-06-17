//引入koa路由管理
const KoaRouter = require('koa-router');
//创建路由实例
const router = new KoaRouter();
//login
router.post('/login', async ctx => {
    ctx.body = 'login.api'
})
//register
router.get('/register', async ctx => {
    //把刚才的register.html渲染出来
   await ctx.render('register', {
        name:'注册页面'
    })
})

router.post('/register', async ctx => {
    ctx.body = ctx.request.body;
});
//loginout
router.get('/loginout', async ctx => {
    ctx.body = 'loginout.api'
})
module.exports = router;