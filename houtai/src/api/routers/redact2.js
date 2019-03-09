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
    let res = await db.find('user', { username });
    //let res = await db.update('user', { "username": username });
    //console.log(data);
    ctx.body = res;
    console.log(res);

    // 存入数据库

})





module.exports = router;