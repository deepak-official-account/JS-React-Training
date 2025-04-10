var arr1 = [9, 9, 8];
var arr2 = [8, 9];

function getMinAndMax(input) {
  let minValue = 9999999,
    maxValue = -999999;
  for (let i = 0; i < input.length; i++) {
    minValue = Math.min(minValue, input[i]);
    maxValue = Math.max(maxValue, input[i]);
  }

  return [minValue, maxValue];
}

function checkIfNestingPossible(arr1, arr2) {
  var [min1, max1] = getMinAndMax(arr1);
  var [min2, max2] = getMinAndMax(arr2);

  return min2 < min1 && max1 < max2;
}

console.log(checkIfNestingPossible(arr1, arr2));
