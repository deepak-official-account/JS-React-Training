
function getTwoSmallestNumbers(arr) {
    arr.sort((a, b) => a - b);
    return [arr[0], arr[1]];
}

function sumTwoSmallestNums(arr) {
    if (arr.length == 0) return -1;
    [min1, min2] = getTwoSmallestNumbers();
    return min1 + min2;
}


console.log(sumTwoSmallestNums([6,7,8,9]));
