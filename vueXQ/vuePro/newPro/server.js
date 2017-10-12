var http = require('http');
var path = require('path')
var express = require('express');
var app = express();

app.use(require('morgan')('short'));

/*
	Webpack dev middleware 是 WebPack 的一个中间件。它用于在 Express 中分发需要通过 WebPack 编译的文件。
	单独使用它就可以完成代码的热重载（hot reloading）功能

	特性：

		不会在硬盘中写入文件，完全基于内存实现。
		如果使用 watch 模式监听代码修改，Webpack 会自动编译，如果在 Webpack 编译过程中请求文件，
		Webpack dev middleware 会延迟请求，直到编译完成之后再开始发送编译完成的文件。
*/

/*
	Webpack hot middleware 它通过订阅 Webpack 的编译更新，
	之后通过执行 webpack 的 HMR api 将这些代码模块的更新推送给浏览器端
*/
(function(){
	var webpack = require('webpack');
	var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG: './webpack.config');
	var compiler = webpack(webpackConfig);
	
	app.use(require("webpack-dev-middleware")(compiler,{
		noInfo: true,
		publicPath: webpackConfig.output.publicPath,
		stats: {
			colors: true
		}
	}))
	
	app.use(require('webpack-hot-middleware')(compiler,{
		log: console.log,
		path: '/__webpack_hmr',
		heartbeat: 10 * 1000
	}));
})();

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
})



//app.use(express.static(path.resolve(__dirname,'./')))
// app.get('/multientry', function(req, res){
// 	res.sendFile(__dirname + '/index.html');
// })

if(require.main === module){
	var server = http.createServer(app);
	server.listen(process.env.PORT || 1616,function(){
		console.log("listening on %j", server.address());
	})
}