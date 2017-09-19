var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = process.env.port || 3000;
server.listen(port,function(){
	console.log('sever start, port' + port);
});

app.use(express.static(path.join(__dirname,'../')));

app.get('/',function(req,res){
	res.send('link success');
})	

var userList = [];
var getReadyUser = [];

io.on('connection',function(socket){
	socket.on('login',function(data){
		var obj = {};
		obj[data] = socket.id;
		userList.push(obj);
		socket.emit('sendGuid',socket.id)
	})
	socket.on('gameStart',function(data){
		getReadyUser.push(data);

		console.log(io.sockets)
		if(getReadyUser.length >= 2){
			var num = parseInt(Math.random() * getReadyUser.length);
			var guid;
			for(var obj of userList){
				if(obj[getReadyUser[num]]){
					guid = obj[getReadyUser[num]];
				}
			}
			
			io.emit('beginGame',{
				status : true,
				guid : guid

			})

			var timeout = 30;
			var timer = setInterval(function(){
				timeout--;
				io.emit('time',timeout);
				if(timeout <= 0){
					clearInterval(timer);
					io.emit('timeout','');
					getReadyUser = [];
				}
			},1000)
		}
	})
	socket.on('drawStart',function(data){
		//console.log('drawStart',data);
		io.emit("getDrawStart",data);
	})
	socket.on('draw',function(data){
		//console.log('draw',data);
		io.emit("getDraw",data); 
	})
	socket.on('clearDraw',function(data){
		io.emit('drawClear','');
	})
})
