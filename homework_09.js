function ricorsione1 (array) {
	if (array.length == 0)
		return 10;
	return 5 * array[0] + ricorsione1(array.slice(1));
}

function ex_1a(array) {
	return ricorsione1(array);
}

function ex_1b(array) {
	return;
}