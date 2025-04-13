function numberOFArrays(array) {
    var countArrays = 0;
    for (var i = 0; i < array.length;i++) {
        // console.log(i);
        if (Array.isArray(array[i])) countArrays++;
    }
    console.log(countArrays);
}

numberOFArrays([[1, 2, 4],[5,4,3]]);