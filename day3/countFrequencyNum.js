// time complexity O(n)
// space complexity O(1)
function countFreqNum(nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            count++
        }
    }
    return count;
}

console.log(countFreqNum([1,2,2,2,3,4,5],2))