function isScalable(arr) {

    for (var i = 0; i < arr.length-1; i++){
        if (Math.abs(arr[i] - arr[i + 1] > 5)) return false;
    }
    return true;
}

console.log(isScalable([1,2,4,6,7,8]));