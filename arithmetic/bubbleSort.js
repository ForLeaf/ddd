Array.prototype.bubbleSort = function () {
	var len = this.length;
	var i, j, tmp;
	for (i = 0; i < len; i++) {
		for (j = len - 1; j > i; j--) {
			if (this[j] > this[j - 1]) {
				tmp = this[j - 1];
				this[j - 1] = this[j];
				this[j] = tmp;
			}
		}
	}
	return this;
}

var arr = [14, 6, 9, 4, 11];
var nArr = arr.bubbleSort();
console.log(nArr);