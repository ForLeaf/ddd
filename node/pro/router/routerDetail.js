var express = require('express');

var parseBook = require('../middlewares/parseBook');

var router = express.Router();

router.get('/book',parseBook,function(req,res){
	var parseBook = req.parseBook;

	console.log('detail',parseBook);

	res.send('detail')
});

module.exports = router;