function compare(a, b) {
	return typeof a === 'number' ? a - b : a.toString().localeCompare(b.toString());
}

export default function merge(array, comparator) {
	if (Array.isArray(array)) {
		comparator = comparator || compare;
		return sort(array, comparator);
	}
}

function sort(array, comparator) {
	if (array.length <= 1) {
		return array;
	}

	const mid = Math.floor(array.length / 2);
	const left = sort(array.slice(0, mid));
	const right = sort(array.slice(mid));

	return combine(left, right, comparator);
}

function combine(left, right, comparator) {
	const result = [];
	while (left.length > 0 && right.length > 0) {
		if (comparator(left[0], right[0]) < 0) {
			result.push(left.shift());
		}
		else {
			result.push(right.shift());
		}
	}
	while(left.length > 0) {
		result.push(left.shift());
	}
	while(right.length > 0) {
		result.push(right.shift());
	}
	return result;
}