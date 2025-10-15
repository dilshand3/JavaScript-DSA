// time complexity O(n)
// space complexity O(1)
function reverseArray(nums) {
    let i = 0, j = nums.length - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++
        j--
    }
    return nums;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));