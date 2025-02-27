var findMaxLength = function(nums) {
	const hash = new Map([[0, -1]]);
	let result = sum = 0;

	nums.forEach((num, index) => {
		sum += num === 0 ? -1 : 1;
		hash.has(sum) 
			? result = Math.max(result, index - hash.get(sum))
			: hash.set(sum, index);
	});

	return result;
};