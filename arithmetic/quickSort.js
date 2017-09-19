Array.prototype.quickSort = function(s,t){
	var i = s, j = t, tmp;
	if(s < t){
		tmp = this[s];
		while(i != j){
			while(j > i && this[j] > tmp){
				j--;
			}
			this[i] = this[j];
			while(i < j && this[i] < tmp){
				i++;
			}
			this[j] = this[i];
		}
		this[i] = tmp;
		this.quickSort(s, i-1);
		this.quickSort(i+1, t);
	}
	return this;
}

/*
quickSort = function (arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var left = [],
		right = [];
	var mid = arr.splice(parseInt(arr.length / 2),1)[0];
	console.log(arr,mid)
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < mid) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([mid], quickSort(right));
}
*/

var arr = [14, 6, 9, 4, 11];
var nArr = arr.quickSort(0,4);
console.log(nArr);