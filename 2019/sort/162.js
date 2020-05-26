
var findPeakElement = function(nums) {
    let len = nums.length;
    if (len <= 2) {
        return false;
    }
    let resNum = 0;
    for (let i = 2; i < len - 1; i++) {
        if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
            resNum = i;
            break;
        }
    }
    return resNum;
};

console.log(findPeakElement([1,2,5,8,9,3,1]));