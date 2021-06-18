//引入koa路由管理
const KoaRouter = require('koa-router');
//创建路由实例
const router = new KoaRouter();
//引入email组件
const uEmail = require('../../utils/email');
//引入随机数组件
const numRandom = require('number-random');
//邮箱
const Mailcode = require('../../db/email-code')

//login
router.get('/email/code', async ctx => {
    //取到email
    const email = ctx.query.email;
    if (email) {
        const code = numRandom(100000,999999)
        uEmail.send(email, code);
        ctx.body = '已发送'
        //保存数据到数据库
        let doc = new Mailcode({
            code,
            mail:email
        })
        await doc.save().then(res => {
            console.log('邮箱验证码保存成功')
        }).catch(error => {
            console.log(error)
        })
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