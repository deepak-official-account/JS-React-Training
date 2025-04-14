function trace(arr) {
    var rows = arr.length, columns = arr[0].length;
    if (rows != columns) return "Not a Valid Square Matrix";
    var sum = 0;
    for (var i = 0; i < rows; i++){
        for (var j = 0; j < columns; j++){
            if (i == j) sum += arr[i][j];
        }
    }
    console.log(sum);
}

trace([[1,4], [4, 1]]);