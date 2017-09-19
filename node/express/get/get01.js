var express = require('express');
var app = express();
var router = express.Router();

router.count = 0;

router.get('/users/:user', function (req, res, next) {
	router.count++;
	console.log(router.count);
});

router.param('user', function (req, res, next, id) {
	router.count++;
	res.send({
		count: router.count
	});
	next();
});

app.use(router);
app.listen(3000);