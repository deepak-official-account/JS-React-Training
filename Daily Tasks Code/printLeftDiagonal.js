var array = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];


function printLeftDiagonal(arr) {
    if (!!arr) {
        var rows = arr.length, columns = arr[0].length;
        if (rows != columns) {

            console.log("Not a square matrix");
            return;
        } else {
            for (let i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    if (i == j) {
                        console.log(arr[i][j]);
                    }
                }
            }
        }
    }else{
        console.log("Invalid input");
        return;
    }
};


printLeftDiagonal(array);
printLeftDiagonal(null);
printLeftDiagonal(undefined);