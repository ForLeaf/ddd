Array.prototype.rBubbleSort = function () {
	var len = this.length;
	var i, j, exchange;
	for (i = 0; i < len; i++) {
		exchange = 0;
		for (j = len - 1; j > i; j--) {
			if (this[j] > this[j - 1]) {
				tmp = this[j];
				this[j] = this[j - 1];
				this[j - 1] = tmp;
				exchange = 1;
			}
		}
		if (!exchange)
			return this;
	}
	return this;
}
var arr = [14, 6, 9, 4, 11];
var nArr = arr.rBubbleSort();
console.log(nArr);