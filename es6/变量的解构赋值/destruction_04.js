//1 交换变量的值
function des_01() {
	let x = 1;
	let y = 2;
	[x, y] = [y, x];

}

//2 从函数返回多个值
function des_02() {
	function example01() {
		return [1, 2, 4];
	}
	let [a, b, c] = example01();

	function example02() {
		return {
			foo: 1,
			bar: 2
		};
	}
	let { foo, bar } = example02();
}

//3 函数参数的定义
function des_03() {
	// 参数是一组有次序的值
	function f([x, y, z]) {  }
	f([1, 2, 3]);

	// 参数是一组无次序的值
	function f({x, y, z}) {  }
	f({z: 3, y: 2, x: 1});
}

//4 提取JSON数据
function des_04() {
	let jsonData = {
		id: 42,
		status: "OK",
		data: [867, 5309]
	  };
	  
	  let { id, status, data: number } = jsonData;
	  
	  console.log(id, status, number);
	  // 42, "OK", [867, 5309]
}

//5 函数参数的默认值
function des_05() {
	jQuery.ajax = function (url, {
		async = true,
		beforeSend = function () {},
		cache = true,
		complete = function () {},
		crossDomain = false,
		global = true,
	  }) {
		// ... do stuff
	  };
}

//遍历Map 结构
function des_06() {
	var map = new Map();
	map.set('first', 'hello');
	map.set('second', 'world');
	
	for (let [key, value] of map) {
	  console.log(key + " is " + value);
	}
	// first is hello
	// second is world
}

//7 输入模块指定
const { SourceMapConsumer, SourceNode } = require("source-map");

