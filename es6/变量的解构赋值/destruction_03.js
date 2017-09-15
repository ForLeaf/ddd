//函数解构
function des_01() {
	let arr = [[1, 2], [3, 5]].map(([a, b]) => a + b);
	console.log(arr);
}
//des_01()

function des_02() {
	function move({ x = 0, y = 0} = {}) {
		console.log([x,y]);
	}
	move({ x: 3, y: 8 });
	move({x: 3}); // [3, 0]
	move({}); // [0, 0]
	move(); 
}
//des_02()

function des_03() {
	function move({ x, y } = { x: 0, y: 0 }) {
		console.log([x, y]);
	}
	move({ x: 3, y: 8 });
	move({x: 3}); // [3, undefined]
	move({}); // [undefined,undefined]
	move(); // [0,0]
}
des_03()

