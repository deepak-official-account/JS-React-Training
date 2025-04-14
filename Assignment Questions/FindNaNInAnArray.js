function findNAN(arr) {
    var index = -1;
    for (var i = 0; i < arr.length; i++){
        if (isNaN(arr[i])) index = i;
        break;
    }
    return index;
}

console.log(findNAN([NaN,5,3,2]));