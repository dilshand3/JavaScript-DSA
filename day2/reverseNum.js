function reverseNum(num) {
    let rev = 0;
    while (0 < num) {
        let last = num % 10;
        rev = rev * 10 + last;
        num = Math.floor(num / 10);
    }
    return rev;
}

console.log(reverseNum(123));