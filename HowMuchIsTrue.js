function countNoOfTrue(input) {
    if (input.length === 0) return [];
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === true) {
            count++;
        }
    }
    return count;
};

console.log(countNoOfTrue([true, false, true, false, true]));
console.log(countNoOfTrue([false, false, false, false])); 