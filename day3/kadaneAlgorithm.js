// total subArray in an array = (n * (n+1))/2
function maxSubArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let subArray = [];
            for (let k = i; k <= j; k++) {
                subArray.push(nums[k]);
            }
            console.log(subArray);
        }
    }
}

maxSubArray([3, -4, 5]);