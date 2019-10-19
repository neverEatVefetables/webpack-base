var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    entry:'./src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename:'[name].bundle.js'
    },
    mode:'development',
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
        ]
    },

    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ]
}