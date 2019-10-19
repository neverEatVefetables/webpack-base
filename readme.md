#webpack 
# 犹豫就会败北
##1.由渐入深
1. npm init -y    创建一个src文件夹下有main.js
2. npm i -D webpack webpack-cli  操作是webpack 文件名 打包默认在dist中;
3. 创建一个webpack.config.js  设置出口和入口 mode:development
4. 写入package.json ,js内写dev:webpack-dev-server  --port 8080 --contentBase /dist --hot
5. 同时安装 npm i -D webpack-dev-server   === nodemon  
6.  npm run  dev
7.  npm i -D html-webpack-plugin  保存在虚拟磁盘中 ,根目录下看不见
8.  配置  webpack.config 中引入 然后插件 plugins[]中 new 一个 参数是对象 写 template;filename;
9.  查看  没问题  注意修改 webpack.config 要重启cmd;
10. 适配各种loader   都需要安装  ；引入测试
11. 编写 webpack.config 中的 module:{  rules:[ { test://,use:['css-loader'] }  ] }
12.  css  {test:/\.css$/,use:['style-loader','css-loader']} 
13.  less  {test:/\.css$/,use:['style-loader','css-loader','less-loader']}
     > Error: Cannot find module 'less'  安装完事 
14.  scss  {test:/\.css$/,use:['style-loader','css-loader','sass-loader']]} 
    > Error: Cannot find module 'node-sass'
15. 图片处理  url-loader file-loader  use  url-loader   bg 成功 
> html  使用 img  安装 html-withimg-loader 使用：rules:[{test:,use: }]
16. 字体图标处理 url-loader file-loader
17. js   babel-loader  
    > 直接查 webpack 4.0 babel 使用 然后创建一个.babelrc文件
   安装：
    1. babel-loader @babel/core @babel/preset-env 
    2. @babel/plugin-proposal-class-properties  babel-plugin-component
    3. 设置 ,babelrc 
     >{ "plugins": [ 
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["component",{"libraryName": "mint-ui", "style": true}]
      ] }   mint-ui 的设置
    4. rules 编写  test  exclude use
18. vue的使用 
        1. 安装 引入   vue不完整   vue.router  可以指定路径不推荐 使用优雅型
        2. 优雅型 plugins同级 resolve:{  //优雅一点来处理vue部分的问题，也可以在路径上直接修改；
                       alias:{
                           "vue$":'vue/dist/vue.js'
                       }
                   }
         3.  router .vue  的使用  安装vue-loader 是插件要引入，New,loader配置  设置路由
##2.github与码云的基本使用 
1. 搭配webstorm  git插件 
2. 开源协议了解一下license; 
   1. git init
   2. git status git
   3. git add .
   4. git status
   5. git commit -m "my project"
3. 初次设置 remote add origin https://github.com/mw138/TestGit.git（https://github.com/mw138/TestGit.git为你在github或码云上创建项目的地址）
4. 初次设置 git push -u origin master  可视化工具commit/git push 