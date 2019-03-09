const Router = require('koa-router');
const db = require('../db/index_user');
// 创建路由
var router = new Router();
/**
 * ctx
 */
router.post('/', async (ctx, next) => {
    let res = await db.find('user');
    if (res) {
        ctx.body = {
            arr: res
        }
    } else {
        ctx.body = {
            code: 100,
            msg: 'fail'
        }
    }
});
//:del
router.get('/', async (ctx, next) => {
    let { username } = ctx.request.body;
    // let data = { username: Date.now() }
    // let { username, password, gender, niname, email, note, phonenum } = ctx.request.body;
    // let data = { username: Date.now() };
    console.log(data);
    let res1 = await db.delete('user', { username });
    console.log(username);

    ctx.body = res1;
});

module.exports = router;
