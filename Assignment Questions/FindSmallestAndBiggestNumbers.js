var input = [23, 55, 64, 21, 87, 12, 99, 3];
function getMinAndMax(array) {
  let minValue = 9999999,
    maxValue = -999999;
  for (let i = 0; i < input.length; i++) {
    minValue = Math.min(minValue, input[i]);
    maxValue = Math.max(maxValue, input[i]);
  }

  return [minValue, maxValue];
}

console.log(getMinAndMax(input));
