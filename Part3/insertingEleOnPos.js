const array = [23, 34, 21, 35, 32, 45, 54, 22, 51, 76, 39];
const position = 3;
const newVal = 22;

console.log(array);

for (let i = array.length - 1; i >= 0; i--) {
    if (i >= position) {
        array[i + 1] = array[i]
        if (i == position) {
            array[i] = newVal;
        };
    };
};

console.log(array);
