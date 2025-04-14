function sumOfFoundIndexes(arr, num) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == num) sum += i;
            }
  console.log(sum);
}

sumOfFoundIndexes([1,2,3,4,23,5,3],3);