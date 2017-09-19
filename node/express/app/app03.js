var express = require('express');
var app = express();
var admin = express();


app.all('/',function(req,res,next){
	console.log('Accessing the secret section ...');
	next(); // pass control to the next handler
})

app.all('*', requireAuthentication, loadUser);

app.get('/',function(req,res){
	console.log('app get');
	res.send('app get ');
})

var port = process.env.port || 3000;

app.listen(3000,function(){
	console.log('server start port ' + port);
});