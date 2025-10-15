// time complexity O(n)
// space complexity O(1)
function containDuplicate(nums) {
    let obj = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (obj.has(nums[i])) {
            return true
        }
        obj.set(nums[i], i);
    }
    return false;
}

console.log(containDuplicate([1, 2, 2]))