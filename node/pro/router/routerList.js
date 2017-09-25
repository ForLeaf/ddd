var bodyParser = require('body-parser');

module.exports = function(app){
	app.get('/login',function(req,res){
		res.send('hello world')
	})
	
}
