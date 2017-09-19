Array.prototype.bInsertSort = function () {
	var len = this.length;
	var i, j, tmp, low, high, mid;
	for (i = 1; i < len; i++) {
		tmp = this[i];
		low = 0;
		high = i - 1;
		while (low <= high) {
			mid = parseInt((low + high) / 2);
			if (tmp < this[mid]) {
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		}
		console.log(high, low);
		for (j = i - 1; j >= high + 1; j--) {
			this[j + 1] = this[j];
		}
		this[j + 1] = tmp;
	}
	return this;
}

var arr = [1, 6, 9, 4, 11];
var nArr = arr.bInsertSort();
console.log(nArr);