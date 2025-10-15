// time complexity O(n)
// space complexity O(n)
function removeDuplicate(nums){
    let unique = new Set(nums);
    return [...unique]
}

console.log(removeDuplicate([1,2,2,3,3,4,5]))