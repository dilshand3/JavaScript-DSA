function bruteForce(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }
    }
    return -1;
}

console.log(bruteForce([1, 2, 3, 4, 5, 6], 5));