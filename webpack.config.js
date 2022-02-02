const currentTask = process.env.npm_lifecycle_event
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { Server } = require('http');

// for now we are NOT USING webpack dev Server.


let config = {
    entry: {
        "common": './app/js/common.js'
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].bundle.js'
    }, 
    performance: {
        hints: false,
        maxAssetSize: 1000000
    },
    plugins:[
        // new HtmlWebpackPlugin({
        //     template: './app/index.html',
        //     filename: 'index.html',
        //     // chunks:['home']
        // }),
        // new HtmlWebpackPlugin({
        //     template: './app/about.html',
        //     filename: 'about.html',
        //     // chunks:['home']
        // }),
    ],
    module: {
        rules: [
           {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            exclude: [path.resolve(__dirname, './app/img/')],
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 4096,
                        mimetype: "application/font-woff",
                        outputPath: './../css/fonts/'
                    }
                }
            ]
           }
        ]
    }
}
if (currentTask == 'build') {
    config.mode = 'production',
    config.output = {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        path: path.resolve(__dirname, 'docs'),
        // publicPath: "http://localhost/transitions/docs/",
        publicPath: "https://elisabetperez.github.io/page-transitions/",
        
        
    },
    config.module.rules.push(
    {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        
    },{
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
    })
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            ignoreOrder: false,
        })
    )
}


module.exports = config