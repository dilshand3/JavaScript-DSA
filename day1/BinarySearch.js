//O(log n) this time complexity work in binary search.
//space complexity O(1)

function BinarySearchArr(arr, target) {
    let low = 0;
    let high = arr.length;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

console.log(BinarySearchArr([2,4,5,6,8,9,12,14,16],6));