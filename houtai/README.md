# 项目名称：

后台管理系统

## 项目组员：

凌小连&卜锦梅&卢连敏

## 使用技术：

```
 UI框架 : layUI
 后端语言 : NodeJS
 数据库 : MongoDB
```

## 演示地址：

用户名：admir 密码：123456 会员等级：超级会员

用户名：admir1密码：123123 会员等级：普通会员（用户管理会隐藏）

http://120.79.21.170:1811

### GitHub地址：

https://github.com/gzh51811/houtaiproject.git

## 项目文件结构：

```
│  index.html      //登陆页
│  package-lock.json
│  package.json
│  
├─img
│      demo-1-bg.jpg
│      login_ico.png
│      
├─js    //js
└─src
    │  server.js   
    │  
    ├─api
    │  │  goods.csv         //订单列表表
    │  │  list.csv              //商品列表表
    │  │  user.csv          //用户信息表
    │  │  
    │  ├─db
    │  │      assistant.js                //数据库操作（商品）
    │  │      index_order.js        //数据库操作（登陆,订单）
    │  │      index_user.js             //数据库操作（用户）
    │  │      
    │  ├─routers
    │  │      add.js             //商品添加路由
    │  │      delete.js
    │  │      find.js
    │  │      index.js            //主路由
    │  │      list.js             //商品列表路由
    │  │      login.js   
    │  │      login_deng.js
    │  │      order.js
    │  │      order_list.js
    │  │      redact.js               //商品编辑路由
    │  │      registry.js
    │  │      sort.js         //商品分类路由
    │  │      tokenverify.js
    │  │      
    │  └─utils
    │          token.js
    │          
    ├─css
    │  │  userlist.css     //自定义css
    │  │  
    │  └─layui-v2.4.5         //layui框架
    │    
    │                      
    ├─html
    │      add.html                //商品添加页
    │      cen.html           //订单统计
    │      index-edit.html  //编辑用户
    │      index2.html   //添加用户
    │      indexuser.html  //用户列表
    │      list.html               //商品列表页
    │      order.html     //订单列表
    │      redact.html            //商品编辑页
    │      sort.html          //商品分类页
    │      
    ├─images  //图片
    │ 
    │          
    ├─img
    │      check_u171.png
    │      ...png
    │      
    └─js
            add.js        //添加页js
            common.js
            jq22.js
            jquery-1.10.1.min.js
            redact.js     //编辑页js
```



## 模块划分：

- ```
  - 数据可视化
  
    ​       数据统计
  
  - 商品管理（负责人：卢连敏）
  
    ​       商品列表展示
  
  ​          基本信息展示
  
  ​         操作 ：编辑 、 添加 、  删除、
  
  ​              商品添加
  
  ​              商品编辑
  
  ​              商品分类
  
  ​              分类编辑
  
  ​              删除
  
  - 用户管理（负责人：卜锦梅）
  
  ​              用户列表
  
  ​                  		添加
  
  ​                  	 	删除
  
  ​                 	 	编辑
  
  ​             用户添加
  
  - 登陆、订单管理（负责人：凌小连）
  
  ​             登陆：
  
  ​                    管理员登陆
  
  ​                    普通用户登陆
  
  ​            订单管理
  
  ​                订单列表
  
  ​                    修改订单状态
  
  ​                    删除订单
  
  
  ```

  

