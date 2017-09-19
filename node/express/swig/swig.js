var express = require('express');
var swig = require('swig');
var path = require('path');


var app = express();
//app.set('port', process.env.PORT || 3000);
var port = process.env.PORT || 4000;

//console.log('process.env',process.env)

//设置swig页面不缓存
swig.setDefaults({
	cache: false
})

app.set('view cache', false);

app.set('views', './views/pages/');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);


app.listen(port);

console.log('server is started at http://localhost:' + port);

//index page
app.get('/', function (req, res) {
	res.render('index', {
		title: '首页 ',
		content: 'hello swig'
	})
})
