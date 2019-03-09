const Router = require('koa-router');
const db = require('../db/index_user');
// 创建路由
var router = new Router();
/**
 * ctx               regtime,
 */

router.post('/', async (ctx, next) => {
    // 解构request.body;
    let { username } = ctx.request.body;
    console.log(username);
    // let data = { username: Date.now() }
    // let { username, password, gender, niname, email, note, phonenum } = ctx.request.body;
    // let data = { username: Date.now() };

    let res = await db.delete('user', { "username": username });
    //console.log(data);

    ctx.body = res;
    console.log(res);

    // 存入数据库

})

// 判断用户名是否存在
// router.get('/ddd', async (ctx, next) => {
//     let { username } = ctx.query;

//     let res = await db.find('user', { username }); console.log(ctx.query, username, res)

//     if (res.length > 0) {
//         ctx.body = 'no'
//     } else {
//         ctx.body = 'yes'
//     }
// });

module.exports = router;