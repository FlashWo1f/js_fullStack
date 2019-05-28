const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader'
                    ]
                })
            },
            {
                test: /\.js$/,
                // 只包括自己写的src目录下的.js
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            log$: path.resolve(__dirname, 'src/utils/log.js')
        },
        extensions: ['.js', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 将template 里的编译成 filename里的文件
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('[name].css')
    ]
}