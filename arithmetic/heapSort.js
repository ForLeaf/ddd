Array.prototype.createHeap = function(low, high){
	var i = low, j = 2 * i, tmp = this[i];
	while(j <= high){
		if(j < high && this[j] < this[j+1])
			j++;
		if(tmp < this[j]){
			this[i] = this[j];
			i = j;
			j = 2 * i;
		}else break;
	}
	this[i] = tmp;
	return this;
}
Array.prototype.heapSort = function(){
	var i, tmp, len = this.length - 1;
	for(i = parseInt(len/2); i >= 1; i--)
		this.createHeap(i, len);
	for(i = len; i >= 2; i--){
		tmp = this[1];
		this[1] = this[i];
		this[i] = tmp;
		this.createHeap(1, i - 1);
	}
	return this;
}

var arr = [1, 6, 9, 4, 11];
var nArr = arr.heapSort();
console.log(nArr);