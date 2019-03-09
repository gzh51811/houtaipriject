
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
var router = new Router();

// 引入页面路由
const registryRouter = require('./list');
const dactRouter = require('./add');
const redactRouter = require('./redact');
const redactRouter2 = require('./redact2');
const redactRouter3 = require('./redact3');
const sortRouter = require('./sort');
const loginRouter1 = require('./login_deng');
const order1 = require('./order_list');
const tokenverifyRouter = require('./tokenverify');
const loginRouter = require('./login');
const deleteRouter = require('./delete');
const order2 = require('./order');
const order3 = require('./find');
const registryRouter1 = require('./registry');
router.use(koaBody({
    // 支持formdata
    multipart: true,

    // 文件支持
    formidable: {
        // 指定保存路径
        uploadDir: './uploads',
        keepExtensions: true,
        // 改文件名
        onFileBegin(filename, file) {
            // filename: 上传文件的原始名
            // file:文件信息对象
            //   * path:

            // file.path = './uploads/'+filename
        }
    }
}));

router.use('/list', registryRouter.routes());
router.use('/add', dactRouter.routes());
router.use('/redact', redactRouter.routes());
router.use('/redact2', redactRouter2.routes());
router.use('/redact3', redactRouter3.routes());
router.use('/sort', sortRouter.routes());
router.use('/login_deng', loginRouter1.routes());
router.use('/order_list', order1.routes());
router.use('/tokenverify', tokenverifyRouter.routes());
router.use('/login', loginRouter.routes());
router.use('/delete', deleteRouter.routes());
router.use('/order', order2.routes());
router.use('/find', order3.routes());
router.use('/registry', registryRouter1.routes());
module.exports = router;