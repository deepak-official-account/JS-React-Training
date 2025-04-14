function isEven(num) {
    return num% 2==0;
}
function warOfNumbers(arr) {
    var evenSum = 0,oddSum=0;
    for (var i in arr) {
        if (isEven(arr[i])) evenSum += arr[i];
        else oddSum += arr[i];
    }

    if (evenSum > oddSum) return evenSum - oddSum;
    else return oddSum - evenSum;
}

console.log(warOfNumbers([2,4,3,7]));