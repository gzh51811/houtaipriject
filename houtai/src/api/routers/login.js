const Router = require('koa-router');

const db = require('../db/index_user');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/', async (ctx, next) => {
    // 解构
    let { username, password, mdl, gender, niname, email, note, phonenum } = ctx.request.body;
    let res = await db.find('user', { username, password, gender, niname, email, note, phonenum });
    res = res[0];

    if (res) {
        ctx.body = {
            _id: res._id,
            username: res.username,
            gender: res.gender,
            regtime: res.regtime,
            niname: res._niname,
            email: res._email,
            phonenum: res._phonenum,
            note: res._email,

        }
    } else {
        ctx.body = {
            code: 100,
            msg: 'fail'
        }
    }
    // 存入数据库

})

module.exports = router;