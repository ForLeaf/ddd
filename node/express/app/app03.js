var express = require('express');
var app = express();
var admin = express();
var path = require('path');

app.all('/',function(req,res,next){
	console.log('Accessing the secret section ...');
	next(); // pass control to the next handler
})

app.use(express.static(path.join(__dirname,'../')));

app.get('/',function(req,res){
	console.log('app get');
	res.send(JSON.stringify(app));
})

app.post('/',function(req,res){
	console.log('app post');
	
	res.send(JSON.stringify({data:1233}));
})
console.log(app)

var port = process.env.port || 3000;

app.listen(3000,function(){
	console.log('server start port ' + port);
});