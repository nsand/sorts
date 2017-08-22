function compare(a, b) {
	return typeof a === 'number' ? a - b : a.toString().localeCompare(b.toString());
}

export default function bubble(array, comparator) {
	if (Array.isArray(array)) {
		comparator = comparator || compare;
		const length = array.length;
		for (let i = 0; i < length;) {
			if (i < length - 1 && comparator(array[i], array[i + 1]) > 0) {
				let tmp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = tmp;
				i = 0;
				continue;
			}
			++i;
		}
	}
}
