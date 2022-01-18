const currentTask = process.env.npm_lifecycle_event
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { Server } = require('http');

// for now we are NOT USING webpack dev Server.


let config = {
    entry: {
        "home": './app/js/home.js',
        "overview": './app/js/overview.js',
        "chapter-1": './app/js/chapter-1.js',
        "chapter-2": './app/js/chapter-2.js',
        "common": './app/js/common.js'
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].bundle.js'
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

//if dev
// if (currentTask == 'dev') {
//     // cssConfig.use.unshift('style-loader')
//     config.output = {
//       filename: '[name].bundled.js',
//       path: path.resolve(__dirname, 'app')
//     }
//     config.devServer = {
//       before: function(app, server) {
//         server._watch('./app/**/*.html')
//         server._watch('./app/**/*.json')
//       },
//       contentBase: path.join(__dirname, 'app'),
//       hot: true,
//       port: 3000,
//       host: '0.0.0.0'
//     }
//     config.mode = 'development'
//     config.module.rules.push(
//     {
//         test: /\.s[ac]ss$/i,
//         use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
//     })
// }

//if build
if (currentTask == 'build') {
    config.mode = 'production',
    config.output = {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        path: path.resolve(__dirname, 'docs'),
        // publicPath: "http://report2020:8888/",
        publicPath: "http://localhost/undp-hsr-2021/docs/"
        // publicPath: "https://landtco.github.io/undp--hdr-2020/"
        // publicPath: "http://207.154.194.199/works/undp/hdr2020/"
        
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