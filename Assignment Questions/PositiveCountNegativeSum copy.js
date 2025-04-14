function countPosNegSum(arr) {
    if (arr.length == 0) return [];
    var count = 0, sum = 0;
    for (var i in arr) {
        if (i > 0) count++;
        else sum += i;
    }
    return [count, sum];
}

console.log(countPosNegSum([1,2,-3,4,-5,6,-7]));