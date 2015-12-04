function merge(a1, a2) {
	var i = 0;
	var j = 0;
	var merged = [];

	while (i < a1.length && j < a2.length) {
		if (a1[i] <= a2[j]) {
			merged.push(a1[i]);
			i++;
		}
		else {
			merged.push(a2[j]);
			j++;
		}
	}

	return merged.concat((a1.length == i) ? a2.slice(j) : a1.slice(i));
}

function mergesort(array) {
	if (array.length == 1)
		return array;

	var half = Math.floor(array.length / 2);

	return merge(	mergesort(array.slice(0, half)),
					mergesort(array.slice(half))	
				);

}