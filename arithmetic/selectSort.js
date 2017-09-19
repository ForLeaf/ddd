Array.prototype.selectSort = function(){
	var len = this.length, i, j, k, tmp;
	for(i = 0; i < len; i++){
		k = i;
		for(j = i + 1; j < len; j++){
			if(this[j] < this[k])
				k = j;
		}
		if(k != i){
			tmp = this[k];
			this[k] = this[i];
			this[i] = tmp;
		}
	}
	return this;
}

var arr = [14, 6, 9, 4, 11];
var nArr = arr.selectSort(0,4);
console.log(nArr);