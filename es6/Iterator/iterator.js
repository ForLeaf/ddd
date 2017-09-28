function iter01() {
	let arr = ['a', 'b', 'c'];
	let iter = arr[Symbol.iterator]();
	console.log(iter.next())
	console.log(iter.next())
	console.log(iter.next())
	console.log(iter.next())
}
//iter01();

//通过遍历器实现指针结构
function iter02() {
	function Obj(value) {
		this.value = value;
		this.next = null;
	}
	Obj.prototype[Symbol.iterator] = function () {
		//console.log('next',next);
		var iterator = {
			next: next
		};
		var current = this;

		function next() {
			if (current) {
				var value = current.value;
				current = current.next;
				return {
					done: false,
					value: value
				};
			} else {
				return {
					done: true
				};
			}
		}
		//console.log('iterator',iterator);
		return iterator;
	}

	var one = new Obj(1);
	var two = new Obj(2);
	var three = new Obj(3);
	one.next = two;
	two.next = three;
	console.log('one.next', one.next)
	// var two = new Obj(2);
	// var three = new Obj(3);

	for (var i of one) {
		console.log(i)
	}
}
//iter02()

function iter03() {
	let obj = {
		data: ['hello', 'world'],
		[Symbol.iterator]() {
			const self = this;
			let index = 0;
			return {
				next() {
					if (index < self.data.length) {
						return {
							value: self.data[index++],
							done: false
						};
					} else {
						return {
							value: undefined,
							done: true
						};
					}
				}
			};
		}
	};
	for (var i of obj) {
		console.log(i)
	}
}
//iter03()

function iter04() {
	NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
	// 或者
	NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];

	[...document.querySelectorAll('div')] // 可以执行了
}

function iter05() {
	var str = 'hello';
	console.log([...str])
}

/**
 * 	entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。对于数组，键名就是索引值；对于 Set，键名与键值相同。Map 结构的 Iterator 接口，默认就是调用entries方法。
	keys() 返回一个遍历器对象，用来遍历所有的键名。
	values() 返回一个遍历器对象，用来遍历所有的键值。
 */

function iter06() {
	let arr = ['a', 'b', 'c'];
	for (let pair of arr.entries()) {
		console.log(pair);
	}
}