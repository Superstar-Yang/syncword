//引入koa路由管理
const KoaRouter = require('koa-router');
//创建路由实例
const router = new KoaRouter();
//引入email组件
const uEmail = require('../../utils/email');
//引入随机数组件
const numRandom = require('number-random');
//login
router.get('/email/code', async ctx => {
    //取到email
    const email = ctx.query.email;
    if (email) {
        uEmail.send(email, numRandom(100000,999999));
        ctx.body = '已发送'
    } else {
        ctx.body = `email 不存在`
    }
})

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