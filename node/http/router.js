const express = require('express');

let app = express();
let router = express.Router();

router.use(function (req, res, next) {
	//路由，类似于java中的拦截器功能，在请求到达后台之前，先在这里处理。
	//  some logic here ..
	req.query['name'] = 'tom';
	console.info('进入路由，添加一个参数name=tom');
	//next的作用是将请求转发，这个必须有，如果没有，请求到这就挂起了。
	next();
})

//get('/login') 截取Get请求方式的url中含有/login的请求
router.get('/login', function (req, res, next) {
	console.log('进入路由，添加一个参数age=28');
	req.query['age'] = '28';
	next();
})

//加载路由，这里要放在下面原始监听/login的上面
app.get('/login', router);
app.get('/login', function (req, res) {
	console.log('打印参数', req.query);
	res.end('ok');
})

app.listen(3000);

