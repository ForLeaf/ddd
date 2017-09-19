var express = require('express');
var app = express();
var admin = express();

//app.on('mount', callback(parent)) 当子程序被挂载到父程序时，mount事件被发射。父程序对象作为参数，传递给回调方法
admin.on('mount', function(parent) {
    console.log('Admin Mounted');
    //console.log(parent); // refers to the parent app
});

admin.get('/', function(req, res) {
    res.send('Admin Homepage');
});

app.use('/admin', admin);

var port = process.env.port || 3000;

app.listen(3000,function(){
	console.log('server start port ' + port);
});