const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.jsx",
    devtool: "eval-source-map",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hot: true,
    },

    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
                /*
				options: {
				    presets: [
				        "es-2015", "react"
				    ]
				}
				*/
            },
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            /*
            use: [{
                loader: "style-loader",
            }, {
                loader: "css-loader",
                options: {
                    modules: true,
                }
            }, {
                loader: "postcss-loader"
			}]
			*/
            
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        modules: true,
                    }
                }, {
                    loader: 'postcss-loader',
                }]
            })
			
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('style.css')
    ]
};