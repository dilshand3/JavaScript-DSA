// time complexity O(n)
// space complexity O(1)
function isIncreasing(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            return false;
        }
    }
    return true;
}
function isDecreasing(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            return false;
        }
    }
    return true;
}
function isSortedArr(nums) {
    return isIncreasing(nums) || isDecreasing(nums);
}

console.log(isSortedArr([1, 2, 3, 4, 5]));