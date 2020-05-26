function quickSort(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let midIndex = Math.floor(nums.length / 2);
    let mid = nums.splice(midIndex, 1)[0];
    let left = [];
    let right = [];
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        console.log(i);
        if (nums[i] < mid) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return quickSort(left).concat([mid], quickSort(right));
}

console.log(quickSort([1,2,1]));
