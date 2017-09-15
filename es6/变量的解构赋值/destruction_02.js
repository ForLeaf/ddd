
//解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

//01 对象的解构赋值
//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
function des_01() {
	let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
	let { baz } = {};
	console.log(`foo=${foo} bar=${bar} baz=${baz}`);
}
//des_01()

//02 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
function des_02() {
	let { foo: baz } = { foo: 'aaa', baz: 'ccc' };
	//console.log(`foo = ${foo}`); //error foo not defined
	console.log(`baz=${baz}`);
}
//des_02()
//foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo

//03 嵌套赋值
function des_03() {
	let obj = {};
	let arr = [];
	//()避免 JavaScript 将其解释为代码块
	({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
	console.log(obj);
	console.log(arr);
}
//des_03()

//如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
function des_04() {
	let { foo: { bar } } = { baz: 'baz' };//TypeError Cannot match against 'undefined' or 'null'
}
//des_04();

//04 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
function des_05() {
	let { log, sin, cos } = Math;
}

//数组本质是特殊的对象，因此可以对数组进行对象属性的解构
function des_06() {
	let arr = [1, 2, 3];
	let { 0: first, [arr.length - 1]: last } = arr;
	console.log(first);
	console.log(last);
}
//des_06()

//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
function des_07() {
	const [a, b, c, d, e] = 'hello';
	console.log(`a=${a} e=${e}`);
}
//des_07()



