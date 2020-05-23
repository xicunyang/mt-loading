var path = require('path')
let lib = process.env.LIB === 'lib'
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: lib ? './packages/index.js' : './examples.js',
    output: {
        path: path.join(__dirname,lib? './lib' : './dist'),
        // publicPath: lib ? '/lib/' : '/dist/',
        filename: lib ? 'mt-loading.js' : 'build.js',
        library: lib ? 'mt-loading' : '',
        libraryTarget: lib ? 'umd' : 'var',
        umdNamedDefine: !!lib
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
              },
              {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
              },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: "mt-directive.css",////都提到build目录下的css目录中
        //     chunkFilename: "[id].css"
        // })
    ]
}
