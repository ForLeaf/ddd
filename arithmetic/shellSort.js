Array.prototype.shellSort = function () {
	var len = this.length,
		gap = parseInt(len / 2);
	var i, j, tmp;
	while (gap > 0) {
		for (i = gap; i < len; i++) {
			tmp = this[i];
			j = i - gap;
			while (j >= 0 && tmp < this[j]) {
				console.log(j)
				this[j + gap] = this[j];
				j = j - gap;
			}
			this[j + gap] = tmp;
		}
		gap = parseInt(gap / 2);
	}
	return this;
}

var arr = [14, 6, 9, 4, 11];
var nArr = arr.shellSort();
console.log(nArr);