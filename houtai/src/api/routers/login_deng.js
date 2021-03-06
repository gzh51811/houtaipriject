const Router = require('koa-router');

const db = require('../db/index_order');
const token = require('../utils/token');

// 创建路由
var router = new Router();
/**
 * ctx
 */
router.post('/', async (ctx, next) => {
    // 解构
    let { username, password } = ctx.request.body;
    // console.log('username:', username);
    password = password * 1;
    //console.log('res2:',res2);
    let res = await db.find('user', { username, password });
    // console.log('use:', { username, password });
    // console.log('r1:', res);
    res = res[0];
    if (res) {
        console.log('res:', res);
        let _token = token.create(username);
        ctx.body = {
            _id: res._id,
            username: res.username,
            niname: res.niname,
            password:res.password,
            note:res.note,
            token:_token
        }
    } else {
        ctx.body = 'no'
    }
   
});
router.get('/', async (ctx, next) => {
    let { username} = ctx.query;
  //  password = password * 1;
    let res1 = await db.find('user', { username });
    // console.log('res1:',res1);
    if (res1 != '') {
        if (res1) {
            console.log('res1:', res1);
            ctx.body = res1;
        }
        else {
            ctx.body = 'no';
        }
    }
});
module.exports = router;