Array.prototype.insertSort = function () {
	var len = this.length;
	var i, j, tmp;
	for (i = 1; i < len; i++) {
		tmp = this[i];
		j = i - 1;
		while (j > 0 && tmp < this[j]) {
			//console.log('j',this[j])
			this[j + 1] = this[j];
			j--;
		}
		this[j + 1] = tmp;
	}
	return this;
}

var arr = [1, 6, 9, 4, 11];
var nArr = arr.insertSort();
console.log(nArr);