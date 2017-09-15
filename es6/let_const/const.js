//01 const声明一个只读的常量。一旦声明，常量的值就不能改变
//const一旦声明变量，就必须立即初始化，不能留到以后赋值
function const_01() {
	const PI; //SyntaxError: Missing initializer in const declaration
}
//const_01()

//02 const的作用域与let命令相同：只在声明所在的块级作用域内有效。

