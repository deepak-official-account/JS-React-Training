function calculateMean(arr) {
    var sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return Math.floor(sum / arr.length);
}

function flattenCurve(arr) {
    var mean = calculateMean(arr);
    for (var i = 0; i < arr.length; i++){
        arr[i] = mean;
    }
    console.log(arr);
}

flattenCurve([1, 2, 3, 4, 5]);