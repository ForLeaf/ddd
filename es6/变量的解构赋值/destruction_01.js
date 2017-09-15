//01 数组解构 完全解构
function des_01() {
	let [foo, [[bar], baz]] = [1, [[2], 3]];
	console.log(`foo=${foo} bar=${bar} baz=${baz}`);

	let [, , third] = ['foo', 'bar', 'baz'];
	console.log(`third=${third}`);

	let [x, , y] = [1, 2, 3];
	console.log(`x=${x} y=${y}`);

	let [head, ...tail] = [1, 2, 3, 4];
	console.log(`head=${head} tail=${tail}`);

	//如果解构不成功，变量的值就等于undefined
	let [a, b, ...c] = ['a'];
	console.log(`x=${a} y=${b} z=${c}`);
}
//des_01()

//02 不完全解构
function des_02() {
	let [x, y] = [1, 2, 4];
	console.log(`x=${x} y=${y}`);

	let [a, [b], c] = [1, [2, 3], 4];
	console.log(`a=${a} b=${b} c=${c}`);

	let [w, s] = [1, [2,3]];
	console.log(`w=${w} s=${s}`);
	console.log(`s的类型是否为数组 ${Array.isArray(s)}`)
}
//des_02()

//03 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
function des_03() {
	/*
	let [foo] = 1;
	let [f00] = false;
	let [foo] = NaN;
	let [foo] = undefined;
	let [foo] = null;
	let [foo] = {};
	*/
}

//事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
//function* 见 Generator
function des_04() {
	function* fibs() {
		let aa = 0;
		let bb = 1;
		while (true) {
			yield aa;
			[aa, bb] = [bb, aa + bb];
		}
	}
	let [first, second, third, forth, fifth] = fibs();
	console.log(fifth);
}
//des_04();

//04 默认值  
//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的
function des_05() {
	let [x = 1] = [undefined];
	console.log(x);

	let [y = 1] = [null];
	console.log(y);
}
//des_05()

//如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
function des_06() {
	function f() {
		console.log('aaa');
	}
	let [x = f()] = [1];
}
//des_06();

