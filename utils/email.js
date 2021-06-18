//引入node发送邮箱的中间件
const nodemailer = require('nodemailer');
//自己的邮箱账号和授权码
const self = { user: '1613912671@qq.com', pass: 'chgjqgpekqjmdihe' };
module.exports = {
    async send(address,code) {
        let transporter = nodemailer.createTransport({  
            host: 'smtp.qq.com',//这里是qq邮箱
            port: 465,
            secure:true,
            auth: {
                //发件人邮箱账号
                user: self.user,
                //发件人邮箱的授权码这里可以通过qq邮箱获取，并且不唯一
                pass: self.pass //授权码,通过QQ获取                     
                }  
        });
        let info = transporter.sendMail({
            //发件人邮箱
            from: '"hello meiler.js "<1613912671@qq.com>', // 发送者  
            //收件人邮箱
            to: address || '992640940@qq.com', // 接受者,可以同时发送多个,以逗号隔开
            subject: '您的邮箱验证码是：'+ code, // 标题  
            //内容
            text: '您的邮箱验证码是：' + code, // 文本
            //这里可以添加HTML标签
            html: '您的邮箱验证码是：' + code  //html body
          });  
    }
}

