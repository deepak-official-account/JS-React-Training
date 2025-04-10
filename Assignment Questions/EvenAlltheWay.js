function isEven(num) {
  return num % 2 == 0;
}
function getEvenNumsAtEvenIndex(array) {
  var ans = [];
  for (let i = 0; i < array.length; i++) {
    if (isEven(i) && isEven(array[i])) ans.push(array[i]);
  }
  console.log(ans);
}

getEvenNumsAtEvenIndex([0, 1, 2, 3, 4]);
