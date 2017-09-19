var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.resolve(path.join(__dirname + '../'))));

/**
 * 	路由HTTP请求；具体可以看app.METHOD和app.param这两个例子。
	配置中间件；具体请看app.route。
	渲染HTML视图；具体请看app.render。
	注册模板引擎；具体请看app.engine。
 */
app.get('/',function(req,res){
	res.send('/')
})
app.get('/login',function(req,res){
	res.send('/login');
})

app.all('*',function(req,res,next){
	next();
})
