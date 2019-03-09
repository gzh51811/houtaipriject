const Router = require('koa-router');

const db = require('../db/index_user');

// 创建路由
var router = new Router();


/**
 * ctx               regtime,
 */
router.post('/', async (ctx, next) => {
    // 解构
    let { username, password, gender, niname, email, note, phonenum} = ctx.request.body;
   // console.log(username, password, gender, niname, email, note, phonenum);

    let data = { username, password, gender, niname, email, note, phonenum}
    password=password*1;
    let res = await db.insert('user', data);
    console.log(res);

    ctx.body = res;

    // 存入数据库

});

// 判断用户名是否存在
router.get('/', async (ctx, next) => {
    let { username } = ctx.query;

    let res = await db.find('user', { username }); console.log(ctx.query, username, res)

    if (res.length > 0) {
        ctx.body = 'no'
    } else {
        ctx.body = 'yes'
    }
});

module.exports = router;