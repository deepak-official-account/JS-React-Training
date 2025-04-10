function isOmniPresent(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        var isPresent = false;
        var currArray = arr[i];
        for (var j = 0; j < currArray.length; j++) {
            if (currArray[j] == num) {
                isPresent = true;
            }
        }
        if (!isPresent) return false;
    }
    return true;
}



console.log(isOmniPresent([[5], [9], [1, 2, 5], [5, 4, 2]], 5));