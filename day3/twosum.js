// time complexity O(n)
// space complexity O(n)
function twoSum(nums, target) {
    let obj = new Map();
    for (let i = 0; i < nums.length; i++) {
        let element = target - nums[i];
        if (obj.has(element)) {
            return [obj.get(element), i];
        }
        obj.set(nums[i], i)
    }
}

console.log(twoSum([1, 2, 3, 4, 5], 5));