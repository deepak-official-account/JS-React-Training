function printPyramidArray(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        var temp = [];
        for (let j = 1; j <= i; j++) {

            temp.push(i);
        }
        result.push(temp);
    }

    console.log(result);

}

printPyramidArray(5);