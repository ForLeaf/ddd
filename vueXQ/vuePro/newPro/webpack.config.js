const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//path 中间件为事件流提供的路径
//timeout 尝试重新连接后断开连接后等待的时间
//reload 设置为true在Webpack卡住时自动重新加载页面
const middleClient = 'webpack-hot-middleware/client?reload=true&path=/__webpack_hmr&timeout=20000';


//指定资源相对于publicPath路径访问 eg:./img/1.jpg 解析为 http://localhost:1616/img/1.jpg
const publicPath = 'http://localhost:1616/';
module.exports = {
	entry: [
		middleClient,
		path.resolve(__dirname,'./app/main.js')
	],
	output: {
		//path: path.resolve(__dirname, './build/'),
		path: __dirname,
		publicPath,
		filename: 'build.js'
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: ['url-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
		new webpack.NoEmitOnErrorsPlugin()
		//new webpack.NoErrorsPlugin()
	]

}