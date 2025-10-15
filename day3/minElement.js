// time complexity O(n)
// space complexity O(1)
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;
}
console.log(findMin([3, 2, 1, 6]));