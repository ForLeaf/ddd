var express = require('express');

var app = express();

var http = require('http').createServer(app);

http.listen(3000,function(){
	console.log('server start,port' + 3000);
});

var path = require('path');

app.use(express.static(path.join(__dirname,'../')));

//router.route();
var router = require('../router/Router');
router(express,app);