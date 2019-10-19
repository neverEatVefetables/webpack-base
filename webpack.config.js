var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var  {VueLoaderPlugin } = require('vue-loader');

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
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(png|gif|jpg|bmp|jpeg)$/,use:[
                    {loader:'url-loader',
                        options:{limit:9182}
                    }
                  ]
            },
                {
             test: /\.(htm|html)$/i,
            loader: 'html-withimg-loader'
             },
            {
                test:/\.(otf|eot|svg|ttf|woff|woff2)$/,
                use:'url-loader'
            },
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test:/\.(vue)$/,
                use:'vue-loader'
            }

        ]
    },

    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve:{  //来处理vue部分的问题，
        alias:{
            "vue$":'vue/dist/vue.js'
        }
    }
}