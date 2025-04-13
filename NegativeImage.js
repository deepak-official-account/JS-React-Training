function reverseImage(arr) {
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[0].length; j++){
            if (arr[i][j] == 1) arr[i][j] = 0;
            else arr[i][j] = 1;
        }
    }
    console.log(arr);
};

reverseImage([
    [0, 1, 1],
    [0, 0, 0],
    [1, 1, 1,],
    [0, 1, 0]
]);