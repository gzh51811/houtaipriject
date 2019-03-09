const Router = require('koa-router');
const db = require('../db/index_user');
// 创建路由
var router = new Router();
/**
 * ctx               regtime,
 */

var router = new Router();


/**
 * ctx               regtime,
 */
// router.post('/', async (ctx, next) => {
//     // 解构
//     let { username } = ctx.request.body;
//     // console.log(username, password, gender, niname, email, note, phonenum);

//     let data = { username, niname, password, email, phonenum, note, gender };
//     // password=password*1;
//     let res = await db.update('user', { username, data });
//     console.log(res);

//     ctx.body = res;

//     // 存入数据库

// });

router.post('/', async (ctx, next) => {
    // 解构
    let { username, password, gender, niname, email, note, phonenum } = ctx.request.body;
    // console.log(username, password, gender, niname, email, note, phonenum);

    let data = { username, password, gender, niname, email, note, phonenum }
    // password = password * 1;
    let res = await db.update('user', data);
    console.log(res);

    ctx.body = res;

    // 存入数据库

});




module.exports = router;