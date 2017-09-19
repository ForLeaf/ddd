Array.prototype.merge = function(low, mid, high){
	var tmp = new Array(), i = low, j = mid + 1, k = 0;
	while(i <= mid && j <= high){
		if(this[i] <= this[j]){
			tmp[k] = this[i];
			i++;
			k++;
		}else{
			tmp[k] = this[j];
			j++;
			k++;
		}
	}
	while(i <= mid){
		tmp[k] = this[i];
		i++;
		k++;
	}
	while(j <= high){
		tmp[k] = this[j];
		j++;
		k++;
	}
	for(k = 0, i = low; i <= high; k++,i++)
		this[i] = tmp[k];
	
	return this;
}

Array.prototype.mergePass = function(length, n){
	var i; 
	for(i = 0; (i + 2 * length - 1) < n; i = i + 2 * length)
		this.merge(i, i + length - 1, i + 2 * length - 1);
	if(i + length - 1 < n)
		this.merge(i, i + length - 1, n - 1);
	return this;
}

Array.prototype.mergeSort = function(){
	var len = this.length, length;
	for(length = 1; length < len; length = 2 * length)
		this.mergePass(length, len);
	return this;
}

var arr = [1, 6, 9, 4, 11];
var nArr = arr.mergeSort();
console.log(nArr);