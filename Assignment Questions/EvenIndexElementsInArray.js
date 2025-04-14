function evenLast(arr) {
    var sum = 0;
    arr.forEach((x,i) => {
        if (i % 2 == 0) sum += x;
    });

    return arr[arr.length - 1] * sum;
}

console.log(evenLast([2,3,4,5]));