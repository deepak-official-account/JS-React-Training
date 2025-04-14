function standInLine(arr, num) {
    arr.shift();
    arr.push(num);
    console.log(arr);

}

standInLine([1,2,3,4,5],6);