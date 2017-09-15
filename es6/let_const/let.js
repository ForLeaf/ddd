
//01 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6
function let_01() {
	let arr = [];
	for (let i = 0; i < 10; i++){
		arr[i] = function () {
			console.log(i)
		}
	}
	arr[6]();
}
//let_01();

//02 for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
function let_02() {
	for (let i = 0; i < 3; i++) {
		let i = 'ab';
		console.log(i);	
	}
}
//let_02();

//03 let 不存在变量提升

//04 “暂时性死区”（temporal dead zone，简称 TDZ）在代码块内，使用let命令声明变量之前，该变量都是不可用的
//let 变量不存在时报错 ReferenceError tmp is not defined
function let_03() {
	if (true) {
		//TDZ开始
		// tmp = 'abc';
		// console.log(tmp);
		let tmp;
		console.log(typeof tmp);
		tmp = 123;
		console.log(typeof tmp);
	}
}
//let_03();

//05 let不允许在相同作用域内，重复声明同一个变量

function let_04() {
	var tmp = new Date();
	function f() {
		console.log(tmp);
		//var 存在变量 tmp 声明提前 导致 tmp 的值为undefined
		if (false) {
			var tmp = 'hello world';
		}
	}
	f();
}
//let_04()

function let_05() {
	//变量泄露
	var s = 'hello';
	for (var i = 0; i < s.length; i++){
		console.log(s[i]);
	}
	console.log(i)
}
//let_05();

//06 let不允许在相同作用域内，重复声明同一个变量

//07 ES6 引入了块级作用域，明确允许在块级作用域之中声明函数

//08 do表达式
function let_06() {
	{
		let t = f();
		t = t * t + 1;

		function f() {
			return 1;
		}
		return t;
	};
	
}
//let_06()






