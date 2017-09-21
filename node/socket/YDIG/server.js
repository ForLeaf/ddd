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
		obj.guid = socket.id;
		obj.name = data;
		userList.push(obj);
		socket.emit('sendGuid',socket.id)
	})
	socket.on('gameStart',function(data){
		var obj = {};
		obj.guid = socket.id;
		obj.name = data;
		getReadyUser.push(obj);

		if(getReadyUser.length >= 2){
			var num = parseInt(Math.random() * getReadyUser.length);
			var guid = getReadyUser[num].guid;

			for(var item of getReadyUser){
				io.sockets.sockets[item.guid].emit('beginGame',{
					status : true,
					guid : guid
				})
			}

			var timeout = 30;
			var timer = setInterval(function(){
				timeout--;
				for(var item of getReadyUser){
					io.sockets.sockets[item.guid].emit('time',timeout)
				}
				if(timeout <= 0){
					clearInterval(timer);
					for(var item of getReadyUser){
						io.sockets.sockets[item.guid].emit('timeout','')
					}
					getReadyUser = [];
				}
			},1000)
		}
	})
	socket.on('drawStart',function(data){
		
		for(var item of getReadyUser){
			io.sockets.sockets[item.guid].emit('getDrawStart',data)
		}
	})
	socket.on('draw',function(data){
		for(var item of getReadyUser){
			io.sockets.sockets[item.guid].emit('getDraw',data)
		}
	})
	socket.on('clearDraw',function(data){
		for(var item of getReadyUser){
			io.sockets.sockets[item.guid].emit('drawClear','')
		}
	})
})
