function removeElement(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            nums.splice(i, 1);
            i--
        }
    }
    return nums.length;
}

console.log(removeElement([1, 2, 3, 4, 5, 3], 3));