var list = require('./routerList');
var detail = require('./routerDetail');

module.exports = function(express,app){
	var router = express.Router();
	
	router.all('*', function (req,res,next) {
		console.log('router connect');
		next();
	})

	router.use(function (req, res, next) {
		console.log('%s %s %s', req.method, req.url, req.path);
		next();
	});

	app.use(router);

	app.use(detail);

	app.get('/',function(req,res){
		res.send('localhost:3000')
	})

	list(app);
}