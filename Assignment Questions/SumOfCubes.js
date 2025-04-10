function sumOfCubes(array) {
  if (array.length <= 0) {
    console.log(0);
    return;
  }

  var ans = 0;

  for (let i = 0; i < array.length; i++) {
    ans += Math.pow(array[i], 3);
  }
  console.log(ans);
}

sumOfCubes([1, 5, 9]);
sumOfCubes([]);
