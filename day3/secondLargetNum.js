function findSecondNum(nums) {
    let max1 = Math.max(nums[0], nums[1]);
    let max2 = Math.min(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > max1) {
            max2 = max1;
            max1 = nums[i]
        } else if (nums[i] > max2) {
            max2 = nums[i]
        }
    }
    return max2;
}

console.log(findSecondNum([1, 2, 3, 4, 5]));