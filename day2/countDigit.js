function countDigit(num) {
    num = num.toString();
    let count = 0;
    for (let i = 1; i <= num.length; i++) {
        count++
    }
    return count;
}

console.log(countDigit(12345));
