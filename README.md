>本项目的git仓库[https://github.com/lznism/xiachufang-vue](https://github.com/lznism/xiachufang-vue)
对应的使用typescript实现的版本地址[https://github.com/lznism/xiachufang-vue-typescript](https://github.com/lznism/xiachufang-vue-typescript)
项目的后台地址[https://github.com/lznism/xcf-server](https://github.com/lznism/xcf-server)
本实例对初学者友好，欢迎star，交流学习，有任何问题都可以issue交流~

#### 技术栈
本项目采用`vue+vuex+vue-router`技术栈，网络请求采用`axios`，为业余前端练手项目，项目框架采用`vue-cli`构建

#### 项目使用
本项目需要首先运行后台，先将整体项目克隆下来，然后运行`npm start`
```bash
git clone https://github.com/lznism/xcf-server.git
```
注意，我这里采用了`nodemon`这个工具，如果没有这个包，需要先安装`npm i nodemon -g`

后端项目默认跑在`3000`端口上，前端本地环境默认跑在`8080`端口上，因此这里涉及到跨域的情况，我在`config/index.js`的`proxyTable`中

#### 项目文件夹介绍
```bash
assets 项目的静态文件目录
components 通用组件目录
router 项目的路由目录
store vuex目录
utils 工具方法目录
views 视图目录
App.vue 项目的根组件
main.js 项目的入口文件
```

#### 项目技术点
1. 引入fastclick，避免300ms延时
2. 采用[rem布局](http://www.cnblogs.com/guolizhi/p/8342569.html)
3. 采用[图片懒加载 vue-lazyload](https://github.com/hilongjw/vue-lazyload)
4. 加入vuex，**本项目中使用vuex只是为了练习，vuex并不是到处都合适**

```
vuex的使用场景
需要实现组件通信
状态共享
```

5. 采用路由懒加载

#### 说明
本项目模仿[下厨房](http://m.xiachufang.com)构建