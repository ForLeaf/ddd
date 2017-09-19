var express = require('express');
var app = express();
var admin = express();
var secret = express();


admin.get('/',function(req,res){
	//pp.mountpath属性是子程序挂载的路径模式。
	console.log(admin.mountpath);
	res.send('admin homepage');
})

secret.get('/',function(req,res){
	//pp.mountpath属性是子程序挂载的路径模式。
	console.log(secret.mountpath);
	res.send('secret homepage');
})

admin.use('secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and  '/manager' , on the parent app

app.get('/',function(req,res){
	console.log('app');
	res.send('hello wrold');
})

var port = process.env.port || 3000;

app.listen(3000,function(){
	console.log('server start port ' + port);
});

app.locals.title = 'this is express';
app.locals.url = 'https://github.com/ZhouBox/express_api_4.x_chinese/blob/master/Express_4.x_API_Chinese.md';

//console.log(app.locals)