function sortInDescending(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function getMaximumPossible(arr) {
  arr = sortInDescending(arr);
  var sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += arr[i];
  }

  console.log(sum);
}

getMaximumPossible([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]);
