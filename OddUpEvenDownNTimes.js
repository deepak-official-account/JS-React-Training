function isEven(num) {
    return num % 2 == 0;
}
function evenOddTransform(arr, num) {

    for (var i = 0; i < num; i++) {

        for (var j = 0; j < arr.length; j++) {
            if (!isEven(arr[j])) arr[j] += 2;
            else arr[j] -= 2;
        }
    }
console.log(arr);
};

evenOddTransform([0,0,0],10);