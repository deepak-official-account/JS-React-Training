function sumOfEven(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
      if (arr[i][j] % 2 == 0) sum += arr[i][j];
    }
  }
  console.log(sum);
}

sumOfEven([
  [1, 2, 3, 4, 5],
  [1, 2, 1, 0, 0],
  [0, 6, 4, 1, 1],
]);
