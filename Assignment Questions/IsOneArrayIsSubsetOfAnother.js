function isSubset(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        var isPresent = false;
        for (var j = 0; j < arr2.length; j++) {
            if (arr2[j] == arr1[i]) isPresent = true;
        }
        if (!isPresent) return false;
    }
    return true;
}


console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));