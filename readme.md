#webpack 
##1.由渐入深
1. npm init -y    创建一个src文件夹下有main.js
2. npm i -D webpack webpack-cli  操作是webpack 文件名 打包默认在dist中;
3. 创建一个webpack.config.js  设置出口和入口 mode:development
4. 写入package.json ,js内写dev:webpack-dev-server  --port 8080 --contentBase /dist --hot
5. 同时安装 npm i -D webpack-dev-server   === nodemon  
6.  npm run  dev
7.  npm i -D html-webpack-plugin  保存在虚拟磁盘中 
8.  配置  webpack.config 中引入 然后插件 plugins[]中 new 一个 参数是对象 写 template;filename;
9.  查看  没问题  注意修改 webpack.config 要重启cmd;
10. 适配各种loader   都需要安装  ；引入测试
11. 编写 webpack.config 中的 module:{  rules:[ { test://,use:['css-loader'] }  ] }
12.  css  {test:/\.css$/,use:['style-loader','css-loader']} 
13.  less  {test:/\.css$/,use:['style-loader','css-loader','less-loader']}
     > Error: Cannot find module 'less'  安装完事 
14.  scss  {test:/\.css$/,use:['style-loader','css-loader','sass-loader']]} 
    > Error: Cannot find module 'node-sass'
15. 图片字体图标处理  url-loader file-loader