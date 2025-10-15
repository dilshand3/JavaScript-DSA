//time complexity = O(log10 n)
//space complexity = O(1)
function pelindrome(num) {
    let originalValue = num;
    let rev = 0;
    while (num > 0) {
        let last = num % 10;
        rev = rev * 10 + last;
        num = Math.floor(num / 10);
    }
    return rev === originalValue;
}

console.log(pelindrome(22));