function getMAx(arr) {
    var max = -9999;
    arr.forEach((x) => {
        max = Math.max(max, x);
    });
    return max;
}

function incrementToTOp(arr) {
    var max = getMAx(arr);
    var totalStepsRequired = 0
    arr.forEach((x) => {
        totalStepsRequired += (max - x);
    })
    console.log(totalStepsRequired);
}

incrementToTOp([3, 3, 3]);