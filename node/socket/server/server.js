function server01(){

	//new Server(httpServer[, options])
	
	
	const express = require('express');
	const app = express();
	const path = require('path');

	app.use(express.static(path.join(__dirname,'../')));

	const server = require('http').createServer(app);

	const io = require('socket.io')(server);

	server.listen(3000,function(){
		console.log('server start, port' + 3000);
	})
	// const io = require('socket.io')(server, {
	//   path: '../client',
	//   serveClient: true,
	//   // below are engine.IO options
	//   pingInterval: 10000,
	//   pingTimeout: 5000,
	//   cookie: false
	// });
	

	io.on('connection',function(socket){
		socket.on('add',function(data){
			console.log(socket.id)
			console.log('io.sockets',io.sockets.adapter.rooms)
			socket.emit('create',{
				status : true,
				type : 'text',
				data : [{title:data}]
			});
		})
	})
	
}

function server02(){

	//new Server(port[, options])
	const server = require('http').createServer(function(req,res){
		res.end('hello world2');
	});
	
	const io = require('socket.io')(3000, {
	  path: '../client',
	  serveClient: true,
	  // below are engine.IO options
	  pingInterval: 10000,
	  pingTimeout: 5000,
	  cookie: false
	});

	io.on('connection',function(socket){
		socket.on('add',function(data){
			socket.emit('create',{
				status : true,
				type : 'text',
				data : data
			});
		})
	})
	//console.log(io)
	// io.close();
	// server.listen(3000,function(){
	// 	console.log('server start, port' + 3000)
	// })
}

function server03(){

	//new Server(options)
	const io = require('socket.io')({
		path: '/test',
		serveClient: false,
	  });
	  
	  // either
	  const server = require('http').createServer(function(req,res){
		  res.end('hello world3');
	  });
	  
	  io.attach(server, {
		pingInterval: 10000,
		pingTimeout: 5000,
		cookie: false
	  });
	  
	  server.listen(3000,function(){
		  console.log('server start, port ' + 3000)
	  });
	  
	  // or
	  /*
	  io.attach(3000, {
		pingInterval: 10000,
		pingTimeout: 5000,
		cookie: false
	  });
	  */
}



server01();